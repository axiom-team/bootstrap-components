/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'bootstrap-components'

const Icons = () => (
  <div>

    <p className="App-intro">
      Use any
      {' '}
      <a
        href="http://getbootstrap.com/components/#glyphicons"
        target="_blank"
      >
        Bootstrap glyphicon
      </a>
    </p>

    <p className="App-intro">
      <Icon>search</Icon>
    </p>

    <p className="App-intro">
      <code>{'<Icon>search</Icon>'}</code>
    </p>

    <Link
      to="/getting-started"
      className="btn btn-default pull-left"
    >
      <span className="glyphicon glyphicon-arrow-left"/> Getting started
    </Link>
  </div>
)

export default Icons
