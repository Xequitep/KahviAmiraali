import React from 'react'
import styled from 'styled-components'
import ArticlePreview from './ArticlePreview'

const ListItem = styled(ArticlePreview)``
const ListArticles = styled.div`
  ${ListItem} {
    margin: ${props => props.theme.space.stack.xl};
  }
  ${ListItem} + ${ListItem} {
    padding-top: ${props => props.theme.space.xl};
    border-top: 1px solid ${props => props.theme.color.neutral90};
  }
`

export default ({ posts }) => (
  <div>
    <h2>Uusimmat artikkelit</h2>
    <ListArticles>
      {posts.map(({ node }) => (
        <ListItem article={node} key={node.slug} />
      ))}
    </ListArticles>
  </div>
)
