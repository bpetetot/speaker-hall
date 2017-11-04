import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../../components/navbar'
import AvatarMenu from './avatarMenu'

const SpeakerNavbar = ({ className }) => (
  <Navbar className={className}>
    <AvatarMenu />
  </Navbar>
)

SpeakerNavbar.propTypes = {
  className: PropTypes.string,
}

SpeakerNavbar.defaultProps = {
  className: undefined,
}

export default SpeakerNavbar
