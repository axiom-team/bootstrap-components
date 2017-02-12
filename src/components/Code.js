/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/styles'

const styles = {
  code: {
    fontSize: '.7em',
    padding: '1.5em',
    marginTop: '1em',
    borderRadius: '.5em'
  }
}

const Code = ({
  language,
  children
}) => (
  <SyntaxHighlighter
    language={language ? language : 'html'}

    style={rainbow}

    customStyle={styles.code}
  >
    {children}
  </SyntaxHighlighter>
)

export default Code
