import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import styles from './styles.module.sass'

const StaticMenuLink = ({
  className,
  anchor,
  text,
  offset,
}) => (
  <Link
    key={anchor}
    className={`${styles.link} ${className}`}
    to={anchor}
    spy
    smooth
    offset={offset}
    duration={500}
    activeClass="active"
  >
    <span className={styles.linkText}>{text}</span>
  </Link>
)

StaticMenuLink.propTypes = {
  className: PropTypes.string,
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  offset: PropTypes.number,
}

StaticMenuLink.defaultProps = {
  className: '',
  offset: 0,
}

export default StaticMenuLink
