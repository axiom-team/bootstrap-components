/**
 * Created by timur on 4/20/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import { InputGroup, Grid } from 'bootstrap-components'

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

    <Snippet title="Checkboxes and radio addons">
      <Grid>
        <row>
          <col xs={6}>
            <InputGroup>
              <addon>
                <input type="radio" />
              </addon>

              <input type="text" />
            </InputGroup>
          </col>

          <col xs={6}>
            <InputGroup>
              <addon>
                <input type="radio" />
              </addon>

              <input type="text" />
            </InputGroup>
          </col>
        </row>
      </Grid>
    </Snippet>

    <Arrow direction="left">button dropdowns</Arrow>
  </div>
)

export default InputGroups
