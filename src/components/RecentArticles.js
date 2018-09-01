import React from 'react'
import ArticlePreview from './ArticlePreview'
import styled from 'styled-components'

const ListArticles = styled.ul`
  list-style: none;
  li {
    margin: ${props => props.theme.space.stack.m};
  }
`

export default ({ posts }) => (
  <div>
    <h2>Recent articles</h2>
    <ListArticles>
      {posts.map(({ node }) => {
        return (
          <li key={node.slug}>
            <ArticlePreview article={node} />
          </li>
        )
      })}
    </ListArticles>
  </div>
)
