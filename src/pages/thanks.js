import React from 'react'
import Helmet from 'react-helmet'
import Page from '../layouts/Page'
import Form from '../components/Form'
import Header from '../components/Header'
import styled from 'styled-components'

const HomeLink = styled.a`
  font-size: 1.333em;
  text-decoration: underline;
`

class Thanks extends React.Component {
  render() {
    return (
      <Page>
        <Helmet title="Contact" />
        <h1>Kiitos yhteydenotosta</h1>
        <p>Vastaan sinulle mahdollisimman pian!</p>

        <HomeLink href="/">Palaa etusivulle</HomeLink>
      </Page>
    )
  }
}

export default Thanks
