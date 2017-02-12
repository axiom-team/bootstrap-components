import React from 'react'
import logo from '../../res/logo.svg'
import Container from 'bootstrap-components/Container'

const pathToTitle = str => str.slice(1).split('-').join(' ')

const styles = {
  logo: {
    animation: 'logo-spin infinite 20s linear',
    height: '80px'
  },
  header: {
    backgroundColor: '#222',
    height: '16em',
    margin: '6em 0 3em',
    color: '#eee',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  container: {
    marginBottom: '1.5em',
    backgroundColor: '#eee',
    padding: '1em'
  },
  footer: {
    backgroundColor: '#222',
    height: '100%',
    color: '#eee',
    textAlign: 'center',
    fontSize: '1.25em',
    padding: '1em 0 3em'
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
      <div style={styles.header}>
        <img
          src={logo}

          style={styles.logo}

          alt="logo"
        />

        <h2>Bootstrap Components</h2>

        <h3>{sectionTitle}</h3>
      </div>

      <Container style={styles.container}>
        {children}
      </Container>

      <footer
        style={styles.footer}
      >
        <a href="https://github.com/timurtu/bootstrap-components">
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
