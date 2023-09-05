import React, { useState } from 'react'

import styled from 'styled-components'
import InputScore from '../../InputScore'

const Dates = ({ team1, team2, logo1, logo2, handleInput ,score1, score2 }) => {
  return (
    <ContentDate>
      <ContTeam1>
        <TitleName>{team1}</TitleName>
        <Flag>
          <ImageLogo src={logo1} />
        </Flag>
        <InputScore
          onInput={handleInput}
          name="score1"
          value={score1}
          maxLength={2}
          pattern="[0-9]*"
        />
      </ContTeam1>
      <Vs>:</Vs>
      <ContTeam2>
        <InputScore
          onInput={handleInput}
          name="score2"
          value={score2}
          maxLength={2}
          pattern="[0-9]*"
        />
        <Flag>
          <ImageLogo src={logo2} />
        </Flag>
        <TitleName>{team2}</TitleName>
      </ContTeam2>
    </ContentDate>
  )
}

export default Dates

const ContentDate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 5px 0;
`
const ContTeam1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 49%;
`
const ContTeam2 = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
`
const Vs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 2%;
  font-size: 35px;
`
const TitleName = styled.h2`
  font-size: 18px;
  margin: 0 10px;
  @media (max-width: 450px){
    font-size: 15px;
  }
  @media (max-width: 380px){
    margin: 0 4px;
    font-size: 14px;
  }
`
const Flag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  @media (max-width: 450px){
    width: 50px;
    height: 50px;
  }
`
const ImageLogo = styled.img`
  height: 90%;
  width: auto;
  object-fit: cover;
`