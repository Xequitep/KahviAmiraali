import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Grid from '../components/Grid'

const Footer = Grid.extend`
  margin: 3em auto;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`

export default ({ className }) => (
  <Footer className={className}>
    <a href="https://www.instagram.com/xequitep/">
      <StyledFontAwesomeIcon icon={['fab', 'instagram']} />
      <span>Instagram</span>
    </a>
  </Footer>
)
