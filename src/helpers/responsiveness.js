import { css } from 'styled-components'
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
