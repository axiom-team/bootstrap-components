/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'

const styles = {
  navLink: {
    textTransform: 'capitalize'
  }
}

const NavLink = ({
  children
}) => {

  const link = children.split(' ').join('-')

  return (
    <Link
      style={styles.navLink}

      to={`/${link}`}
    >
      {children}
    </Link>
  )
}

const Navbar = () => (
  <div className="navbar navbar-default">
    <NavLink>getting started</NavLink>
    <NavLink>icons</NavLink>
  </div>
)

export default Navbar
