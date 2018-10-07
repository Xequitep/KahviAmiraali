import React, { Component } from 'react'

export default class StopScrolling extends Component {
  toggle = b => document.body.classList.toggle('stop-scrolling', b)
  componentDidMount() {
    this.toggle(true)
  }
  componentWillUnmount() {
    this.toggle(false)
  }
  render() {
    return null
  }
}
