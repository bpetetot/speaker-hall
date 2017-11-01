import React from 'react'

import Button from '../../../components/button'
import Input from '../../../components/input'
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
        <Input name="country" label="Country" type="text" value="France" />
        <Input name="city" label="City" type="text" value="Nantes" />
        <Input name="bio" label="Biography" type="text" />
      </div>
      <Button className="profile-button">Save profile</Button>
    </div>
  </div>
)

export default Dashboard
