import React from 'react'

import styled from 'styled-components'
import Head from 'next/head'
import OptaComp from '../Opta'
import Goleadores from './Goleadores'
import TableGoleadores from '../Table'


const EstadisticasSAWC = () => {
  return (
    <>
      <Head>
        <script src="https://secure.widget.cloud.opta.net/2.0/js/widgets.opta.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://secure.widget.cloud.opta.net/2.0/css/widgets.opta.css" type="text/css" />
        <OptaComp/>
      </Head>
      <ContainerEstadistica>
        <WrapperTitle>
          <Title>
            Estadísticas de las clasificatorias a Qatar 2022
          </Title>
        </WrapperTitle>
        <Bajada>
          Conoce quiénes lideran la tabla de goleadores, los futbolistas 
          con más asistencias, pero también aquellos que han acumulado más 
          tarjetas amarillas y rojas.
        </Bajada>
        <TableGoleadores/>
        {/* <BlackOpta>
          <Goleadores/>
        </BlackOpta> */}
      </ContainerEstadistica>
    </>
  )
}

export default EstadisticasSAWC

const ContainerEstadistica = styled.div`
  height: auto;
  width: 100%;
  background-image: url("./static/images/logos_futbol_sud.png");
  background-size: 100%;
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
  font-style: italic;
  text-align: center;
  margin: 10px auto 0;
  font-weight: 500;
  width: 80%;
`
const BlackOpta = styled.div`
  width: 80%;
  height: auto;
  padding: 10px;
  @media (max-width: 540px){
    width: 98%;
  }
`