import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

import theme from './theme'

export default () => injectGlobal`
  ${reset}
  * {
    outline: none;
    color: ${theme.color.black};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  body {
      font-size: ${theme.size.m}
      font-family: 'Nunito Sans', sans-serif;
      font-weight: 400;
      line-height: 1;
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
    font-weight: 600;
    font-family: 'Halant', serif;
  }
  h1, h2 {
    border-bottom: 2px solid ${theme.color.neutral75};
    margin-top: ${theme.size.m}
    margin-bottom: ${theme.size.s}
    padding-bottom: ${theme.size.xxs};
  }
  h3, h4 {
    margin-top: ${theme.size.s}
    margin-bottom: ${theme.size.xs}
  }
  p {
      font-size: ${theme.size.m}
      line-height: 1.250;
      margin: ${theme.space.stack.m}
  }
  small {
      font-weight: 300;
      font-size: ${theme.size.s}
  }
  a {
      color: ${theme.color.primary_dark}
      text-decoration: none;
      &:active {
         color: ${theme.color.primary}
      }
  }
  ul {
      margin-left: ${theme.size.m};
  }
`
