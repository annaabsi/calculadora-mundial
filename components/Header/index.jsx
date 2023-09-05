import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return(
    <ContainerHeader>
      <a href="https://larepublica.pe/deportes/" target="_blank">
      <WrapperImage>
        <Image src="./static/images/LOGO_FINAL.png"/>
      </WrapperImage>
      </a>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
  height: 104px;
  max-width: 1300px;
  width: 100%;
  background: rgb(59,16,31);
  background: linear-gradient(90deg, rgba(59,16,31,1) 0%, rgba(141,26,65,1) 74%);
  margin: 0 auto;
  @media (max-width: 440px){
    height: 80px;
  }
`
const WrapperImage = styled.div`
  height: 100%;
  width: 330px;
  margin: 0 auto;
  @media (max-width: 530px){
    width: 270px;
    height: 80%;
    padding-top: 18px;
  }
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`