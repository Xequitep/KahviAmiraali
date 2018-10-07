import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const Header = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 2em;
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
  <Header className={className}>
    <a href="/">
      <StyledLogo />
    </a>
    <span>Kahviamiraali</span>
  </Header>
)
