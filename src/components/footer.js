import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = styled.footer`
  margin:3em auto;
`

const Grid = styled.div`
  display:grid;
  grid-template-columns: 1fr;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`

export default () => (
  <Footer role="footer">
    <Grid>
      <a href="https://www.instagram.com/xequitep/">
        <StyledFontAwesomeIcon icon={['fab', 'instagram']} />
        <span>Instagram</span>
      </a>
    </Grid>
  </Footer>
)
