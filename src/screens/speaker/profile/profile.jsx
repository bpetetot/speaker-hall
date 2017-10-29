import React from 'react'

import Input from '../../../components/input'
import './profile.css'

const Dashboard = () => (
  <div className="profile">
    <img src="http://via.placeholder.com/500x500" alt="profile" />
    <div className="profile-info">
      <h2>Benjamin Petetot</h2>
      <small>benjamin.petetot@email.com</small>
      <div className="profile-form">
        <Input name="company" label="Company" type="text" value="Zenika" />
        <Input name="phone" label="Phone" type="text" value="+33123456789" />
        <Input name="language" label="Favorite language" type="text" value="French" />
        <Input name="country" label="Country" type="text" value="France" />
        <Input name="city" label="City" type="text" value="Nantes" />
        <Input name="bio" label="Biography" type="text" />
      </div>
      <button className="profile-button">Save profile</button>
    </div>
  </div>
)

export default Dashboard
