/**
 * Created by timur on 4/25/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import Nav from 'bootstrap-components/Nav'

const Navs = () => (
  <div>
    <Snippet title="Tabs">
      <Nav tabs>
        <div active>Home</div>
        <div>Profile</div>
        <div>Messages</div>
      </Nav>
    </Snippet>

    <Snippet title="Pills">
      <Nav pills>
        <div active>Home</div>
        <div>Profile</div>
        <div>Messages</div>
      </Nav>
    </Snippet>

    <Snippet>
      <Nav pills stacked>
        <div active>Home</div>
        <div>Profile</div>
        <div>Messages</div>
      </Nav>
    </Snippet>

    <Arrow direction="left">input groups</Arrow>
  </div>
)

export default Navs
