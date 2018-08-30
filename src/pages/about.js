import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const page = get(this, 'props.data.contentfulPage')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">{page.siteTitle}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
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
