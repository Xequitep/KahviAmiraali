import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Navigation from './Navigation'
import Logo from '../assets/logo.svg'
import { Tablet, media } from '../helpers/responsiveness'
import StopScrolling from '../helpers/StopScrolling'

const Header = styled.a`
  font-family: 'Yeseva One', cursive;
  ${media.tablet`
    font-size: 1.3em;
  `} display: flex;
  align-items: center;
`
const StyledLogo = styled(Logo)`
  height: 20vw;
  max-height: 3em;
  max-width: 3em;
  margin: 0.5em;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${props =>
    props.visibleOnMobile &&
    css`
      position: fixed;
      background-color: white;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    `} ${media.tablet`
      position: unset;
      background-color: inherit;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

    `};
`

class HeaderComp extends PureComponent {
  state = {
    visibleOnMobile: false,
  }

  dasdasd = () => {
    this.setState(state => ({ visibleOnMobile: !state.visibleOnMobile }))
  }
  render() {
    const { className } = this.props
    const { visibleOnMobile } = this.state
    return (
      <HeaderWrapper className={className} visibleOnMobile={visibleOnMobile}>
        <Header href="/">
          <button>Takas</button>
          <StyledLogo />
          <span>Kahviamiraali</span>
        </Header>
        <Tablet className={className}>
          {matches => {
            if (matches || visibleOnMobile)
              return <Navigation visibleOnMobile={visibleOnMobile} />
            return (
              <button onClick={this.dasdasd}>
                {visibleOnMobile ? 'close' : 'open'}
              </button>
            )
          }}
        </Tablet>
      </HeaderWrapper>
    )
  }
}

export default HeaderComp
