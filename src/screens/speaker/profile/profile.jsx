import React from 'react'
import { css } from 'glamor'

import Input from '../../../components/input'
import style from './profile.style'

const Dashboard = () => (
  <div className={css(style.profile)}>
    <div className={css(style.image)}>
      <img src="http://via.placeholder.com/500x500" alt="profile" />
      <a href="/notimplemented">update your image</a>
    </div>
    <div className={css(style.info)}>
      <h1>Benjamin Petetot</h1>
      <small>benjamin.petetot@email.com</small>
      <div className={css(style.form)}>
        <Input name="company" label="Company" type="text" value="Zenika" />
        <Input name="phone" label="Phone" type="text" value="+33123456789" />
        <Input name="language" label="Favorite language" type="text" value="French" />
        <Input name="country" label="Country" type="text" value="France" />
        <Input name="city" label="City" type="text" value="Nantes" />
        <Input name="bio" label="Biography" type="text" />
      </div>
      <button className={css(style.button)}>Save profile</button>
    </div>
  </div>
)

export default Dashboard
