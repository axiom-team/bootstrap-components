/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import { pathToTitle } from '../tools/utils'
import reactLogo from '../../res/react.svg'
import bootstrapLogo from '../../res/bootstrap.svg'
import plusIcon from '../../res/plus.svg'

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#eee',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: '6em 2.5em 2.5em',
    fontFamily: '"Merriweather", serif',
  },
  logo: {
    height: '4em',
    margin: '1em .75em 2em'
  },
  title: {
    fontSize: '3em',
    fontFamily: '"Passion One", cursive'
  },
  plus: {
    height: '2em',
    margin: '1em 1em 2em'
  }
}

export const Header = (props, { router }) => {

  const sectionTitle = pathToTitle(
    router.getCurrentLocation().pathname
  )

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        React Bootstrap Components
      </h2>

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

      <h3>{sectionTitle}</h3>
    </div>
  )
}
Header.contextTypes = {
  router: React.PropTypes.object
}
