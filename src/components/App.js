import React from 'react'
import Container from 'bootstrap-components/Container'
import { Navbar, Header, Footer } from './'

const styles = {
  container: {
    marginBottom: '1.5em',
    backgroundColor: '#eee',
    padding: '2.5em'
  }
}

const App = ({ children }) => (
  <div>
    <Navbar/>
    <Header/>

    <Container style={styles.container}>
      {children}
    </Container>

    <Footer/>
  </div>
)

export default App
