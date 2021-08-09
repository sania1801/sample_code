import React from 'react'
import PropTypes from 'prop-types'
import {
  StaticMenu,
  Contacts,
} from '@molecules'
import styles from './styles.module.sass'

const StaticContent = ({ title, links, children }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <StaticMenu className={styles.menu} links={links} />
    <div className={styles.content}>
      <div className={styles.infoContainer}>
        {children}
      </div>
      <Contacts
        containerClass={styles.contacts}
        questionTitleStyle={styles.contactsQuestion}
        questionClass={styles.contactsText}
        titleClass={styles.contactsTitle}
        contactsContainerClass={styles.contactsContainer}
        linkClass={styles.contactsLink}
        isQuestionTitle
        linkContainerClass={styles.contactsLinkContainer}
      />
    </div>
  </div>
)

StaticContent.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element.isRequired,
}

export default StaticContent
