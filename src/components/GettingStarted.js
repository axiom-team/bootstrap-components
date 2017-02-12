/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'

const styles = {
  header: {
    margin: '1em .75em'
  }
}
const curlyStart = () => '{'
const curlyEnd = () => '}'
const indent = () => ({
  marginLeft: '1em'
})

const GettingStarted = () => (
  <div>

    <h1 style={styles.header}>Prerequisite</h1>

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

    <h1 style={styles.header}>Install</h1>

    <section>Install with npm</section>

    <section>
      <code>npm install --save bootstrap-components</code>
    </section>

    <h1 style={styles.header}>Import</h1>

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
