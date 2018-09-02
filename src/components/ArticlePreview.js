import React from 'react'
import Link from 'gatsby-link'
import Grid from './Grid'
import Img from './Img'
import styled from 'styled-components'
import { UiWrapper } from './UI'
import Header from './Header'

const StyledImg = styled(Img)`
  grid-column: 1;
  grid-row: 1 / 3;
`

export default ({ article }) => (
  <Grid columns="3fr 5fr" rows="min-content 1fr" columnGap="1em">
    <StyledImg
      alt={article.title}
      corners="xs"
      sizes={article.heroImage.sizes}
    />
    <Header
      to={`/blog/${article.slug}`}
      header={article.title}
      small={article.publishDate}
      heading="h3"
    />
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Grid>
)
