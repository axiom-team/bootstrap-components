/**
 * Created by timur on 4/25/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import Nav from 'bootstrap-components/Nav'

const Navs = () => {

  const commonChildren = (
    <div>
      <div active>Home</div>
      <div>Profile</div>
      <div>Messages</div>
    </div>
  ).props.children

  return (
    <div>

      <Snippet
        splitTheGrid
        overrideCode={'import Nav from \'bootstrap-components/Nav\''}
        language="javascript"
      />

      <Snippet title="Tabs">
        <Nav tabs>
          {commonChildren}
        </Nav>
      </Snippet>

      <Snippet title="Pills">
        <Nav pills>
          {commonChildren}
        </Nav>
      </Snippet>

      <Snippet>
        <Nav pills stacked>
          {commonChildren}
        </Nav>
      </Snippet>

      <Snippet
        title="Justified"
        overrideCode={(
          <Nav tabs justified>
            {'...'}
          </Nav>
        )}
      >
        <Nav tabs justified>
          {commonChildren}
        </Nav>
      </Snippet>

      <Snippet
        overrideCode={(
          <Nav pills justified>
            {'...'}
          </Nav>
        )}
      >
        <Nav pills justified>
          {commonChildren}
        </Nav>
      </Snippet>

      <Snippet title="Disabled links">
        <Nav pills>
          <div>Clickable link</div>
          <div>Clickable link</div>
          <div disabled>Disabled link</div>
        </Nav>
      </Snippet>

      <Snippet title="Tabs with dropdowns">
        <Nav tabs>
          <div active>Home</div>
          <div>Help</div>

          <div
            dropdown
            title="Dropdown"
          >
            <div>Action</div>
            <div>Another action</div>
            <div>Something else here</div>
            <hr />
            <div>Separated link</div>
          </div>
        </Nav>
      </Snippet>

      <Snippet title="Pills with dropdowns">
        <Nav pills>
          <div active>Home</div>
          <div>Help</div>

          <div
            dropdown
            title="Dropdown"
          >
            <div>Action</div>
            <div>Another action</div>
            <div>Something else here</div>
            <hr />
            <div>Separated link</div>
          </div>
        </Nav>
      </Snippet>

      <Arrow direction="left">input groups</Arrow>
      <Arrow direction="right">navbars</Arrow>
    </div>
  )
}

export default Navs
