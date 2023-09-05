import React from 'react'
import styled from 'styled-components'

import BlockNews from '../BlockNews/index'

const LastNews = () => {
  return (
    <ContainerLastNews>
      <Title>
        Últimas noticias de las Eliminatorias Qatar 2022 en 
        La República Deportes
      </Title>
      <Bajada>
        Mantente al día con las últimas noticias del proceso 
        clasificatorio para alcanzar un cupo en el próximo Mundial.
      </Bajada>

      <WrapperBlocksNews>
        <BlockNews />
        <BlockNews />
        <BlockNews />
        <BlockNews />
        <BlockNews />
        <BlockNews />
        <BlockNews />
        <BlockNews />
      </WrapperBlocksNews>
    </ContainerLastNews>
  )
}

export default LastNews

const ContainerLastNews = styled.div`
  height: auto;
  width: 100%;
  background-color: red;
`
const Title = styled.h2`
  padding-top: 5px;
  font-size: 25px;
  text-align: center;
`
const Bajada = styled.h3`
  width: 60%;
  font-weight: 500;
  margin: 10px auto 5px;
  font-size: 15px;
  font-style: italic;
`
const WrapperBlocksNews = styled.div`
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: auto;
  width: 100%;
  background-color: hotpink;
`