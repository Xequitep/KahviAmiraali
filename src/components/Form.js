import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  sup {
    color: red;
  }
  input,
  textarea {
    display: block;
  }
`

export default ({ data }) => (
  <Form name="contact" method="POST" data-netlify="true">
    <p>
      <label>
        Nimi: <sup>*</sup> <input type="text" name="name" />
      </label>
    </p>

    <p>
      <label>
        Sähköposti: <sup>*</sup> <input type="email" name="email" />
      </label>
    </p>

    <p>
      <label>
        Puhelinnumero: <input type="text" name="phone" />
      </label>
    </p>
    <p>
      <label>
        Viesti: <sup>*</sup> <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Lähetä</button>
    </p>
  </Form>
)
