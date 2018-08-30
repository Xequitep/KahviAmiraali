import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Preview = styled.div`
    grid-template-rows: min-content min-content min-content;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 1em;
`

const StyledImage = styled.div`
    grid-column: 1;
    grid-row: 1 / 4;
`
const StyledHeader = styled.h3`
  grid-column: 2;
  grid-row: 1;
  margin: 0;
`
const StyledDate = styled.small`
grid-column: 2;
grid-row: 2;
`
const StyledDescription = styled.p`
      grid-column: 2;
    grid-row: 3;
    margin:0;
    p {
      margin:0;
    }
`

export default ({ article }) => (
  <Preview>
    <StyledImage>
      <Img alt="" sizes={article.heroImage.sizes} />
    </StyledImage>
    <StyledHeader>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </StyledHeader>
    <StyledDate>{article.publishDate}</StyledDate>
    <StyledDescription
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Preview>
)
