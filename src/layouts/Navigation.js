import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Header from './Header'
import StopScrolling from '../helpers/StopScrolling'

const StyledLink = styled(Link)`
  padding: ${props => props.theme.space.squish.m};
`

const Navigation = styled.nav`
  list-style: none;
  letter-spacing: 1px;
  display: flex;

  flex-direction: inherit;

  ${StyledLink} {
    padding: ${props => props.theme.space.squish.m};
  }
`
export default ({ className, visibleOnMobile }) => (
  <Navigation>
    <StyledLink to="/services/">Palvelut</StyledLink>
    <StyledLink to="/contact/">Ota yhteyttä</StyledLink>
    <StyledLink to="/about/">Tietoa</StyledLink>
    {visibleOnMobile && <StopScrolling />}
  </Navigation>
)
