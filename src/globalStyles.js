import { injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
      font-size: ${theme.size.m}
  }
  h1 {
      font-size: ${theme.size.xl}
      line-height: 1.6;
  }
  h2 {
      font-size: ${theme.size.xl}
      line-height: 1.333;
  }
  h3 {
      font-size: ${theme.size.l}
      line-height: 1.6;
  }
  h4 {
      font-size: ${theme.size.l}
      line-height: 1.333;
  }
  h1, h2, h3, h4 {
      margin-top: ${theme.size.s}
      margin-bottom: ${theme.size.xs}
  }
  p {
      font-size: ${theme.size.m}
      line-height: 1.250;
      margin: ${theme.space.stack.m}
  }
  small {
      font-size: ${theme.size.s}
  }
  a {
      color: ${theme.color.primary_dark}
      text-decoration: none;
      &:active {
         color: ${theme.color.primary}
      }
  }
`
