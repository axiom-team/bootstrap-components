/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { hideNav } from '../tools/utils'

const styles = {
  tab: {
    textTransform: 'capitalize'
  }
}

export const NavTab = (props, { router }) => {
  const to = `/${props.children.split(' ').join('-')}`
  const isActive = router.isActive(to, props.params)
  const className = isActive ? 'active' : ''
  const link = (
    <Link to={to} {...props}/>
  )

  return (
    <li
      style={styles.tab}
      className={className}
      onClick={hideNav}
    >
      {link}
    </li>
  )
}
NavTab.contextTypes = {
  router: React.PropTypes.object
}