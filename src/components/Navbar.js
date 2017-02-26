/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'
import Container from 'bootstrap-components/Container'

const $ = window.$

const styles = {
  tab: {
    textTransform: 'capitalize'
  },
  navbar: {
    margin: '0'
  }
}

const hideNav = () => $('.collapse').collapse('hide')

const Tab = (props, { router }) => {
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
Tab.contextTypes = {
  router: React.PropTypes.object
}

const Navbar = () => (
  <div
    className="navbar navbar-default"
    style={styles.navbar}
  >
    <Container>
      <div className="navbar-header">
        <button
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>

        <Link
          className="navbar-brand"
          to="/getting-started"
          onClick={hideNav}
        >
          Bootstrap Components
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="nav-collapse">
        <ul className="nav navbar-nav">
          <Tab>getting started</Tab>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <Tab>icons</Tab>
          <Tab>dropdowns</Tab>
        </ul>
      </div>
    </Container>
  </div>
)

export default Navbar
