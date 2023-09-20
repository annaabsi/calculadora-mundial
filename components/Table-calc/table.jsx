import React from 'react'

import styled from 'styled-components'
import LineEstadistics from './LineEstadistics'
import { ArrayPointsTable } from '../../const/index'

const TableCalcPositions = ({ table, setTable }) => {

  const ListarEqipos = () => {

      const newArray = ArrayPointsTable.sort((a, b) => {
        // if ((a.PTS > b.PTS && a.DG > b.DG) || a.PTS > b.PTS) {
        //   return -1;
        // }
        // if ((a.PTS < b.PTS && a.DG < b.DG) || a.PTS < b.PTS) {
        //   return 1;
        // }
        // return 0;
        if (a.PTS !== b.PTS) {
          return b.PTS - a.PTS;
        } else {
          return b.DG - a.DG;
        }
      })
      return newArray.map((item, i) => {
          if (i < 6) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'#D2EB93'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
          if (i === 6) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'#C2C2C2'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
          if (i > 6) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'white'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
        })
  }

  return (
    <>
      <ContentScroll>
        <ContainerTable>
          <WrapperHead>
            <NumberPosition>
              #
            </NumberPosition>
            <BlockPaises>
              Selección
            </BlockPaises>
            <EstadisticsHead>PJ</EstadisticsHead>
            <EstadisticsHead>PG</EstadisticsHead>
            <EstadisticsHead>PE</EstadisticsHead>
            <EstadisticsHead>PP</EstadisticsHead>
            <EstadisticsHead>DG</EstadisticsHead>
            <EstadisticsHead>PTS</EstadisticsHead>
          </WrapperHead>

          <WrapperBody>
            <WrapperPositions>
              <PositionC>1</PositionC>
              <PositionC>2</PositionC>
              <PositionC>3</PositionC>
              <PositionC>4</PositionC>
              <PositionC>5</PositionC>
              <PositionC>6</PositionC>
              <PositionR>7</PositionR>
              <Position>8</Position>
              <Position>9</Position>
              <Position>10</Position>
            </WrapperPositions>

            <WrapperBarPoints>
              {
                ListarEqipos()
              }
            </WrapperBarPoints>
          </WrapperBody>
        </ContainerTable>
      </ContentScroll>
      <style jsx={true}>{`

      `}</style>
    </>
  )
}

export default TableCalcPositions
const ContentScroll = styled.div`
  height: auto;
  width: 650px;
  max-width: 100%;
  margin: 10px auto;
  overflow-x: scroll;
  overflow-y: hidden;
`
const ContainerTable = styled.div`
  height: auto;
  width: 560px;
  margin: 10px auto;
  background-color: white;
`
const WrapperHead = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`
const NumberPosition = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const BlockPaises = styled.div`
  width: 210px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const EstadisticsHead = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const WrapperBody = styled.div`
  display: flex;
  width: auto;
  height: auto;
`
const WrapperPositions = styled.div`
  width: 50px;
  height: auto;
`
const PositionC = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-color: #D2EB93;
  border-bottom: 1px solid white;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const PositionR = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-color: #C2C2C2;
  border-bottom: 1px solid white;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const Position = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const WrapperBarPoints = styled.div`
  width: 100%;
  height: auto;
  `
const BarPoints = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  width: 510px;
  height: 60px;
  @media (max-width: 470px){
    height: auto;
  }
`