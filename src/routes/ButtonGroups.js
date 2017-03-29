/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Snippet, Arrow } from '../components'
import ButtonGroup from 'bootstrap-components/ButtonGroup'

const ButtonGroups = () => (
  <div>
    <Snippet>
      <ButtonGroup>
        <button>Left</button>
        <button>Middle</button>
        <button>Right</button>
      </ButtonGroup>
    </Snippet>

    <Snippet
      title="Button toolbar"
      overrideCode={
        <ButtonGroup toolbar>
          <ButtonGroup>{'...'}</ButtonGroup>
          <ButtonGroup>{'...'}</ButtonGroup>
          <ButtonGroup>{'...'}</ButtonGroup>
        </ButtonGroup>
      }
    >
      <ButtonGroup toolbar>
        <ButtonGroup>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </ButtonGroup>

        <ButtonGroup>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </ButtonGroup>

        <ButtonGroup>
          <button>8</button>
        </ButtonGroup>
      </ButtonGroup>
    </Snippet>

    <Snippet
      title="Sizing"
      overrideCode={(
        <div>
          <ButtonGroup size="lg">
            {'...'}
          </ButtonGroup>
          <ButtonGroup>
            {'...'}
          </ButtonGroup>
          <ButtonGroup size="sm">
            {'...'}
          </ButtonGroup>
          <ButtonGroup size="xs">
            {'...'}
          </ButtonGroup>
        </div>
      )}
    >
      <div className="button-group-sizing">
        <ButtonGroup size="lg">
          <button>Left</button>
          <button>Middle</button>
          <button>Right</button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <button>Left</button>
          <button>Middle</button>
          <button>Right</button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <button>Left</button>
          <button>Middle</button>
          <button>Right</button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="xs">
          <button>Left</button>
          <button>Middle</button>
          <button>Right</button>
        </ButtonGroup>
      </div>
    </Snippet>

    <Snippet
      title="Dropdowns"
      subtitle={
        <div>
          Children of the button group dropdown are identical to the
          {' '}
          <Link to="/dropdowns">Dropdown Component</Link>'s children.
        </div>
      }
    >
      <ButtonGroup>
        <button>1</button>
        <button>2</button>

        <ButtonGroup dropdown title="Dropdown">
          <div>Dropdown link</div>
          <div>Dropdown link</div>
        </ButtonGroup>
      </ButtonGroup>
    </Snippet>

    <Snippet
      title="Vertical variation"
      overrideCode={(
        <ButtonGroup vertical>{'...'}</ButtonGroup>
      )}
    >
      <ButtonGroup vertical>
        <button>Button</button>
        <button>Button</button>

        <ButtonGroup dropdown title="Dropdown">
          <div>Dropdown link</div>
          <div>Dropdown link</div>
        </ButtonGroup>

        <button>Button</button>
        <button>Button</button>

        <ButtonGroup dropdown title="Dropdown">
          <div>Dropdown link</div>
          <div>Dropdown link</div>
        </ButtonGroup>
        <ButtonGroup dropdown title="Dropdown">
          <div>Dropdown link</div>
          <div>Dropdown link</div>
        </ButtonGroup>
        <ButtonGroup dropdown title="Dropdown">
          <div>Dropdown link</div>
          <div>Dropdown link</div>
        </ButtonGroup>
      </ButtonGroup>
    </Snippet>

    <Snippet
      title="Justified"
      overrideCode={(
        <ButtonGroup justified>
          {'...'}
        </ButtonGroup>
      )}
    >
      <ButtonGroup justified>
        <button>Left</button>
        <button>Middle</button>
        <button>Right</button>
      </ButtonGroup>

      <hr />

      <ButtonGroup justified>
        <button>Left</button>
        <button>Middle</button>
        <ButtonGroup dropdown title="Dropdown">
          <div>Action</div>
          <div>Another action</div>
          <div>Something else here</div>
          <hr />
          <div>Separated link</div>
        </ButtonGroup>
      </ButtonGroup>
    </Snippet>

    <Arrow direction="left">dropdowns</Arrow>
    <Arrow direction="right">button dropdowns</Arrow>

  </div>
)

export default ButtonGroups
