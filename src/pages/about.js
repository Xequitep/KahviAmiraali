import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Page from '../layouts/Page'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Page>
        <Helmet title={siteTitle} />
        <div>
          <h1>{page.siteTitle}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Page>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query pageQuery {
    contentfulPage {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      updatedAt
    }
  }
`
