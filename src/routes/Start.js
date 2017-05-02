/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import { Code, Arrow } from '../components'
import Grid from 'bootstrap-components/Grid'

const Start = () => (
  <div>
    <main>
      <h1>Prerequisite</h1>

      <Grid>
        <row>
          <col md={6}>
            <section>
              <h3>
                Load
                {' '}
                <a href="http://getbootstrap.com/getting-started/">Bootstrap</a>
              </h3>
            </section>
          </col>

          <col md={6}>
            <section>
              <h3>
                Bootstrap's JavaScript require's
                {' '}
                <a href="https://developers.google.com/speed/libraries/#jquery">JQuery</a>
              </h3>
            </section>
          </col>
        </row>
      </Grid>
    </main>

    <main>
      <h1>Install</h1>

      <Grid>
        <row>
          <col md={6}>
            <section>
              <h3>
                Install with npm
              </h3>
            </section>
          </col>

          <col md={6}>
            <Code language="bash">
              {'npm install --save bootstrap-components'}
            </Code>
          </col>
        </row>
      </Grid>
    </main>

    <main>
      <h1>Import</h1>

      <Grid>
        <row>
          <col md={6}>
            <section>
              <h3>
                Either import multiple components in one statement
              </h3>
            </section>
          </col>

          <col md={6}>
            <Code language="javascript">
              {'import { Icon, Button } from \'bootstrap-components\''}
            </Code>
          </col>
        </row>

        <row>
          <col md={6}>
            <section>
              <h3>
                Or import components individually
              </h3>
            </section>
          </col>

          <col md={6}>
            <Code language="javascript">
              {`import Icon from 'bootstrap-components/Icon'
import Button from 'bootstrap-components/Button'`}
            </Code>
          </col>
        </row>
      </Grid>
    </main>

    <Arrow direction='right'>icons</Arrow>
  </div>
)

export default Start
