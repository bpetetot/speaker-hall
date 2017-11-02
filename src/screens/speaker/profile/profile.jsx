import React from 'react'
import { Link } from 'redux-little-router'

import Input from '../../../components/form/input'
import Textarea from '../../../components/form/textarea'
import './profile.css'

const Dashboard = () => (
  <div className="profile">
    <div className="profile-image">
      <img src="http://via.placeholder.com/500x500" alt="profile" />
      <a href="/notimplemented">update your image</a>
    </div>
    <div className="profile-info">
      <h1>Benjamin Petetot</h1>
      <small>benjamin.petetot@email.com</small>
      <div className="profile-form">
        <Input name="company" label="Company" type="text" value="Zenika" />
        <Input name="phone" label="Phone" type="text" value="+33123456789" />
        <Input name="language" label="Favorite language" type="text" value="French" />
        <Input name="city" label="City" type="text" value="Nantes" />
        <Input name="country" label="Country" type="text" value="France" />
        <Textarea name="bio" label="Biography" />
      </div>
      <Link href="/" className="profile-button btn btn-primary">
        Save profile
      </Link>
    </div>
  </div>
)

export default Dashboard
