import React from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  resetNextUuid,
} from 'react-accessible-accordion'
import styles from './styles.module.sass'

const CustomAccordion = ({
                           preExpanded,
                           uuid,
                           isOnlyMobile,
                           className,
                           heading,
                           headingClass,
                           panelClass,
                           iconStyle,
                           content,
                         }) => {
  resetNextUuid()

  return (
    <Accordion
      allowZeroExpanded
      preExpanded={preExpanded}
      className={`${styles.accordion} ${className}`}
    >
      <AccordionItem uuid={uuid}>
        <AccordionItemHeading>
          <AccordionItemButton
            className={`${isOnlyMobile ? styles.headingMob : styles.heading} ${headingClass}`}
            title={heading}
          >
            {heading}
            <span className={`icon ${styles.icon} ${iconStyle}`} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel
          className={`${isOnlyMobile ? styles.containerMob : styles.container} ${panelClass}`}
        >
          {content}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

CustomAccordion.propTypes = {
  preExpanded: PropTypes.arrayOf(PropTypes.string),
  uuid: PropTypes.string,
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  headingClass: PropTypes.string,
  panelClass: PropTypes.string,
  iconStyle: PropTypes.string,
  content: PropTypes.instanceOf(Object).isRequired,
  isOnlyMobile: PropTypes.bool,
}

CustomAccordion.defaultProps = {
  preExpanded: [],
  uuid: null,
  className: '',
  headingClass: '',
  panelClass: '',
  iconStyle: '',
  isOnlyMobile: false,
}

export default CustomAccordion
