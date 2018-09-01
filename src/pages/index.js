import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import RecentArticles from '../components/RecentArticles'
import Page from '../layouts/Page'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Page>
        <Helmet title={siteTitle} />
        <h1>Kahviamiraali</h1>
      </Page>
    )
  }
}

export default RootIndex
