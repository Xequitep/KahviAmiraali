import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const Header = styled.div``
const StyledLogo = styled(Logo)`
  height: 20vw;
  max-height: 6em;
  max-width: 6em;
  margin: 0.5em;
`

export default ({ className }) => (
  <Header className={className}>
    <a href="https://www.instagram.com/xequitep/">
      <StyledLogo />
    </a>
  </Header>
)
