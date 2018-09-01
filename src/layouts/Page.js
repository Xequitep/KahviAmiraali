import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'

export default ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
)
