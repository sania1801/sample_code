import React from 'react'
import PropTypes from 'prop-types'
import { StaticMenuLink } from '@atoms'
import styles from './styles.module.sass'

const StaticMenu = ({
  className,
  linkClass,
  links,
}) => {
  const DEFAULT_OFFSET = 24

  return (
    <nav className={`${styles.container} ${className}`}>
      {links.map(({ anchor, text }) => (
        <StaticMenuLink
          className={`${styles.link} ${linkClass}`}
          anchor={anchor}
          text={text}
          offset={(DEFAULT_OFFSET) * (-1)}
        />
      ))}
    </nav>
  )
}

StaticMenu.propTypes = {
  className: PropTypes.string,
  linkClass: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

StaticMenu.defaultProps = {
  className: '',
  linkClass: '',
}

export default StaticMenu
