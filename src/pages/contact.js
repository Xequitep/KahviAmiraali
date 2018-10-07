import React from 'react'
import Helmet from 'react-helmet'
import Form from '../components/Form'
import Page from '../layouts/Page'

class BlogIndex extends React.Component {
  render() {
    return (
      <Page>
        <Helmet title="Contact" />
        <Form />
      </Page>
    )
  }
}

export default BlogIndex
