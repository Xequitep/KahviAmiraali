import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  sup {
    color: red;
  }
  input,
  textarea,
  button {
    display: block;
    font-size: 1.1em;
    border: 1px solid ${props => props.theme.color.neutral90};
    border-radius: 3px;
    padding: 0.8em;
    width: 100%;
    margin: 0.5em 0;
  }
  button {
    width: auto;
  }
  label {
    display: block;
    margin: 2em 0em;
  }
`

export default ({ data }) => (
  <Form name="contact" method="POST" data-netlify="true" action="/thanks/">
    <label>
      Nimi: <sup>*</sup> <input type="text" name="name" required />
    </label>
    <label>
      Sähköposti: <sup>*</sup> <input type="email" name="email" required />
    </label>
    <label>
      Puhelinnumero: <input type="text" name="phone" />
    </label>
    <label>
      Viesti: <sup>*</sup> <textarea rows="7" name="message" required />
    </label>
    <button type="submit">Lähetä</button>
  </Form>
)
