import React from 'react'

import { InputLabel, TextareaLabel } from '../../../components/form'
import './profile.css'

const Dashboard = () => (
  <div className="profile">
    <div className="profile-image">
      <img src="https://via.placeholder.com/500x500" alt="profile" />
      <a href="/notimplemented">update your image</a>
    </div>
    <div className="profile-info">
      <h1>Benjamin Petetot</h1>
      <small>benjamin.petetot@email.com</small>
      <div className="profile-form">
        <InputLabel name="company" label="Company" type="text" value="Zenika" />
        <InputLabel name="phone" label="Phone" type="text" value="+33123456789" />
        <InputLabel name="language" label="Favorite language" type="text" value="French" />
        <InputLabel name="city" label="City" type="text" value="Nantes" />
        <InputLabel name="country" label="Country" type="text" value="France" />
        <TextareaLabel name="bio" label="Biography" />
      </div>
      <button className="profile-button btn btn-primary">Save profile</button>
    </div>
  </div>
)

export default Dashboard
