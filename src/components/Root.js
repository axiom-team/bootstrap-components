/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import ReactGA from 'react-ga'
import { Router, browserHistory } from 'react-router'
import routes from '../tools/routes'

ReactGA.initialize('UA-91838823-1')

let currentPage

function onChange() {

  if (currentPage && currentPage !== window.location.pathname) {
    window.scrollTo(0, 0)
  }

  currentPage = window.location.pathname
  ReactGA.set({ page: currentPage })
  ReactGA.pageview(currentPage)
}

const Root = () => (
  <Router
    history={browserHistory}
    onUpdate={onChange}
    routes={routes}
  />
)

export default Root
