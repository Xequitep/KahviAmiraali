import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import styles from '../globalStyles'
import icons from '../helpers/icons'

class Template extends React.Component {
  constructor(p) {
    super(p)
    styles()
  }
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  }
}

export default Template
