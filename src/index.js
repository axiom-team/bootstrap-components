import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import App from './components/App'
import GettingStarted from './components/GettingStarted'
import Icons from './components/Icons'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="getting-started"/>
      <Route path="getting-started" component={GettingStarted}/>
      <Route path="icons" component={Icons}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
