import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Page from '../layouts/Page'
import styled from 'styled-components'
import { media } from '../helpers/responsiveness'

const Content = styled.div`
  p {
    text-align: justify;
  }
  img {
    width: 100%;
  }
  ${media.tablet`
    img {
      width: 30ch;
      float: right;
      margin: 0 0 1em 1em;
    }
  `};
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.tablet`
  grid-template-columns: repeat(${props => props.items}, 1fr);
  `};
`

const Col = styled.div`
  padding: 1em;
  text-align: justify;
  h1,
  h2,
  h3,
  h4 {
    padding: 0px;
    margin: 0.5em 0;
    border-bottom: none;
  }
  ul {
    list-style: circle;
    line-height: 1.5em;
  }
  h1 {
    font-size: 2em;
  }
  h2: {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }
`

class PageNode extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const page = get(this, 'props.data.contentfulGridPage')
    console.debug(page)
    return (
      <Page>
        <Helmet title={siteTitle} />
        {page.rows.map((row, index) => (
          <Row key={index} items={row.columns.length}>
            {row.columns.map((column, index) => (
              <Col
                key={index}
                dangerouslySetInnerHTML={{
                  __html: column.body.childMarkdownRemark.html,
                }}
              />
            ))}
          </Row>
        ))}
      </Page>
    )
  }
}

export default PageNode

export const pageQuery = graphql`
  query gridPageQuery($slug: String!) {
    contentfulGridPage(slug: { eq: $slug }) {
      rows {
        columns {
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
