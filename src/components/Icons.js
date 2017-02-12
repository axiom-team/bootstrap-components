/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Icon, Button } from 'bootstrap-components'
import CodeSection from './CodeSection'
import { indent } from '../utils'

const Icons = () => (
  <div>
    <main>
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

      <hr/>

      <Icon>search</Icon>

      <div className="pull-right">
        <CodeSection>
          {'<Icon>search</Icon>'}
        </CodeSection>
      </div>
    </main>


    <main>
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

      <div className="pull-right">
        <CodeSection>
          {'<Button>'}
        </CodeSection>

        <CodeSection style={indent()}>
          {'<Icon>left-align</Icon>'}
        </CodeSection>

        <CodeSection>
          {'</Button>'}
        </CodeSection>
      </div>
    </main>

    <main>
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

      <div className="pull-right">
        <CodeSection>
          {'<Button size="lg">'}
        </CodeSection>

        <CodeSection style={indent()}>
          {'<Icon>star</Icon> Star'}
        </CodeSection>

        <CodeSection>
          {'</Button>'}
        </CodeSection>
      </div>
    </main>

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
