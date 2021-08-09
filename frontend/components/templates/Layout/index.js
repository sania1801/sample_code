import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  const childrenWithProps = React.cloneElement(children)
  return (
    <div className="wrapper">
      <main className="main">
        {childrenWithProps}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
