import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

class PrivateFragment extends React.Component {
  componentDidUpdate() {
    this.handleRedirect()
  }

  handleRedirect = () => {
    const { isInitialized, isAuthenticated, redirectLogin } = this.props
    if (isInitialized && !isAuthenticated) {
      redirectLogin()
    }
  }

  render() {
    const {
      isInitialized, isAuthenticated, redirectLogin, children, ...rest
    } = this.props
    if (!isInitialized) {
      return null
    }
    return <Fragment {...rest}>{children}</Fragment>
  }
}

PrivateFragment.propTypes = {
  isInitialized: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  redirectLogin: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

PrivateFragment.defaultProps = {
  isInitialized: false,
  isAuthenticated: false,
}

export default PrivateFragment
