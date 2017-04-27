/**
 * Created by timur on 4/20/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import { InputGroup, Grid, Icon } from 'bootstrap-components'

const styles = {
  column: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}

const InputGroups = () => {

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
    <div>

      <Snippet
        splitTheGrid
        overrideCode={`import InputGroup from 'bootstrap-components/InputGroup'
// or
import { InputGroup } from 'bootstrap-components'`}
        language="javascript"
      />

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

          <InputGroup size="sm">
            <addon>@</addon>
            <input type="text" placeholder="Username" />
          </InputGroup>
        </div>
      </Snippet>

      <Snippet title="Checkboxes and radio addons">
        <Grid>
          <row>
            <col sm={6}>
              <InputGroup>
                <addon>
                  <input type="checkbox" />
                </addon>

                <input type="text" />
              </InputGroup>
            </col>

            <col sm={6}>
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

      <Snippet title="Button addons">
        <Grid>
          <row>
            <col sm={6}>
              <InputGroup>
                <button>Go!</button>
                <input type="text" placeholder="Search for..." />
              </InputGroup>
            </col>

            <col sm={6}>
              <InputGroup>
                <input type="text" placeholder="Search for..." />
                <button>Go!</button>
              </InputGroup>
            </col>
          </row>
        </Grid>
      </Snippet>

      <Snippet title="Buttons with dropdowns">
        <Grid>
          <row>
            <col sm={6}>
              <InputGroup>
                <button dropdown title="Action">
                  {commonChildren}
                </button>
                <input type="text" placeholder="Search for..." />
              </InputGroup>
            </col>

            <col sm={6}>
              <InputGroup>
                <input type="text" placeholder="Search for..." />
                <button
                  dropdown
                  title="Action"
                >
                  {commonChildren}
                </button>
              </InputGroup>
            </col>
          </row>
        </Grid>
      </Snippet>

      <Snippet
        title="Segmented buttons"
        overrideCode={(
          <div>
            <InputGroup>
              <button>Action</button>
              <button dropdown>{'...'}</button>
              <input type="text" />
            </InputGroup>

            <InputGroup>
              <button>Action</button>
              <button dropdown>{'...'}</button>
              <input type="text" />
            </InputGroup>
          </div>
        )}
      >
        <Grid>
          <row>
            <col md={6}>
              <InputGroup>
                <button>Action</button>
                <button dropdown>{commonChildren}</button>
                <input type="text" />
              </InputGroup>
            </col>

            <col md={6}>
              <InputGroup>
                <input type="text" />
                <button>Action</button>
                <button dropdown>{commonChildren}</button>
              </InputGroup>
            </col>
          </row>
        </Grid>
      </Snippet>

      <Snippet title="Multiple buttons">
        <Grid>
          <row>
            <col md={6}>
              <InputGroup>
                <button>
                  <Icon>bold</Icon>
                </button>
                <button>
                  <Icon>italic</Icon>
                </button>
                <input type="text" />
              </InputGroup>
            </col>

            <col md={6}>
              <InputGroup>
                <input type="text" />
                <button>
                  <Icon>question-sign</Icon>
                </button>
                <button>Action</button>
              </InputGroup>
            </col>
          </row>
        </Grid>
      </Snippet>

      <Arrow direction="left">button dropdowns</Arrow>
      <Arrow direction="right">navs</Arrow>
    </div>
  )
}

export default InputGroups
