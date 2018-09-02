import React from 'react'
import styled, { css } from 'styled-components'
const Img = styled.img`
  width: 100%;
  ${props =>
    props.corners &&
    css`
      border-radius: ${props => props.theme.pixels[props.corners]};
    `};
`

export default ({ className, alt, sizes, corners }) => (
  <Img
    corners={corners}
    className={className}
    alt={alt}
    src={sizes.src}
    srcSet={sizes.srcSet}
  />
)
