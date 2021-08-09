import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const StaticParagraph = ({ className, text, children }) => (
  <div className={`${styles.text} ${className}`}>
    {text || children}
  </div>
)

StaticParagraph.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
}

StaticParagraph.defaultProps = {
  className: '',
  text: null,
  children: null,
}

export default StaticParagraph
