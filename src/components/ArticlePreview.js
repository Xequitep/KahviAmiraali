import React from 'react'
import Grid from './Grid'
import Img from './Img'
import styled from 'styled-components'
import Header from './Header'
import { UiWrapper } from './UI'
import { media } from '../helpers/responsiveness'
import Link from 'gatsby-link'

const HoverWrapper = styled.div`
  z-index: 1;
  margin: 1.5em;
  transition: opacity 0.4s, filter 0.6s;

  display: flex;
  justify-content: center;
  flex-direction: column;

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

const WrapperLink = styled(Link)`
  display: block;
  position: relative;
  display: grid;
  > * {
    grid-row: 1;
    grid-column: 1;
  }

  &:hover {
    ${HoverWrapper} {
      opacity: 1;
    }
    ${StyledImg} {
      filter: blur(2px) brightness(0.7);
    }
  }
`

export default ({ className, article }) => (
  <WrapperLink className={className} to={`/blog/${article.slug}`}>
    <HoverWrapper>
      <Header header={article.title} small={article.publishDate} heading="h3" />
      <UiWrapper
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </HoverWrapper>
    <StyledImg alt={article.title} sizes={article.heroImage.sizes} />
  </WrapperLink>
)
