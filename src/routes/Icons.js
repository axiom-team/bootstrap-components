/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Snippet, Arrow } from '../components'
import { Icon, Button, Alert } from 'bootstrap-components'
import { space } from '../utils'

const Icons = () => (
  <div>

    <Snippet
      splitTheGrid
      overrideCode={'import Icon from \'bootstrap-components/Icon\''}
      language="javascript"
    />

    <Snippet subtitle={(
      <div>
        <h3>
          Use any Bootstrap
          {' '}
          <a href="http://getbootstrap.com/components/#glyphicons">
            Glyphicon
          </a>
        </h3>
      </div>
    )}>
      <Icon>search</Icon>
    </Snippet>

    <Snippet
      overrideCode={(
        <Button>
          <Icon>
            align-left
          </Icon>
        </Button>
      )}
    >
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
    </Snippet>

    <Snippet
      overrideCode={(
        <Button size="lg">
          <Icon>star</Icon>
          {space()}
          Star
        </Button>
      )}
    >
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
    </Snippet>

    <Snippet
      overrideCode={(
        <Alert type="danger">
          <Icon>
            exclamation-sign
          </Icon>
          {space()}
          Enter a valid email address
        </Alert>
      )}
    >
      <Alert type="danger">
        <Icon>
          exclamation-sign
        </Icon>
        {' '}
        Enter a valid email address
      </Alert>
    </Snippet>

    <Arrow direction='left'>start</Arrow>
    <Arrow direction="right">dropdowns</Arrow>
  </div>
)

export default Icons
