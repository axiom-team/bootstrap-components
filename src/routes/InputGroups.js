/**
 * Created by timur on 4/20/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import InputGroup from 'bootstrap-components/InputGroup'

const styles = {
  column: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}

const InputGroups = () => (
  <div>
    <Snippet>
      <div style={styles.column}>
        <InputGroup>
          <addon>@</addon>
          <input type="text" placeholder="Username" />
        </InputGroup>

        <InputGroup>
          <input type="text" placeholder="Recipient's username" />
          <addon>@example.com</addon>
        </InputGroup>

        <InputGroup>
          <addon>$</addon>
          <input type="text" />
          <addon>.00</addon>
        </InputGroup>

        <InputGroup>
          <addon>https://example.com/users/</addon>
          <input type="text" />
        </InputGroup>
      </div>
    </Snippet>

    <Snippet title="Sizing">
      <div style={styles.column}>
        <InputGroup size="lg">
          <addon>@</addon>
          <input type="text" placeholder="Username" />
        </InputGroup>

        <InputGroup>
          <addon>@</addon>
          <input type="text" placeholder="Username" />
        </InputGroup>

        <InputGroup size="xs">
          <addon>@</addon>
          <input type="text" placeholder="Username" />
        </InputGroup>
      </div>
    </Snippet>


    <Arrow direction="left">button dropdowns</Arrow>
  </div>
)

export default InputGroups
