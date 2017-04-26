/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import { IndexRedirect, Route } from 'react-router'
import { App } from '../components'
import Start from './Start'
import Icons from './Icons'
import Dropdowns from './Dropdowns'
import Grid from './Grid'
import ButtonGroups from './ButtonGroups'
import ButtonDropdowns from './ButtonDropdowns'
import InputGroups from './InputGroups'
import Navs from './Navs'

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/start" />
    <Route path="start" component={Start} />
    <Route path="icons" component={Icons} />
    <Route path="grid" component={Grid} />
    <Route path="dropdowns" component={Dropdowns} />
    <Route path="button-groups" component={ButtonGroups} />
    <Route path="button-dropdowns" component={ButtonDropdowns} />
    <Route path="input-groups" component={InputGroups} />
    <Route path="navs" component={Navs} />
  </Route>
)

export default routes
