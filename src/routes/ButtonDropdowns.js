/**
 * Created by timur on 3/28/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Snippet, Arrow } from '../components'
import ButtonGroup from 'bootstrap-components/ButtonGroup'

const ButtonDropdowns = () => {

  const types = [
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger'
  ]

  const commonChildren = (
    <div>
      <div>Action</div>
      <div>Another action</div>
      <div>Something else here</div>
      <hr />
      <div>Separated link</div>
    </div>
  ).props.children

  return (
    <div className="button-dropdowns">
      <Snippet
        title="Single"

        subtitle={
          <div>
            Children of the button group dropdown are identical to the
            {' '}
            <Link to="/dropdowns">Dropdown Component</Link>'s children
          </div>
        }

        overrideCode={(
          <ButtonGroup
            dropdown
            title="Default"
            type="default"
          >
            {commonChildren}
          </ButtonGroup>
        )}
      >
        {types.map((type, i) => (
          <ButtonGroup
            key={i}
            dropdown
            title={type}
            type={type}
          >
            {commonChildren}
          </ButtonGroup>
        ))}
      </Snippet>

      <Snippet
        title="Split"
        overrideCode={(
          <ButtonGroup
            dropdown
            title="Default"
            type="default"
            split
          >
            {commonChildren}
          </ButtonGroup>
        )}
      >
        {types.map((type, i) => (
          <ButtonGroup
            dropdown
            split
            key={i}
            title={type}
            type={type}
          >
            {commonChildren}
          </ButtonGroup>
        ))}
      </Snippet>

      <Arrow direction="left">button groups</Arrow>
    </div>
  )
}

export default ButtonDropdowns
