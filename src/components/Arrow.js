/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Button, Icon } from 'bootstrap-components'

const styles = {
  arrow: {
    textTransform: 'capitalize'
  }
}

const toPath = str => str.split(' ').join('-')

const Arrow = ({
  direction,
  children
}) => {

  const icon = direction === 'left' ?
    <div>
      <Icon>{`arrow-${direction}`}</Icon> {children}
    </div> :
    <div>
      {children} <Icon>{`arrow-${direction}`}</Icon>
    </div>

  return (
    <Link
      to={toPath(children)}
      className={`pull-${direction}`}
    >
      <Button style={styles.arrow}>
        {icon}
      </Button>
    </Link>
  )
}
Arrow.propTypes = {
  direction: React.PropTypes.string.isRequired
}

export default Arrow
