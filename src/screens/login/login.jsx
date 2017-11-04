import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../../components/iconLabel'
import './login.css'

const Login = ({ signin, nextUrl }) => (
  <div className="home-login">
    <button className="btn btn-primary" onClick={() => signin('google', nextUrl)}>
      <IconLabel icon="fa fa-google" label="Login with Google" />
    </button>
  </div>
)

Login.propTypes = {
  signin: PropTypes.func.isRequired,
  nextUrl: PropTypes.string,
}

Login.defaultProps = {
  nextUrl: undefined,
}

export default Login
