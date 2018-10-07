import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/Grid'
import Header from './Header'

const StyledLink = styled(Link)``

const Navigation = Grid.withComponent('nav').extend`
  list-style: none;
  letter-spacing: 1px;

  ${StyledLink} {
    text-align: center;
    padding: ${props => props.theme.space.squish.m};
  }
`
export default ({ className }) => (
  <Navigation repeat column="max-content">
    <StyledLink to="/contact/">Ota yhteyttä</StyledLink>
    <StyledLink to="/about/">Tietoa</StyledLink>
  </Navigation>
)
