import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from '../components/Img'
import Page from '../layouts/Page'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Page>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <Img alt={post.title} sizes={post.heroImage.sizes} />
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.publishDate}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Page>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
