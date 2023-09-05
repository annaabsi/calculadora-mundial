import React, { useState } from 'react'

import styled from 'styled-components'
import MeasurerCalc from '../Measurer-calc'
import TableCalcPositions from '../Table-calc/table'
import { ArrayPointsTable } from '../../const/index'

const Calculator = () => {
  const [table, setTable] = useState(ArrayPointsTable)
  return (
    <Container>
      <WrapperTitle>
        <Title>Calculadora de las Eliminatorias</Title>
      </WrapperTitle>
      <Bajada>
        Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se realizará en Estados Unidos, México y Canadá.
      </Bajada>
      <MeasurerCalc table={table} setTable={setTable} />
      <TableCalcPositions table={table} setTable={setTable} />
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 20px;
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
  margin: 20px auto 50px;
  font-style: italic;
`