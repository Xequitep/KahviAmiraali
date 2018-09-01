import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/Grid'

const StyledLink = styled(Link)``

const Navigation = Grid.extend`
  list-style: none;
  ${StyledLink} {
    text-align: center;
    padding: ${props => props.theme.space.m};
  }
`
export default ({ className }) => (
  <nav className={className} role="navigation">
    <Navigation repeat column="minmax(min-content, 10vmax)">
      <StyledLink to="/">Etusivu</StyledLink>
      <StyledLink to="/blog/">Blog</StyledLink>
      <StyledLink to="/about/">About</StyledLink>
    </Navigation>
  </nav>
)
