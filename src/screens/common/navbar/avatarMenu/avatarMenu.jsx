import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <div role="button" tabIndex="0" className="avatar-menu" onClick={this.handleClick}>
        <Avatar image={image} fullname={fullname} />
        <div
          ref={(e) => {
            this.menu = e
          }}
          className="menu-content"
          style={{ display: visible ? 'block' : 'none' }}
        >
          <ul>
            <li className="menu-title">{fullname}</li>
            <li>
              <a href="/" onClick={signout}>
                Disconnect
              </a>
            </li>
          </ul>
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
