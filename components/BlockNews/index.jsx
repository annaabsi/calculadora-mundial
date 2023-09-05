import React from 'react'
import styled from 'styled-components'

const BlockNews = () => {
  return (
    <ContainerBlockNews>
      <WrapperImage>
        <ImageNot src="https://imgmedia.libero.pe/670x396/libero/migration/imagen/2020/11/12/noticia-1605206059-eliminatorias-qatar-2022-fecha-3.webp"/>
      </WrapperImage>
      <Title>
        TITULO DE NOTICIA -
        TITULO DE NOTICIA -
        TITULO DE NOTICIA -
        TITULO DE NOTICIA -
        TITULO DE NOTICIA
      </Title>
    </ContainerBlockNews>
  )
}

export default BlockNews

const ContainerBlockNews = styled.div`
  height: auto;
  width: 280px;
  background-color: greenyellow;
  margin-bottom: 10px;
`
const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const WrapperImage = styled.div`
  height: 60%;
  width: 100%;
  margin-bottom: 5px;
`
const ImageNot = styled.img`
  width: 100%;
  height: 100%;
`