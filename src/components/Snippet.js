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

  checkClearFix() {

    this.setState({
      clearfixMobile: window.innerWidth < 992
    })
  }

  componentDidMount() {

    window.addEventListener('resize', () => {
      this.checkClearFix()
    })

    this.checkClearFix()
  }

  render() {

    const {
      title,
      subtitle,
      children,
      overrideCode
    } = this.props

    // Only override the code snippet when it's explicitly defined.
    // For example, to use ... instead of repeating the same boilerplate code,
    // the bootstrap docs also use ... to reduce boilerplate.
    const code = overrideCode ? reactElementToJSXString(overrideCode) :
      reactElementToJSXString(children)

    const visibleTitle = title ? <h1>{title}</h1> : null

    return (
      <main>
        {visibleTitle}

        <div className="row">
          <div className="col-md-6">
            <section>
              {children}
            </section>

            <section>
              {subtitle}
            </section>
          </div>

          {this.state.clearfixMobile ? <div className="clearfix"/> : null}

          <div className="col-md-6">
            <Code>
              {code}
            </Code>
          </div>
        </div>
      </main>
    )
  }
}
Snippet.propTypes = {
  children: React.PropTypes.any.isRequired
}
