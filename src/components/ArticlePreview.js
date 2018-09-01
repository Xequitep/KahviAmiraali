import React from 'react'
import Link from 'gatsby-link'
import Grid from './Grid'
import Img from './Img'
import styled from 'styled-components'
import { UiWrapper } from './UI'

const StyledImg = styled(Img)`
  grid-column: 1;
  grid-row: 1 / 3;
`

export default ({ article }) => (
  <Grid columns="3fr 5fr" rows="min-content 1fr" columnGap="1em">
    <StyledImg alt="" sizes={article.heroImage.sizes} />
    <UiWrapper>
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
    </UiWrapper>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Grid>
)
