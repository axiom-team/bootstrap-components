/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Link } from 'react-router'
import Code from './Code'
import { Icon, Button } from 'bootstrap-components'

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

      <div className="row">
        <div className="col-sm-6">
          <section>
            <Icon>search</Icon>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {'<Icon>search</Icon>'}
          </Code>
        </div>
      </div>
    </main>


    <main>

      <div className="row">
        <div className="col-sm-6">
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
        </div>

        <div className="col-sm-6">
          <Code>
{`<Button>
  <Icon>left-align</Icon>
</Button>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <div className="row">
        <div className="col-sm-6">
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
        </div>

        <div className="col-sm-6">
          <Code>
{`<Button size="lg">
  <Icon>star</Icon> Star
</Button>`}
          </Code>
        </div>
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
