import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { test } from '@store/user/action'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import i18n from '@locales/index'

const Layout = ({
  setUsers,
  users,
}) => {
  useEffect(() => {
    setUsers()
  }, [])

  return (
    <div>
      <h1>
        {i18n.t('hello')}
        !
      </h1>
      {users.map(({ id, name, surname }) => (
        <h2 key={id}>
          {i18n.t('hello')}
          ,
          {' '}
          {name}
          {' '}
          {surname}
          !
        </h2>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setUsers: test,
}, dispatch)

Layout.propTypes = {
  setUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
}

Layout.defaultProps = {
  users: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
