import React from 'react'
import styled from 'styled-components'

const PortNews = () => {
  return (
    <ContentPort>
      <WrapperTitle>
        <ContTitleBajada>
          <Title>
            Así va la tabla de las Eliminatorias rumbo a México/Estados Unidos/Canadá 2026 en Sudamérica
          </Title>
          <WrapperBajada>
            <Bajada>
              Fecha a fecha. Sigue el fixture, los resultados y la tabla de posiciones de las eliminatorias
              sudamericanas.
            </Bajada>
          </WrapperBajada>
        </ContTitleBajada>
      </WrapperTitle>
      {/* <ImagePort
        src='https://delatribuna.com/wp-content/uploads/2020/11/tabla-de-posiciones_eliminatorias_sudamericanas-696x464.jpg'
        alt={'slider'}
      /> */}
    </ContentPort>
  )
}

export default PortNews

const Redirect = styled.a`
  height: 100%;
`
const ContentPort = styled.div`
  position: relative;
  height: 207px;
  display: flex;
  justify-content: center;
  /* background-color: white; */
`
const ContTitleBajada = styled.div`
  position: absolute;
  bottom: 14px;
  height: auto;
  width: auto;
  @media (max-width: 850px){
    bottom: 15px;
  }
  @media (max-width: 370px){
    bottom: 23px;
  }
`
const WrapperTitle = styled.div`
  align-items: center;
  /* background: rgba(0,0,0,.48); */
  display: flex;
  height: 100%;
  /* padding-left: 50px; */
  position: absolute;
  width: 75%;
  @media (max-width: 985px){
    width: 97%;
  }
  @media (max-width: 480px){
  }
`
const Title = styled.h1`
  width: auto;
  text-align: center;
  color: black;
  font-family: Lato, sans-serif;
  font-size: 33px;
  font-weight: 800;
  /* text-transform: uppercase; */
  /* text-align: start; */
  /* text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em; */
  margin-bottom: 90px;
  line-height: 35px;
  /* cursor: pointer; */
  /* &:hover{
    text-decoration: underline;
  } */
  @media (max-width: 800px){
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: 550px){
    font-size: 20px;
    line-height: 25px;
  }
`
const WrapperBajada = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  align-items: center;
  align-items: center;
  max-width: 100%;
  margin: -77px 0px;
  font-size: 15px;
  @media (max-width: 480px){
    max-width: 100%;
  }
`
const Bajada = styled.h2`
  color: black;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 19px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  text-transform: initial;
  /* text-align: start; */
  line-height: 22px;
  letter-spacing: -1px;
  /* text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em; */
  @media (max-width: 800px){
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 550px){
    font-size: 14px;
    line-height: 16px;
  }
`
const ImagePort = styled.img`
  height: 100%;
  width: 100%;
`