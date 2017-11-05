import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../../../../components/iconLabel'
import Avatar from '../../../../components/avatar'
import './avatarMenu.css'

class MenuContainer extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClick = () => {
    this.setState(state => ({ visible: !state.visible }))
  }

  handleClickOutside = (e) => {
    if (this.menu && !this.menu.contains(e.target)) {
      this.setState(() => ({ visible: false }))
    }
  }

  render() {
    const { fullname, image, signout } = this.props
    const { visible } = this.state
    return (
      <div
        role="button"
        ref={(e) => {
          this.menu = e
        }}
        tabIndex="0"
        className="avatar-menu"
        onClick={this.handleClick}
      >
        <Avatar image={image} fullname={fullname} />
        <div className="menu-content" style={{ display: visible ? 'block' : 'none' }}>
          <div className="menu-title">{fullname}</div>
          <a href="/" onClick={signout}>
            <IconLabel icon="fa fa-sign-out" label="Sign out" />
          </a>
        </div>
      </div>
    )
  }
}

MenuContainer.propTypes = {
  fullname: PropTypes.string,
  image: PropTypes.string,
  signout: PropTypes.func.isRequired,
}

MenuContainer.defaultProps = {
  fullname: undefined,
  image: undefined,
}

export default MenuContainer
