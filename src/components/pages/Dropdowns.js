/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import Arrow from '../Arrow'
import Dropdown from 'bootstrap-components/Dropdown'
import Code from '../Code'

const Dropdowns = () => (
  <div>

    <main>
      <div className="row">
        <div className="col-sm-6">
          <Dropdown
            items={[
              { text: 'Action' },
              { text: 'Another action' },
              { text: 'Something else here' },
              { separator: true },
              { text: 'Separated link' },
              {
                text: 'Icons page',
                to: '/icons'
              }
            ]}
          >
            Dropdown
          </Dropdown>

          <section>
            By default, links work with
            {' '}
            <a
              target="_blank"
              href="https://github.com/ReactTraining/react-router"
            >
              React Router
            </a>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown
  items={[
    { text: 'Action' },
    { text: 'Another action' },
    { text: 'Something else here' },
    { separator: true },
    { text: 'Separated link' },
    {
      text: 'Icons page',
      to: '/icons'
    }
  ]}
>
  Dropdown
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <Arrow direction='left'>icons</Arrow>
  </div>
)

export default Dropdowns
