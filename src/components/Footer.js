/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import githubLogo from '../../res/github.svg'
import nodeLogo from '../../res/node.svg'
import twitterLogo from '../../res/twitter.svg'
import facebookLogo from '../../res/facebook.svg'
import emailLogo from '../../res/email.svg'
import { Grid, Icon } from 'bootstrap-components'
import '../styles/footer.scss'

export const Footer = () => (
  <footer className="container">
    <Grid>
      <row>
        <col
          xs={12}
          sm={6}
          md={4}
        >
          <a href="https://github.com/axiom-team/bootstrap-components">
            GitHub
            <img
              src={githubLogo}
              alt="GitHub logo"
            />
          </a>

          <a href="https://npmjs.com/package/bootstrap-components">
            npm
            <img src={nodeLogo} alt="Node logo"/>
          </a>

          <a href="https://twitter.com/timurtu">
            Twitter
            <img src={twitterLogo} alt="Twitter logo"/>
          </a>

          <a href="https://www.facebook.com/reactbootstrap/">
            Facebook
            <img src={facebookLogo} alt="Facebook logo"/>
          </a>

          <a href="mailto:timurt.uzel@gmail.com">
            Email
            <img src={emailLogo} alt="Email me at timurt.uzel@gmail.com"/>
          </a>
        </col>

        <col
          xs={12}

          sm={4}
          smOffset={2}

          md={2}
          mdOffset={6}

          children={(
            <a
              className="main-title"
              href="https://github.com/timurtu"
            >
              With <Icon>heart-empty</Icon> by Timur.
            </a>
          )}
        />
      </row>
    </Grid>
  </footer>
)
