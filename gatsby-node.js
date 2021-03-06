const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const page = path.resolve('./src/templates/page.js')
    const gridPage = path.resolve('./src/templates/grid-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulGridPage {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const pages = result.data.allContentfulPage.edges
        const gridPages = result.data.allContentfulGridPage.edges
        pages.forEach(({ node }, index) => {
          createPage({
            path: `/${node.slug}/`,
            component: page,
            context: {
              slug: node.slug,
            },
          })
        })
        gridPages.forEach(({ node }, index) => {
          createPage({
            path: `/${node.slug}/`,
            component: gridPage,
            context: {
              slug: node.slug,
            },
          })
        }) *
          posts.forEach(({ node }, index) => {
            createPage({
              path: `/blog/${node.slug}/`,
              component: blogPost,
              context: {
                slug: node.slug,
              },
            })
          })
      })
    )
  })
}
