import React from 'react'
import ArticlePreview from './ArticlePreview'

export default ({ posts }) => (
  <div>
    <h2>Recent articles</h2>
    <ul>
      {posts.map(({ node }) => {
        return (
          <li key={node.slug}>
            <ArticlePreview article={node} />
          </li>
        )
      })}
    </ul>
  </div>
)
