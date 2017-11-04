/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'redux-little-router'
import { connect } from 'react-redux'

import { isAuthenticated, isInitialized } from '../../redux/auth'

export default (Component) => {
  class ProtectedComponent extends React.Component {
    static propTypes = {
      authenticated: PropTypes.bool.isRequired,
      initialized: PropTypes.bool.isRequired,
      redirectLogin: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.checkAuth()
    }

    componentDidUpdate() {
      this.checkAuth()
    }

    checkAuth = () => {
      const { authenticated, initialized, redirectLogin } = this.props
      if (initialized && !authenticated) {
        redirectLogin()
      }
    }

    render() {
      const { authenticated, ...rest } = this.props
      return authenticated ? <Component {...rest} /> : null
    }
  }

  const mapState = state => ({
    authenticated: isAuthenticated(state),
    initialized: isInitialized(state),
  })

  const mapDispatch = dispatch => ({
    redirectLogin: () => dispatch(push('/login')),
  })

  return connect(mapState, mapDispatch)(ProtectedComponent)
}
