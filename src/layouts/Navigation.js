import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <nav role="navigation">
    <ul>
      <li>
        <Link to="/">Etusivu</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>
)
