/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import githubLogo from '../../res/github.svg'
import nodeLogo from '../../res/node.svg'

const styles = {
  container: {
    fontSize: '1em',
    color: '#eee',
    padding: '1.25em 1em 2.5em',
    textAlign: 'center',
    lineHeight: '3'
  },
  logo: {
    height: '3em'
  }
}

export const Footer = () => (
  <footer
    className="container"
    style={styles.container}
  >
    <a
      className="pull-left"
      href="https://github.com/timurtu/bootstrap-components"
    >
      <img
        src={githubLogo}
        style={styles.logo}
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
        style={styles.logo}
        alt="NodeJS Logo"
      />
    </a>
  </footer>
)
