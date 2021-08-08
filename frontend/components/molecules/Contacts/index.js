import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@locales'
import styles from './styles.module.sass'

const Contacts = ({
  containerClass,
  questionClass,
  titleClass,
  contactsContainerClass,
  linkWhite,
  linkClass,
  isCallCenterTitle,
  title,
  isQuestionTitle,
  questionTitleStyle,
}) => (
  <div className={`${styles.contacts} ${containerClass}`}>
    {isQuestionTitle && (
    <div className={questionTitleStyle}>
      <p className={`${styles.question} ${questionClass}`}>{title}</p>
    </div>
    )}
    {isCallCenterTitle && (
    <p className={`${styles.title} ${titleClass}`}>{`${i18n.t('navigation.contacts.callCenter')}:`}</p>
    )}
    <div className={contactsContainerClass}>
      <a
        href={`tel: ${i18n.t('contacts.mainPhone')}`}
        className={`${styles.contactLink} ${linkWhite ? styles.white : ''} ${linkClass}`}
      >
        {i18n.t('contacts.mainPhone')}
      </a>
    </div>
  </div>
)

Contacts.propTypes = {
  containerClass: PropTypes.string,
  questionClass: PropTypes.string,
  titleClass: PropTypes.string,
  contactsContainerClass: PropTypes.string,
  linkWhite: PropTypes.bool,
  linkClass: PropTypes.string,
  isCallCenterTitle: PropTypes.bool,
  title: PropTypes.string,
  isQuestionTitle: PropTypes.bool,
  questionTitleStyle: PropTypes.string,
}

Contacts.defaultProps = {
  containerClass: '',
  questionClass: '',
  titleClass: '',
  contactsContainerClass: '',
  linkWhite: false,
  linkClass: '',
  isCallCenterTitle: false,
  title: '',
  isQuestionTitle: false,
  questionTitleStyle: '',
}

export default Contacts
