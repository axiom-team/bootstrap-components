/**
 * Created by timur on 3/28/17.
 */

import React from 'react'
import { Snippet, Arrow } from '../components'
import ButtonGroup from 'bootstrap-components/ButtonGroup'

const styles = {
  capitalize: {
    textTransform: 'capitalize'
  }
}

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
    <div className="button-dropdowns-single">
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
        <div>
          {[
            'default',
            'primary',
            'success',
            'info',
            'warning',
            'danger'
          ].map((type, i) => (
            <ButtonGroup
              key={i}
              dropdown
              title={type}
              type={type}
              style={styles.capitalize}
            >
              {commonChildren}
            </ButtonGroup>
          ))}
        </div>
      </Snippet>

      <Snippet
        title="Split"
        overrideCode={(
          <ButtonGroup
            dropdown
            split
            title="Danger"
            type="danger"
          >
            {commonChildren}
          </ButtonGroup>
        )}
      >
        <div>
          {[
            'default',
            'primary',
            'success',
            'info',
            'warning',
            'danger'
          ].map((type, i) => (
            <ButtonGroup
              key={i}
              dropdown
              split
              title={type}
              type={type}
              style={styles.capitalize}
            >
              {commonChildren}
            </ButtonGroup>
          ))}
        </div>
      </Snippet>

      <Arrow direction="left">button groups</Arrow>
    </div>
  )
}

export default ButtonDropdowns
