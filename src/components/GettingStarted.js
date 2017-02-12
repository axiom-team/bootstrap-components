/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'

const GettingStarted = () => (
  <div>
    <section>
      Load
      {' '}
      <a
        href="http://getbootstrap.com/getting-started/"
        target="_blank"
      >
        Bootstrap's CSS and JavaScript
      </a>
      {' '}
      in your <code>index.html</code>.
    </section>

    <section>
      Bootstrap's JavaScript require's
      {' '}
      <a
        href="https://developers.google.com/speed/libraries/#jquery"
        target="_blank"
      >
        JQuery
      </a>.
    </section>

    <section>
      You can import multiple components
    </section>

    <code>import {'{'} Icon, Button, Container {'}'} from 'bootstrap-components'</code>

    <section>
      Or import components individually
    </section>

    <code>import Icon from 'bootstrap-components/Icon'</code>
    <br/>
    <code>import Button from 'bootstrap-components/Button'</code>
    <br/>
    <code>import Container from 'bootstrap-components/Container'</code>

    <Link
      to="/icons"
      className="pull-right"
    >
      <Button>
        Icons
        {' '}
        <Icon>arrow-right</Icon>
      </Button>
    </Link>
  </div>
)

export default GettingStarted
