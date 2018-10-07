import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const Header = styled.div``
const StyledLogo = styled(Logo)`
  max-height: 3em;
  max-width: 3em;
  margin: 0.5em;
`

export default ({ className }) => (
  <Header className={className}>
    <a href="/">
      <StyledLogo />
    </a>
  </Header>
)
