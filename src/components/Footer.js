/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import githubLogo from '../../res/github.svg'
import npmLogo from '../../res/npm.svg'
import twitterLogo from '../../res/twitter.svg'
import facebookLogo from '../../res/facebook.svg'
import emailLogo from '../../res/email.svg'
import { Grid, Icon } from 'bootstrap-components'
import '../styles/footer.scss'

const styles = {
  noUnderlines: {
    textDecoration: 'none'
  }
}

export const Footer = () => (
  <footer className="container">
    <Grid>
      <row>
        <col
          xs={12}
          md={7}
        >
          <a href="https://github.com/timurtu/bootstrap-components">
            <img
              src={githubLogo}
              alt="GitHub logo"
            />
          </a>

          <a href="https://npmjs.com/package/bootstrap-components">
            <img src={npmLogo} alt="Node logo"/>
          </a>

          <a href="https://twitter.com/timurtu">
            <img src={twitterLogo} alt="Twitter logo"/>
          </a>

          <a href="https://www.facebook.com/reactbootstrap/">
            <img src={facebookLogo} alt="Facebook logo"/>
          </a>

          <a href="mailto:timurt.uzel@gmail.com">
            <img src={emailLogo} alt="Email me at timurt.uzel@gmail.com"/>
          </a>
        </col>

        <col
          xs={12}

          md={5}

          style={styles.noUnderlines}

          children={(
            <a
              className="main-title"
              href="https://github.com/timurtu"
            >
              With <Icon>heart-empty</Icon> by Timur
            </a>
          )}
        />
      </row>
    </Grid>
  </footer>
)
