import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../../components/iconLabel'
import './login.css'

const Login = ({ signin, nextUrl }) => (
  <div className="login">
    <h1>Connect to Conference Hall</h1>
    <div>
      <button className="btn btn-google" onClick={() => signin('google', nextUrl)}>
        <IconLabel icon="fa fa-google" label="With Google" />
      </button>
      <button className="btn btn-twitter" onClick={() => signin('twitter', nextUrl)}>
        <IconLabel icon="fa fa-twitter" label="With Twitter" />
      </button>
      <button className="btn btn-github" onClick={() => signin('github', nextUrl)}>
        <IconLabel icon="fa fa-github" label="With Github" />
      </button>
    </div>
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
