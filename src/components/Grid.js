import React from 'react'
import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: ${props => {
    if (props.columns) {
      return props.columns
    } else if (props.repeat && props.column && props.children.length > 2) {
      return `repeat(${props.children.length}, ${props.column})`
    } else if (props.column) {
      return React.Children.map(props.children, c => props.column)
    } else {
      return React.Children.map(props.children, c => '1fr')
    }
  }};
`
