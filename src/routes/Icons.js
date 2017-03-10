/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Code, Arrow } from '../components'
import { Icon, Button, Alert } from 'bootstrap-components'

const Icons = () => (
  <div>
    <main>
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
          <section>
            <Button>
              <Icon>
                align-left
              </Icon>
            </Button>

            <Button>
              <Icon>
                align-center
              </Icon>
            </Button>

            <Button>
              <Icon>
                align-right
              </Icon>
            </Button>

            <Button>
              <Icon>
                align-justify
              </Icon>
            </Button>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Button>
  <Icon>
    align-left
  </Icon>
</Button>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <div className="row">
        <div className="col-sm-6">
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

    <main>
      <div className="row">
        <div className="col-sm-6">
          <section>
            <Alert type="danger">
              <Icon>
                exclamation-sign
              </Icon>
              {' '}
              Enter a valid email address
            </Alert>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Alert type="danger">
  <Icon>
    exclamation-sign
  </Icon>
  {' '}
  Enter a valid email address
</Alert>`}
          </Code>
        </div>
      </div>
    </main>

    <Arrow direction='left'>getting started</Arrow>
    <Arrow direction="right">dropdowns</Arrow>
  </div>
)

export default Icons
