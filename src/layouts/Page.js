import React from 'react'
import styled, { css } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import { maxWidth } from '../theme'

const Page = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] auto [content-start] minmax(auto, ${maxWidth})
    [content-end] auto [full-end];
  grid-template-rows: auto auto auto;
  grid-gap: ${props => props.theme.space.m};
`

const StyledHeader = styled(Header)`
  grid-column: content;
  grid-row: 1;
  justify-self: end;

  width: 100%;
  max-width: ${maxWidth};
`
const Main = styled.main`
  grid-row: 2;
  grid-column: content;
`

const StyledFooter = styled(Footer)`
  grid-row: 3;
  grid-column: content;
`

export default ({ children, heroImage }) => (
  <Page>
    <StyledHeader />
    <Main>{children}</Main>
    <StyledFooter />
  </Page>
)
