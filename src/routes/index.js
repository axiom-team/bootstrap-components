/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import { IndexRedirect, Route } from 'react-router'
import { App } from '../components'
import About from './About'
import Start from './Start'
import Icons from './Icons'
import Dropdowns from './Dropdowns'
import Grid from './Grid'

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/start"/>
    <Route path="about" component={About}/>
    <Route path="start" component={Start}/>
    <Route path="icons" component={Icons}/>
    <Route path="grid" component={Grid}/>
    <Route path="dropdowns" component={Dropdowns}/>
  </Route>
)

export default routes
