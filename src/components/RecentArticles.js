import React from 'react'
import styled from 'styled-components'
import ArticlePreview from './ArticlePreview'
import { media } from '../helpers/responsiveness'

const ListItem = styled(ArticlePreview)``
const ListArticles = styled.div`
  display: grid;
  grid-gap: 1.5em;
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 15vh 15vh 15vh 15vh;
    ${ListItem} {
      min-width: 15vh;
      min-height: 15vh;
      &:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1 / 5;
      }
      &:nth-child(2) {
        grid-column: 3 / 5;
        grid-row: 1 / 3;
      }
      &:nth-child(3) {
        grid-column: 3 / 5;
        grid-row: 3 / 5;
      }
    }
  `};
`

export default ({ posts }) => (
  <div>
    <h2>Uusimmat julkaisut</h2>
    <ListArticles>
      {posts.map(({ node }) => (
        <ListItem article={node} key={node.slug} />
      ))}
    </ListArticles>
  </div>
)
