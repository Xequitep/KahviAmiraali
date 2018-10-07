import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Page from '../layouts/Page'
import Header from '../components/Header'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Page heroImage={post.heroImage}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <Header header={post.title} small={post.publishDate} heading="h1" />
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <TalkyardCommentsIframe discussionId={post.id} />
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
      id
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes {
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
