import React from 'react'
import logo from '../../res/rings.svg'
import Navbar from './Navbar'
import Container from 'bootstrap-components/Container'

const pathToTitle = str => str.slice(1).split('-').join(' ')

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#eee',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: '2em 0 3.5em'
  },
  mainTitle: {
    padding: '0 .5em'
  },
  container: {
    marginBottom: '1.5em',
    backgroundColor: '#eee',
    padding: '2.5em'
  },
  footer: {
    fontSize: '1.25em',
    padding: '2em 1em 3.5em'
  }
}

const App = ({
  children
}, {
  router
}) => {

  const sectionTitle = pathToTitle(
    router.getCurrentLocation().pathname
  )

  return (
    <div>
      <Navbar/>

      <div style={styles.header}>
        <img
          src={logo}
          style={styles.logo}
        />

        <h2 style={styles.mainTitle}>
          React Bootstrap Components
        </h2>

        <h3>{sectionTitle}</h3>
      </div>

      <Container style={styles.container}>
        {children}
      </Container>

      <footer
        className="container"
        style={styles.footer}
      >
        <a
          className="pull-left"
          href="https://github.com/timurtu/bootstrap-components"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}
App.contextTypes = {
  router: React.PropTypes.object
}

export default App
