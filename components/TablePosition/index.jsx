import React from 'react'
import styled from 'styled-components'
import ClasificacionesMundial from '../Estadistica/ClasificacionMundial'

const TablePosition = () => {
  return (
    <ContentTable>
      <WrapperTitle>
        <Title>Tabla de posiciones</Title>
      </WrapperTitle>
      <WrapperTable>
        <BlackOpta>
          <ClasificacionesMundial />
        </BlackOpta>
        <WrapperImage>
          <ImageJugadores src="./static/images/jugadores.png" />
        </WrapperImage>
      </WrapperTable>
    </ContentTable>
  )
}

export default TablePosition

const ContentTable = styled.div`
  height: auto;
  width: 100%;
  overflow-x: hidden;
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
const BlackOpta = styled.div`
  width: calc(100% - 21.2%);
  height: auto;
  padding: 10px;
  padding-top: 50px;
  @media (max-width: 750px){
    padding-top: 10px;
  }
  @media (max-width: 540px){
    width: 98%;
  }
`
const WrapperImage = styled.div`
  height: 100%;
  width: 21.2%;
  @media (max-width: 500px){
    display: none;
}
`
const ImageJugadores = styled.img`
  height: 530px;
  width: auto;
`
const WrapperTable = styled.div`
  display: flex;
  justify-content: space-between;
`