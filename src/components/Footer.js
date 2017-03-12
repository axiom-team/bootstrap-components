/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import githubLogo from '../../res/github.svg'
import nodeLogo from '../../res/node.svg'
import { Grid, Icon } from 'bootstrap-components'
import '../styles/footer.scss'

export const Footer = () => (
  <footer className="container">
    <Grid>
      <row>
        <col
          xs={6}
          sm={3}
          md={2}

          children={(
            <a href="https://github.com/axiom-team/bootstrap-components">
              GitHub
              <img
                src={githubLogo}
                alt="GitHub logo"
              />
            </a>
          )}
        />

        <col
          xs={6}
          sm={3}
          md={2}

          children={(
            <a href="https://npmjs.com/package/bootstrap-components">
              npm
              <img
                src={nodeLogo}
                alt="Node logo"
              />
            </a>
          )}
        />

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
