/**
 * Created by timur on 3/28/17.
 */

import React from 'react'
import { Snippet, Arrow } from '../components'
import ButtonDropdown from 'bootstrap-components/ButtonDropdown'

const ButtonDropdowns = () => {


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
        overrideCode={(
          <ButtonDropdown
            title="Default"
            type="default"
          >
            {commonChildren}
          </ButtonDropdown>
        )}
      >
        {[
          'default',
          'primary',
          'success',
          'info',
          'warning',
          'danger'
        ].map((type, i) => (
          <ButtonDropdown
            key={i}
            title={type}
            type={type}
          >
            {commonChildren}
          </ButtonDropdown>
        ))}
      </Snippet>

      <Snippet
        title="Split"
        overrideCode={(
          <ButtonDropdown
            title="Default"
            type="default"
            split
          >
            {commonChildren}
          </ButtonDropdown>
        )}
      >
        {[
          'default',
          'primary',
          'success',
          'info',
          'warning',
          'danger'
        ].map((type, i) => (
          <ButtonDropdown
            split
            key={i}
            title={type}
            type={type}
          >
            {commonChildren}
          </ButtonDropdown>
        ))}
      </Snippet>

      <Arrow direction="left">button groups</Arrow>
    </div>
  )
}

export default ButtonDropdowns
