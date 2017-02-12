/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'

const Icons = () => (
  <div>
    <section>
      Use any
      {' '}
      <a
        href="http://getbootstrap.com/components/#glyphicons"
        target="_blank"
      >
        Bootstrap glyphicon
      </a>
    </section>

    <section>
      <Icon>search</Icon>
    </section>

    <section>
      <code>{'<Icon>search</Icon>'}</code>
    </section>

    <section>
      <Button>
        <Icon>align-left</Icon>
      </Button>

      <Button>
        <Icon>align-center</Icon>
      </Button>

      <Button>
        <Icon>align-right</Icon>
      </Button>
    </section>

    <Link
      to="/getting-started"
      className="pull-left"
    >
      <Button>
        <Icon>arrow-left</Icon> Getting started
      </Button>
    </Link>
  </div>
)

export default Icons
