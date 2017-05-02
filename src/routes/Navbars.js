/**
 * Created by timur on 5/1/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import Navbar from 'bootstrap-components/Navbar'


const Navbars = () => (
  <div>
    <Snippet
      splitTheGrid
      overrideCode={'import Navbar from \'bootstrap-components/Navbar\''}
      language="javascript"
    />

    <Snippet
      title="Default navbar"
      splitTheGrid
    >
      <Navbar>
        <header>
          <brand>Brand</brand>
        </header>
      </Navbar>
    </Snippet>

    <Arrow direction="left">navs</Arrow>
  </div>
)

export default Navbars
