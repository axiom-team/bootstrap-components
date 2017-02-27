import React from 'react'
import reactLogo from '../../res/react.svg'
import bootstrapLogo from '../../res/bootstrap.svg'
import plusIcon from '../../res/plus.svg'
import Navbar from './Navbar'
import Container from 'bootstrap-components/Container'

const pathToTitle = str => str.slice(1).split('-').join(' ')

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#eee',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: '2em 0 3.5em',
    fontFamily: '"Chewy", cursive'
  },
  mainTitle: {
    padding: '.5em',
    fontSize: '2.25em',
    fontFamily: '"Passion One", cursive',
  },
  logo: {
    height: '4em',
    margin: '1em .75em 2em'
  },
  plus: {
    height: '2em',
    margin: '1em 1em 2em'
  },
  container: {
    marginBottom: '1.5em',
    backgroundColor: '#eee',
    padding: '2.5em',
    fontFamily: '"Merriweather", serif'
  },
  footer: {
    fontSize: '1.25em',
    padding: '2em 1em 3.5em'
  }
}

const MainLogo = () => (
  <div>
    <img
      style={styles.logo}
      src={reactLogo}
      alt="React Logo"
    />

    <img
      style={styles.plus}
      src={plusIcon}
      alt="Plus Icon"
    />

    <img
      style={styles.logo}
      src={bootstrapLogo}
      alt="Bootstrap logo"
    />
  </div>
)

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
        <h2 style={styles.mainTitle}>
          React Bootstrap Components
        </h2>

        <MainLogo/>

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
