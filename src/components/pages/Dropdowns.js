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
          <Dropdown title='Dropdown'>
            <div>Action</div>
            <div>Another Action</div>
            <div>Something else here</div>
            <hr/>
            <div>Separated link</div>
            <div to="/icons">
              Icons page
            </div>
          </Dropdown>

          <section>
            The <code>to</code> prop uses
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
            {`<Dropdown title='Dropdown'>
  <div>Action</div>
  <div>Another Action</div>
  <div>Something else here</div>
  <hr/>
  <div>Separated link</div>
  <div to="/icons">
    Icons page
  </div>
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <div className="row">
        <div className="col-sm-6">
          <Dropdown title='Dropup' dropup>
            <div>Action</div>
            <div>Another Action</div>
            <div>Something else here</div>
            <hr/>
            <div href="/getting-started">
              Getting started page
            </div>
          </Dropdown>

          <section>
            The <code>href</code> prop uses an anchor tag
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown title='Dropup' dropup>
  <div>Action</div>
  <div>Another Action</div>
  <div>Something else here</div>
  <hr/>
  <div href="/getting-started">
    Getting started page
  </div>
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <Arrow direction='left'>icons</Arrow>
  </div>
)

export default Dropdowns
