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

class PageNode extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Page>
        <Helmet title={siteTitle} />
        <div>
          <h1>{page.title}</h1>
          <Content
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Page>
    )
  }
}

export default PageNode

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
