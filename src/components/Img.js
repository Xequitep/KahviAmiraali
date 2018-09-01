import React from 'react'

export default ({ alt, sizes }) => (
  <img alt={alt} src={sizes.src} srcSet={sizes.srcSet} />
)
