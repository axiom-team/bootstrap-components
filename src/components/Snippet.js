/**
 * Created by timur on 3/9/17.
 */

import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Code } from './'

export class Snippet extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      clearfixMobile: false
    }
  }

  componentDidMount() {

    if(!this.props.splitTheGrid) {

      window.addEventListener('resize', () => {
        this.checkClearFix()
      })

      this.checkClearFix()
    }
  }

  checkClearFix() {

    this.setState({
      clearfixMobile: window.innerWidth < 992
    })
  }

  render() {

    const {
      title,
      subtitle,
      children,
      overrideCode,
      splitTheGrid
    } = this.props

    // Only override the code snippet when it's explicitly defined.
    // For example, to use ... instead of repeating the same boilerplate code,
    // the bootstrap docs also use ... to reduce boilerplate.
    const code = overrideCode ? reactElementToJSXString(overrideCode) :
      reactElementToJSXString(children)

    const visibleTitle = title ? <h1>{title}</h1> : null
    const visibleSubtitle = subtitle ? <section>{subtitle}</section> : null

    const visibleGrid = splitTheGrid ? (
      <div>
        <section>
          {children}
        </section>

        {visibleSubtitle}

        <Code>
          {code}
        </Code>
      </div>
    ) : (
      <div className="row">
        <div className="col-md-6">
          <section>
            {children}
          </section>

          {visibleSubtitle}
        </div>

        {this.state.clearfixMobile ? <div className="clearfix"/> : null}

        <div className="col-md-6">
          <Code>
            {code}
          </Code>
        </div>
      </div>
    )


    return (
      <main>
        {visibleTitle}
        {visibleGrid}
      </main>
    )
  }
}
Snippet.propTypes = {
  children: React.PropTypes.any.isRequired
}
