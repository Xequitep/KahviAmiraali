import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Grid from '../components/Grid'

const Navigation = Grid.extend`
  list-style: none;
  li {
    text-align: center;
    padding: ${props => props.theme.space.m};
  }
`
export default ({ className }) => (
  <nav className={className} role="navigation">
    <Navigation repeat column="minmax(min-content, 10vmax)">
      <li>
        <Link to="/">Etusivu</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </Navigation>
  </nav>
)
