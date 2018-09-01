import React from 'react'
import ArticlePreview from './ArticlePreview'
import { List } from './UI'

const ListArticles = List.extend`
  li {
    margin: ${props => props.theme.space.stack.m};
  }
`

export default ({ posts }) => (
  <div>
    <h2>Uusimmat artikkelit</h2>
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
