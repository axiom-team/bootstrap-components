/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'bootstrap-components'

const Icons = () => (
  <div>


    <Link
      to="/getting-started"
      className="btn btn-default pull-left"
    >
      <span className="glyphicon glyphicon-arrow-left"/> Getting started
    </Link>
  </div>
)

export default Icons
