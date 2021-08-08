import React from 'react'
import PropTypes from 'prop-types'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  /* eslint-disable no-console */
  console.log(err)
  /* eslint-enable no-console */

  let statusCode = 404
  if (res) {
    statusCode = res.statusCode
  } else if (err) {
    statusCode = err.statusCode
  }
  return { statusCode }
}

Error.propTypes = {
  statusCode: PropTypes.number,
}

Error.defaultProps = {
  statusCode: null,
}

export default Error
