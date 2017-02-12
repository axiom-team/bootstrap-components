/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'
import { indent } from '../utils'

const CodeSection = (props) => (
  <section>
    <code {...props}>{props.children}</code>
  </section>
)

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

    <CodeSection>
      {'<Icon>search</Icon>'}
    </CodeSection>

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

      <Button>
        <Icon>align-justify</Icon>
      </Button>
    </section>

    <CodeSection>
      {'<Button>'}
    </CodeSection>

    <CodeSection style={indent()}>
      {'<Icon>left-align</Icon>'}
    </CodeSection>

    <CodeSection>
      {'</Button>'}
    </CodeSection>

    <section>
      <Button size="lg">
        <Icon>star</Icon> Star
      </Button>

      <Button>
        <Icon>star</Icon> Star
      </Button>

      <Button size="sm">
        <Icon>star</Icon> Star
      </Button>

      <Button size="xs">
        <Icon>star</Icon> Star
      </Button>
    </section>

    <CodeSection>
      {'<Button size="lg">'}
    </CodeSection>

    <CodeSection style={indent()}>
      {'<Icon>star</Icon> Star'}
    </CodeSection>

    <CodeSection>
      {'</Button>'}
    </CodeSection>

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
