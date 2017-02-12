/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'

const GettingStarted = () => (
  <div>
    <p className="App-intro">
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
    </p>

    <p className="App-intro">
      Bootstrap's JavaScript require's
      {' '}
      <a
        href="https://developers.google.com/speed/libraries/#jquery"
        target="_blank"
      >
        JQuery
      </a>.
    </p>

    <p className="App-intro">
      You can import multiple components
    </p>

    <code>import {'{'} Icon, Button, Container {'}'} from 'bootstrap-components'</code>

    <p className="App-intro">
      Or import components individually
    </p>

    <code>import Icon from 'bootstrap-components/Icon'</code>
    <br/>
    <code>import Button from 'bootstrap-components/Button'</code>
    <br/>
    <code>import Container from 'bootstrap-components/Container'</code>

    <Link
      to="/icons"
      className="btn btn-default pull-right"
    >
      Icons
      {' '}
      <span
        className="glyphicon glyphicon-arrow-right"
      />
    </Link>
  </div>
)

export default GettingStarted
