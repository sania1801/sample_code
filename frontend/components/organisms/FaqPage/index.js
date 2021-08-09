import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import i18n from '@locales'
import {
  StaticSubtitle,
  CustomAccordion,
  StaticParagraph,
} from '@atoms'
import {
  StaticContent,
} from '@organisms/components'
import styles from './styles.module.sass'

const FaqPage = ({ faqCategories }) => {
  const links = faqCategories.map(({ id, name }) => (
    {
      anchor: `link_faq_category_${id}`,
      text: name,
    }
  ))

  return (
    <StaticContent
      title={i18n.t('screens.faq.title')}
      links={links}
    >
      <>
        {faqCategories.map(({ id, name, faqQuestions }) => (
          <div key={`faq_category_${id}`} id={`link_faq_category_${id}`} className={styles.categoryContainer}>
            <StaticSubtitle id={id} subtitle={name} />
            {faqQuestions.map(({ answer, question, id: questionId }) => (
              <CustomAccordion
                key={`faq_question_${questionId}`}
                className={styles.accordion}
                headingClass={styles.accordionHeading}
                heading={question}
                iconStyle={styles.icon}
                panelClass={styles.accordionPanel}
                content={(
                  <StaticParagraph>
                    <>
                      {parse(answer)}
                    </>
                  </StaticParagraph>
                )}
              />
            ))}
          </div>
        ))}
      </>
    </StaticContent>
  )
}

FaqPage.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    faqQuestions: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
}

export default FaqPage
