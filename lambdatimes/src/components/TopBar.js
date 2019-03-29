import React from 'react';

import styled, { css } from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

let TopBarC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

let Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`

let ContainerLeft  = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

let CLSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
 
`
let ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  
  :hover &{ 
    text-decoration: underline;
  } 
`
let CCSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  
  ${props =>
    props.lastChild &&
    css`
    margin-right: 0;
  `}
`

let ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
let CRSpan = styled.span`
  cursor: pointer;
`


const TopBar = () => {
  return (
    <TopBarC>
      <Container>
        <ContainerLeft>
          <CLSpan>TOPICS</CLSpan><CLSpan>SEARCH</CLSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CCSpan>GENERAL</CCSpan><CCSpan>BROWNBAG</CCSpan><CCSpan>RANDOM</CCSpan><CCSpan>MUSIC</CCSpan><CCSpan lastChild>ANNOUNCEMENTS</CCSpan>
        </ContainerCenter>
        <ContainerRight>
          <CRSpan>LOG IN</CRSpan>
        </ContainerRight>
      </Container>
    </TopBarC>
  )
}

export default TopBar;