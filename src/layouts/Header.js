import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Navigation from './Navigation'
import Logo from '../assets/logo.svg'
import { Tablet, media } from '../helpers/responsiveness'
import StopScrolling from '../helpers/StopScrolling'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = styled.a`
  font-family: 'Yeseva One', cursive;
  font-size: 1.3em;
  display: flex;
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
      padding: 0 1em;

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

const ToggleButton = styled.button`
  border: none;
  background: none;
  font-size: 1.25em;
    ${props =>
      props.visibleOnMobile &&
      css`
        position: absolute;
        position: absolute;
        right: 1.25em;
        top: 1.25em;
      `}
}
`

class HeaderComp extends PureComponent {
  state = {
    visibleOnMobile: false,
  }

  toggleMobileNav = () => {
    this.setState(state => ({ visibleOnMobile: !state.visibleOnMobile }))
  }

  render() {
    const { className } = this.props
    const { visibleOnMobile } = this.state
    return (
      <Tablet className={className}>
        {matches => (
          <HeaderWrapper
            className={className}
            visibleOnMobile={visibleOnMobile}
          >
            <Header href="/">
              <StyledLogo />
              <span>Kahviamiraali</span>
            </Header>
            {(matches || visibleOnMobile) && (
              <Navigation visibleOnMobile={visibleOnMobile} />
            )}
            {!matches && (
              <ToggleButton
                visibleOnMobile={visibleOnMobile}
                onClick={this.toggleMobileNav}
              >
                {visibleOnMobile ? (
                  <FontAwesomeIcon icon="times" />
                ) : (
                  <FontAwesomeIcon icon="bars" />
                )}
              </ToggleButton>
            )}
          </HeaderWrapper>
        )}
      </Tablet>
    )
  }
}

export default HeaderComp
