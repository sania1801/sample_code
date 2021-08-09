import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const StaticSubtitle = ({ subtitle }) => (
  <p className={styles.subtitle}>
    {subtitle}
  </p>
)

StaticSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
}

export default StaticSubtitle
