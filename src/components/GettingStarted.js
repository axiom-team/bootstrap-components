/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'

const curlyStart = () => '{'
const curlyEnd = () => '}'
const indent = () => ({
  marginLeft: '1em'
})

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
      Either import multiple components in one statement
    </section>

    <section>
      <code>import {curlyStart()}</code>
    </section>

    <section>
      <code style={indent()}>Icon,</code>
    </section>

    <section>
      <code style={indent()}>Button,</code>
    </section>

    <section>
      <code style={indent()}>Container</code>
    </section>

    <section>
      <code>{curlyEnd()} from 'bootstrap-components'</code>
    </section>

    <section>
      Or import components individually
    </section>

    <section>
      <code>import Icon from 'bootstrap-components/Icon'</code>
    </section>

    <section>
      <code>import Button from 'bootstrap-components/Button'</code>
    </section>

    <section>
      <code>import Container from 'bootstrap-components/Container'</code>
    </section>

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
