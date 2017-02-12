/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import App from './App'
import GettingStarted from './GettingStarted'
import Icons from './Icons'

const Root = () => (
  <Router
    history={browserHistory}

    onUpdate={() => {
      window.scrollTo(0, 0)
    }}
  >
    <Route path="/" component={App}>
      <IndexRedirect to="getting-started"/>

      <Route path="getting-started" component={GettingStarted}/>

      <Route path="icons" component={Icons}/>
    </Route>
  </Router>
)

export default Root
