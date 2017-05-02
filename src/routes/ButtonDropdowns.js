/**
 * Created by timur on 3/28/17.
 */

import React from 'react'
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
        splitTheGrid
        overrideCode={'import ButtonGroup from \'bootstrap-components/ButtonGroup\''}
        language="javascript"
      />

      <Snippet
        title="Single"

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

      <Snippet
        title="Sizing"
        overrideCode={(
          <div>
            <ButtonGroup
              dropdown
              title="Large button"
              size="lg"
            >
              {'...'}
            </ButtonGroup>

            <ButtonGroup
              dropdown
              title="Small button"
              size="sm"
            >
              {'...'}
            </ButtonGroup>

            <ButtonGroup
              dropdown
              title="Extra small button"
              size="xs"
            >
              {'...'}
            </ButtonGroup>
          </div>
        )}
      >
        <div>
          <ButtonGroup
            dropdown
            title="Large button"
            size="lg"
          >
            {commonChildren}
          </ButtonGroup>

          <ButtonGroup
            dropdown
            title="Small button"
            size="sm"
          >
            {commonChildren}
          </ButtonGroup>

          <ButtonGroup
            dropdown
            title="Extra small button"
            size="xs"
          >
            {commonChildren}
          </ButtonGroup>
        </div>
      </Snippet>

      <Snippet
        title="Dropup variation"
        overrideCode={(
          <ButtonGroup
            dropup
            split
            title="Dropup"
          >
            {commonChildren}
          </ButtonGroup>
        )}
      >
        <div>
          <ButtonGroup
            dropup
            split
            title="Dropup"
          >
            {commonChildren}
          </ButtonGroup>

          <ButtonGroup
            dropup
            split
            type="primary"
            title="Dropup"
          >
            {commonChildren}
          </ButtonGroup>
        </div>
      </Snippet>

      <Arrow direction="left">button groups</Arrow>
      <Arrow direction="right">input groups</Arrow>
    </div>
  )
}

export default ButtonDropdowns
