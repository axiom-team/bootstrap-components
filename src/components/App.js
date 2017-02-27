import React from 'react'
import reactLogo from '../../res/react.svg'
import bootstrapLogo from '../../res/bootstrap.svg'
import githubLogo from '../../res/github.svg'
import nodeLogo from '../../res/node.svg'
import plusIcon from '../../res/plus.svg'
import Navbar from './Navbar'
import Container from 'bootstrap-components/Container'

const pathToTitle = str => str.slice(1).split('-').join(' ')

const styles = {
  header: {
    container: {
      backgroundColor: '#222',
      color: '#eee',
      textAlign: 'center',
      textTransform: 'capitalize',
      margin: '2em 0 3.5em',
      fontFamily: '"Chewy", cursive',
    },
    logo: {
      height: '4em',
      margin: '1em .75em 2em'
    },
    mainTitle: {
      padding: '.5em',
      fontSize: '3em',
      fontFamily: '"Passion One", cursive',
    },
    plus: {
      height: '2em',
      margin: '1em 1em 2em'
    }
  },
  mainContainer: {
    marginBottom: '1.5em',
    backgroundColor: '#eee',
    padding: '2.5em'
  },
  footer: {
    container: {
      fontSize: '1.125em',
      color: '#eee',
      padding: '1em 1em 2em',
      textAlign: 'center',
      lineHeight: '3'
    },
    logo: {
      height: '3em',
    }
  }
}

const MainLogo = () => (
  <div>
    <img
      style={styles.header.logo}
      src={reactLogo}
      alt="React Logo"
    />

    <img
      style={styles.header.plus}
      src={plusIcon}
      alt="Plus Icon"
    />

    <img
      style={styles.header.logo}
      src={bootstrapLogo}
      alt="Bootstrap logo"
    />
  </div>
)

const App = ({ children }, { router }) => {

  const sectionTitle = pathToTitle(
    router.getCurrentLocation().pathname
  )

  return (
    <div>
      <Navbar/>

      <div style={styles.header.container}>
        <h2 style={styles.header.mainTitle}>
          React Bootstrap Components
        </h2>

        <MainLogo/>

        <h3>{sectionTitle}</h3>
      </div>

      <Container style={styles.mainContainer}>
        {children}
      </Container>

      <footer
        className="container"
        style={styles.footer.container}
      >
        <a
          className="pull-left"
          href="https://github.com/timurtu/bootstrap-components"
        >
          <img
            src={githubLogo}
            style={styles.footer.logo}
            alt="GitHub Logo"
          />
        </a>

        Created by
        {' '}
        <a href="https://github.com/timurtu">
          Timur Uzel
        </a>.

        <a
          className="pull-right"
          href="https://npmjs.com/packages/bootstrap-components"
        >
          <img
            src={nodeLogo}
            style={styles.footer.logo}
            alt="NodeJS Logo"
          />
        </a>
      </footer>
    </div>
  )
}
App.contextTypes = {
  router: React.PropTypes.object
}

export default App
