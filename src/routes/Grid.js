/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import { Snippet, Arrow } from '../components'
import Grid from 'bootstrap-components/Grid'
import '../styles/grid.scss'

const GridPage = () => (
  <div className="grid-display">
    <Snippet
      title="Stacked-to-horizontal"
      splitTheGrid
    >
      <Grid>
        <row>
          {new Array(12).fill('col-md-1').map((title, i) => (
            <col
              key={i}
              md={1}
              children={title}
            />
          ))}
        </row>

        <row>
          <col
            md={8}
            children="col-md-8"
          />

          <col
            md={4}
            children="col-md-4"
          />
        </row>

        <row>
          <col
            md={4}
            children="col-md-4"
          />

          <col
            md={4}
            children="col-md-4"
          />

          <col
            md={4}
            children="col-md-4"
          />
        </row>

        <row>
          <col
            md={6}
            children="col-md-6"
          />

          <col
            md={6}
            children="col-md-6"
          />
        </row>
      </Grid>
    </Snippet>

    <Snippet
      title="Mobile and desktop"
      splitTheGrid
    >
      <Grid>
        <row>
          <col
            xs={12}
            md={8}
            children="col-xs-12 col-md-8"
          />

          <col
            xs={6}
            md={4}
            children="col-xs-6 col-md-4"
          />
        </row>

        <row>
          {new Array(3).fill('col-xs-6 col-md-4').map((title, i) => (
            <col
              key={i}
              xs={6}
              md={4}
              children={title}
            />
          ))}
        </row>

        <row>
          <col
            xs={6}
            children="col-xs-6"
          />
          <col
            xs={6}
            children="col-xs-6"
          />
        </row>
      </Grid>
    </Snippet>

    <Snippet
      title="Mobile, tablet, desktop"
      splitTheGrid
    >
      <Grid>
        <row>
          <col
            xs={12}
            sm={6}
            md={8}
            children="col-xs-12 col-sm-6 col-md-8"
          />

          <col
            xs={6}
            md={4}
            children="col-xs-6 col-md-4"
          />
        </row>

        <row>
          {new Array(3).fill('col-xs-6 col-sm-4').map((title, i) => (
            <col
              key={i}
              xs={6}
              sm={4}
              children={title}
            />
          ))}
        </row>
      </Grid>
    </Snippet>

    <Snippet
      title="Column wrapping"
      splitTheGrid
    >
      <Grid>
        <row>
          <col
            xs={9}
            children="col-xs-9"
          />

          <col xs={4}>
            .col-xs-4
            <br/>
            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one unit.
          </col>

          <col xs={6}>
            .col-xs-6
            <br/>
            Subsequent columns continue along the new line.
          </col>
        </row>
      </Grid>
    </Snippet>

    <Snippet
      title="Responsive column resets"
      splitTheGrid
    >
      <Grid>
        <row>
          <col
            xs={6}
            sm={3}
          >
            col-xs-6 col-sm-3
            <br/>
            Resize your viewport or check it out on your phone for an example.
          </col>

          <col
            xs={6}
            sm={3}
            children="col-xs-6 col-sm-3"
          />

          <clearfix xs/>

          <col
            xs={6}
            sm={3}
            children="col-xs-6 col-sm-3"
          />

          <col
            xs={6}
            sm={3}
            children="col-xs-6 col-sm-3"
          />
        </row>
      </Grid>
    </Snippet>

    <Snippet
      title="Offsetting columns"
      splitTheGrid
    >
      <Grid>
        <row>
          <col
            md={4}
            children="col-md-4"
          />

          <col
            md={4}
            mdOffset={4}
            children="col-md-4 col-md-offset-4"
          />
        </row>

        <row>
          <col
            md={3}
            mdOffset={3}
            children="col-md-3 col-md-offset-3"
          />

          <col
            md={3}
            mdOffset={3}
            children="col-md-3 col-md-offset-3"
          />
        </row>

        <row>
          <col
            md={6}
            mdOffset={3}
            children="col-md-6 col-md-offset-3"
          />
        </row>
      </Grid>
    </Snippet>

    <Arrow direction='left'>dropdowns</Arrow>
  </div>
)

export default GridPage
