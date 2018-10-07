import React from 'react'
import Helmet from 'react-helmet'
import Page from '../layouts/Page'
import Form from '../components/Form'
import Header from '../components/Header'

class Contact extends React.Component {
  render() {
    return (
      <Page>
        <Helmet title="Contact" />
        <h1>Ota yhteyttä</h1>
        <p>
          Mikäli sinulla on kysyttävää tai haluat jättää palautetta, voit
          käyttää tätä lomaketta. Käsittelen kaiken saamani palautteen.
        </p>
        <Form />
      </Page>
    )
  }
}

export default Contact
