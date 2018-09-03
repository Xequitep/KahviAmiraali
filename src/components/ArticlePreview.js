import React from 'react'
import Grid from './Grid'
import Img from './Img'
import styled from 'styled-components'
import Header from './Header'
import { UiWrapper } from './UI'
import { media } from '../helpers/responsiveness'

const HoverWrapper = styled.div`
  align-self: center;
  margin: 0 1em;
  transition: opacity 0.4s, filter 0.6s;
  * {
    color: white !important;
  }
  ${media.tablet`
    opacity: 0;
  `};
`

const StyledImg = styled(Img)`
  z-index: -1;
  filter: blur(2px) brightness(0.7);
  ${media.tablet`
  filter: none;
    object-fit: cover;
    height: 100%;
  `};
`
const StyledGrid = Grid.extend`
  > * {
    grid-column: 1;
    grid-row: 1;
  }
  &:hover ${HoverWrapper} {
    opacity: 1;
  }
  &:hover ${StyledImg} {
    filter: blur(2px) brightness(0.7);
  }
`

export default ({ className, article }) => (
  <StyledGrid className={className} columns="1fr" rows="1fr">
    <StyledImg
      alt={article.title}
      corners="xs"
      sizes={article.heroImage.sizes}
    />
    <HoverWrapper>
      <Header
        to={`/blog/${article.slug}`}
        header={article.title}
        small={article.publishDate}
        heading="h3"
      />
      <UiWrapper
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </HoverWrapper>
  </StyledGrid>
)
