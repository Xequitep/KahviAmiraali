import React from 'react'
import Grid from './Grid'
import Img from './Img'
import styled from 'styled-components'
import Header from './Header'
import { UiWrapper } from './UI'
import { media } from '../helpers/responsiveness'

const StyledImg = styled(Img)`
  grid-column: 1;
  grid-row: 1 / 3;
`
const StyledHeader = styled(Header)`
  grid-column: 1;
  grid-row: 1 / 3;
  align-self: end;
  padding: ${props => props.theme.space.l};
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 0) 110%
  );
  ${media.desktop`
    grid-column: auto;
    grid-row: auto;
    padding: 0;
    background: none;
  `};
`
const StyledDescription = styled(UiWrapper)``

export default ({ className, article }) => (
  <Grid
    className={className}
    columns="3fr 5fr"
    rows="min-content 1fr"
    columnGap="1em"
    rowGap="1em"
    breakOn="desktop"
  >
    <StyledImg
      alt={article.title}
      corners="xs"
      sizes={article.heroImage.sizes}
    />
    <StyledHeader
      to={`/blog/${article.slug}`}
      header={article.title}
      small={article.publishDate}
      heading="h3"
    />
    <StyledDescription
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Grid>
)
