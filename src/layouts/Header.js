import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Logo from '../assets/logo.svg'

const Header = styled.a`
  font-family: 'Yeseva One', cursive;
  font-size: 1.3em;

  display: flex;
  align-items: center;
`
const StyledLogo = styled(Logo)`
  height: 20vw;
  max-height: 3em;
  max-width: 3em;
  margin: 0.5em;
`

export default ({ className }) => (
  <div className={className}>
    <Header href="/">
      <StyledLogo />
      <span>Kahviamiraali</span>
    </Header>
    <Navigation />
  </div>
)
