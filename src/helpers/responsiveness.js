import React from 'react'
import { css } from 'styled-components'
import Responsive from 'react-responsive'

import { breakpoints } from '../theme'

export const media = Object.entries(breakpoints).reduce(
  (acc, [platform, width]) => {
    acc[platform] = (...args) => css`
      @media (min-width: ${width}) {
        ${css(...args)};
      }
    `
    return acc
  },
  {}
)

export const Tablet = props => <Responsive {...props} minWidth={512} />
