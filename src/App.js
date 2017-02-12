import React from 'react';
import './App.css';
import logo from './logo.svg';

const pathToTitle = str => str.slice(1).split('-').join(' ')

const App = ({
  children
}, {
  router
}) => {
  const sectionTitle = pathToTitle(
    router.getCurrentLocation().pathname
  )

  return (
    <div className="App">

      <div className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />

        <h2>
          Bootstrap Components
        </h2>

        <h3>
          {sectionTitle}
        </h3>
      </div>

      <div className="container">
        {children}
      </div>
    </div>
  )
}
App.contextTypes = {
  router: React.PropTypes.object
}

export default App
