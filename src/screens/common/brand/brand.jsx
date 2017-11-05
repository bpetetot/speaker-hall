import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'
import cn from 'classnames'

import IconLabel from '../../../components/iconLabel'
import './brand.css'

class Brand extends Component {
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
    const { className, title } = this.props
    const { visible } = this.state
    return (
      <div
        role="button"
        ref={(e) => {
          this.menu = e
        }}
        tabIndex="0"
        className={cn('brand', className)}
        onClick={this.handleClick}
      >
        <div className="brand-title">
          <span>{title}</span>
          <span>
            <i className="fa fa-caret-down" />
          </span>
        </div>
        <div className="menu-content" style={{ display: visible ? 'block' : 'none' }}>
          <div className="menu-link">
            <Link href="/speaker">
              <IconLabel icon="fa fa-microphone" label="Speaker Hall" />
            </Link>
          </div>
          <div className="menu-link">
            <Link href="/organizer">
              <IconLabel icon="fa fa-rocket" label="Organizer Hall" />
            </Link>
          </div>
          <div className="menu-link">
            <Link href="/">
              <IconLabel icon="fa fa-home" label="Conference Hall" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Brand.defaultProps = {
  className: undefined,
}

export default Brand
