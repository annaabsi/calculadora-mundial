import React from 'react'

import styled from 'styled-components'
import ProximoPartido from './ProxPartido'

const ClasificationSA = () => {
  return (
    <ContainerComponent>
      <WrapperTitle>
        <Title>
          Fixture Completo Eliminatorias
        </Title>
      </WrapperTitle>
      <ContentScroll>
        <BlackOpta>
          <ProximoPartido />
        </BlackOpta>
      </ContentScroll>
    </ContainerComponent>
  )
}

export default ClasificationSA

const ContainerComponent = styled.div`
  height: auto;
  width: 100%;
  /* background-color: #8D1A41; */
`
const WrapperTitle = styled.div`
  height: auto;
  padding-top: 5px;
  width: 100%;
  background: rgb(56,15,29);
  background: linear-gradient(90deg, rgba(56,15,29,1) 0%, rgba(141,26,65,1) 50%);
`
const Title = styled.h2`
  font-size: 24px;
  text-align: left;
  padding: 11px 0 11px 37px;
  color: white;
  font-family: 'Open Sans',sans-serif;
  min-height: 50px;
  height: 100%;
  @media (max-width: 440px){
    font-size: 21px;
    padding: 11px 0 11px 10px;
    text-align: center;
  }
`
const Bajada = styled.h3`
  font-size: 15px;
  font-weight: 500;
  width: 80%;
  margin: 10px auto 10px;
  font-style: italic;
`
const BlackOpta = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  /* @media (max-width: 800px){
    width: 98%;
  } */
`
const ContentScroll = styled.div`
  height: 735px;
  max-width: 100%;
  width: 95%;
  margin: 0 auto;
  overflow-y: scroll;
`