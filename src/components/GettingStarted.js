/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'
import CodeSection from './CodeSection'
import { indent } from '../utils'

const curlyStart = () => '{'
const curlyEnd = () => '}'

const GettingStarted = () => (
  <div>

    <main>
      <h1>Prerequisite</h1>

      <hr/>

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
        in your <code>index.html</code>
      </section>

      <section>
        Bootstrap's JavaScript require's
        {' '}
        <a
          href="https://developers.google.com/speed/libraries/#jquery"
          target="_blank"
        >
          JQuery
        </a>
      </section>
    </main>

    <main>
      <h1>Install</h1>

      <hr/>

      <section>Install with npm</section>

      <div className="pull-right">
        <CodeSection>npm install --save bootstrap-components</CodeSection>
      </div>
    </main>

    <main>
      <h1>Import</h1>

      <hr/>

      <section>
        Either import multiple components in one statement
      </section>

      <div className="pull-right">
        <CodeSection>import {curlyStart()}</CodeSection>

        <CodeSection style={indent()}>Icon,</CodeSection>

        <CodeSection style={indent()}>
          Button,
        </CodeSection>

        <CodeSection style={indent()}>Container</CodeSection>

        <CodeSection>{curlyEnd()} from 'bootstrap-components'</CodeSection>
      </div>
    </main>

    <main>
      <section>Or import components individually</section>

      <div className="pull-right">
        <CodeSection>import Icon from 'bootstrap-components/Icon'</CodeSection>

        <CodeSection>import Button from 'bootstrap-components/Button'</CodeSection>

        <CodeSection>import Container from 'bootstrap-components/Container'</CodeSection>
      </div>
    </main>

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
