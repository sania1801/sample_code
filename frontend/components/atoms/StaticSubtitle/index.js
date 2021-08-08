import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const StaticSubtitle = ({ subtitle }) => (
  <h2 className={styles.subtitle}>
    {subtitle}
  </h2>
)

StaticSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
}

export default StaticSubtitle
