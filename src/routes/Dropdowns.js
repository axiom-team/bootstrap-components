/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Code, Arrow } from '../components'
import Dropdown from 'bootstrap-components/Dropdown'

const Dropdowns = () => (
  <div>
    <main>
      <div className="row">
        <div className="col-sm-6">
          <section>
            <Dropdown title='Dropdown'>
              <div>Action</div>
              <div>Another Action</div>
              <hr/>
              <div>Separated link</div>
              <div
                to="/getting-started"
              >
                Getting started page
              </div>
            </Dropdown>
          </section>

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
  <hr/>
  <div>Separated link</div>
  <div
    to="/getting-started"
  >
    Getting started page
  </div>
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <h1>Dropup</h1>
      <div className="row">
        <div className="col-sm-6">
          <section>
            <Dropdown
              title='Dropup'
              dropup
            >
              <div>Action</div>
              <div>Another Action</div>
              <hr/>
              <div
                href="/icons"
              >
                Icons page
              </div>
            </Dropdown>
          </section>

          <section>
            The <code>href</code> prop uses an anchor tag
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown
  title='Dropup'
  dropup
>
  <div>Action</div>
  <div>Another Action</div>
  <hr/>
  <div
    href="/icons"
  >
    Icons page
  </div>
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <h1>Headers</h1>

      <div className="row">
        <div className="col-sm-6">
          <section>
            <Dropdown title="Dropdown">
              <header>Dropdown header</header>
              <div>Action</div>
              <div>Another Action</div>
              <header>Dropdown header</header>
              <div>Separated link</div>
            </Dropdown>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown>
  ...
  <header>
    Dropdown header
  </header>
  ...
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <h1>Dividers</h1>

      <div className="row">
        <div className="col-sm-6">
          <section>
            <Dropdown title="Dropdown">
              <div>Action</div>
              <div>Another Action</div>
              <hr/>
              <div>Separated link</div>
            </Dropdown>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown>
  ...
  <hr/>
  ...
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <h1>Disabled</h1>

      <div className="row">
        <div className="col-sm-6">
          <section>
            <Dropdown title="Dropdown">
              <div>Regular link</div>
              <div disabled>Disabled link</div>
              <div>Another link</div>
            </Dropdown>
          </section>
        </div>

        <div className="col-sm-6">
          <Code>
            {`<Dropdown>
  <div>Regular link</div>
  <div disabled>
    Disabled link
  </div>
  <div>Another link</div>
</Dropdown>`}
          </Code>
        </div>
      </div>
    </main>

    <Arrow direction='left'>icons</Arrow>
  </div>
)

export default Dropdowns
