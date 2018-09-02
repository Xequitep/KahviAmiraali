import React from 'react'
import styled, { css } from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import Img from '../components/Img'
import { maxWidth } from '../theme'

const Page = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] auto [content-start] minmax(auto, ${maxWidth})
    [content-end] auto [full-end];
  grid-template-rows: auto auto auto;
  grid-gap: ${props => props.theme.space.m};
`

const StyledNav = styled(Navigation)`
  grid-column: content;
  grid-row: 1;
  justify-self: end;
  ${props =>
    props.hasHero &&
    css`
      color: white;
    `};
`
const Main = styled.main`
  grid-row: 2;
  grid-column: content;
`

const StyledFooter = styled(Footer)`
  grid-row: 3;
  grid-column: content;
`

const HeaderImg = styled(Img)`
  grid-column: full;
  grid-row: 1;

  z-index: -1;
  object-fit: cover;
  height: 65vh;
  filter: opacity(0.3) blur(2px);
`
export default ({ children, heroImage }) => (
  <Page>
    {heroImage && <HeaderImg alt={heroImage.alt} sizes={heroImage.sizes} />}
    <StyledNav hasHero={!!heroImage} />
    <Main>{children}</Main>
    <StyledFooter />
  </Page>
)
