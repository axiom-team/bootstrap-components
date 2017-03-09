/**
 * Created by timur on 2/27/17.
 */

import React from 'react'
import { IndexRedirect, Route } from 'react-router'
import App from '../components/App'
import GettingStarted from '../components/pages/GettingStarted'
import Icons from '../components/pages/Icons'
import Dropdowns from '../components/pages/Dropdowns'

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/getting-started"/>
    <Route path="getting-started" component={GettingStarted}/>
    <Route path="icons" component={Icons}/>
    <Route path="dropdowns" component={Dropdowns}/>
  </Route>
)

export default routes
