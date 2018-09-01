import React from 'react'
import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.columns || React.Children.map(props.children, c => '1fr')};
`
