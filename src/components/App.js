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
    height: '215px',
    padding: '20px',
    color: '#eee',
    textAlign: 'center',
    textTransform: 'capitalize'
  }
}

// .App-header {
//   background-color: #222;
//   height: 215px;
//   padding: 20px;
//   color: white;
//   text-align: center;
//   text-transform: capitalize;
// }

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

      <Container>
        {children}
      </Container>
    </div>
  )
}
App.contextTypes = {
  router: React.PropTypes.object
}

export default App
