import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../helpers/responsiveness'

export default styled.div`
  display: grid;
  ${props => props.columnGap && `grid-column-gap: ${props.columnGap}`};
  ${props => props.rowGap && `grid-row-gap: ${props.rowGap}`};
  ${props =>
    (props.columns || props.column) &&
    ((props.breakOn && media[props.breakOn]) || css)`
      grid-template-columns: ${props => {
        if (props.columns) {
          return props.columns
        } else if (props.repeat && props.column && props.children.length > 2) {
          return `repeat(${props.children.length}, ${props.column})`
        } else if (props.column) {
          return React.Children.map(props.children, c => `${props.column} `)
        } else {
          return React.Children.map(props.children, c => '1fr ')
        }
      }};
    `};
  ${props =>
    (props.rows || props.row) &&
    ((props.breakOn && media[props.breakOn]) || css)`
      grid-template-rows: ${props => {
        if (props.rows) {
          return props.rows
        } else if (props.repeat && props.row && props.children.length > 2) {
          return `repeat(${props.children.length}, ${props.row})`
        } else if (props.row) {
          return React.Children.map(props.children, c => `${props.row} `)
        } else {
          return React.Children.map(props.children, c => '1fr ')
        }
      }};
    `};
`
