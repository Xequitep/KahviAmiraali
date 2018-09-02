import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

import { UiWrapper } from './UI'

export default ({ className, to, header, small, heading = 'h2' }) => {
  let Component = UiWrapper
  if (to) {
    Component = UiWrapper.withComponent(Link)
  }
  const Heading = styled(heading)``

  return (
    <Component className={className} to={to}>
      <Heading>{header}</Heading>
      {small && <small>{small}</small>}
    </Component>
  )
}
