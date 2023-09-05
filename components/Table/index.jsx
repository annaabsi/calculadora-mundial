import React from 'react'
import styled from 'styled-components'

const TableGoleadores = () => {
  return (
    <ContainerTable className="default">
      <TrHead>
        <Th>Jugador</Th>
        <Th>País</Th>
        <Th>Goles</Th>
      </TrHead>

      <tr>
        <td>Soleado</td>
        <td>Mayormente soleado</td>
        <td>Parcialmente nublado</td>
      </tr>

      <tr>
        <td>19°C</td>
        <td>17°C</td>
        <td>12°C</td>
      </tr>

      <tr>
        <td>E 13 km/h</td>
        <td>E 11 km/h</td>
        <td>S 16 km/h</td>
      </tr>
    </ContainerTable>
  )
}

export default TableGoleadores

const ContainerTable = styled.table`
  height: 350px;
  width: 350px;
  border: 1px solid black;
  background-color: white;
`
const TrHead = styled.tr`
  height: auto;
`
const Th = styled.th`
  text-align: center;
  height: 40px;
  line-height: 40px;
`