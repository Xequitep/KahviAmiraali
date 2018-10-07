import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'
import Page from '../layouts/Page'
import Header from '../components/Header'
import Img from '../components/Img'

const HeroImage = styled(Img)`
  float: left;
  width: 25%;
  margin: 0 1em 0.5em 0;
`

const BlogHeader = styled(Header)`
  display: flow-root;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Page>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <HeroImage alt={post.heroImage.alt} sizes={post.heroImage.sizes} />
          <BlogHeader
            header={post.title}
            small={post.publishDate}
            heading="h1"
          />
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
