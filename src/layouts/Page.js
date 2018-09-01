import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'

const Page = styled.div`
  display: grid;
  grid-template-columns: [full-start] auto [content-start] 768px [content-end] auto [full-end];
  grid-template-rows: auto auto auto;
`

const StyledNav = styled(Navigation)`
  grid-column: content;
`
const Main = styled.main`
  grid-column: content;
`

const StyledFooter = styled(Footer)`
  grid-column: content;
`
export default ({ children }) => (
  <Page>
    <StyledNav />
    <Main>{children}</Main>
    <StyledFooter />
  </Page>
)
