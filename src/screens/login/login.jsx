import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../../components/iconLabel'
import './login.css'

const Login = ({ user, signin, signout }) => (
  <div className="home-login">
    {!user && (
      <button className="btn btn-primary" onClick={() => signin('google')}>
        <IconLabel icon="fa fa-google" label="Login with Google" />
      </button>
    )}

    {user && (
      <div>
        <h1>{user}</h1>
        <button className="btn btn-primary" onClick={signout}>
          <IconLabel icon="fa fa-times" label="Disconnect" />
        </button>
      </div>
    )}
  </div>
)

Login.propTypes = {
  user: PropTypes.string,
  signin: PropTypes.func.isRequired,
  signout: PropTypes.func.isRequired,
}

Login.defaultProps = {
  user: undefined,
}

export default Login
