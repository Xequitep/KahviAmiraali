import React from 'react'
import styled from 'styled-components'
const Img = styled.img`
  width: 100%;
`

export default ({ className, alt, sizes }) => (
  <Img className={className} alt={alt} src={sizes.src} srcSet={sizes.srcSet} />
)
