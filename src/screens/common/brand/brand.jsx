import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'
import cn from 'classnames'

import Dropdown from '../../../components/dropdown'
import IconLabel from '../../../components/iconLabel'
import './brand.css'

const Brand = ({ title, currentApp, className }) => {
  const brand = (
    <div className="brand-title">
      <span>{title}</span>
      <span>
        <i className="fa fa-caret-down" />
      </span>
    </div>
  )
  return (
    <Dropdown className={cn('brand', className)} menuClassName="brand-menu" action={brand}>
      {currentApp === 'organizer' && (
        <Link href="/speaker">
          <IconLabel icon="fa fa-microphone" label="Speaker Hall" />
        </Link>
      )}
      {currentApp === 'speaker' && (
        <Link href="/organizer">
          <IconLabel icon="fa fa-rocket" label="Organizer Hall" />
        </Link>
      )}
      <Link href="/">
        <IconLabel icon="fa fa-home" label="Conference Hall" />
      </Link>
    </Dropdown>
  )
}

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  currentApp: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Brand
