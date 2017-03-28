/**
 * Created by timur on 3/13/17.
 */

import React from 'react'
import { Snippet } from '../components'
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
  </div>
)

export default ButtonGroups
