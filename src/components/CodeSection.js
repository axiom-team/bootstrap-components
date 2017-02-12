/**
 * Created by timur on 2/12/17.
 */

import React from 'react'

const CodeSection = (props) => (
  <section>
    <code {...props}>{props.children}</code>
  </section>
)

export default CodeSection
