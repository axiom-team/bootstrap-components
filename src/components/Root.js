/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import ReactGA from 'react-ga'
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import App from './App'
import GettingStarted from './GettingStarted'
import Icons from './Icons'

ReactGA.initialize('UA-91838823-1')

function onChange() {
  window.scrollTo(0, 0)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}


const Root = () => (
  <Router
    history={browserHistory}
    onUpdate={onChange}
  >
    <Route path="/" component={App}>
      <IndexRedirect to="getting-started"/>

      <Route path="getting-started" component={GettingStarted}/>

      <Route path="icons" component={Icons}/>
    </Route>
  </Router>
)

export default Root
