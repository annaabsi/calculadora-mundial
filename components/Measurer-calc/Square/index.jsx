import React from 'react'
import styled from 'styled-components'

const SquareComponent = ({ number, onClick, value, onChange }) => {
  return (
    <Square value={value} onClick={onClick} onChange={onChange}>
      <h1>{ number }</h1>
    </Square>
  )
}

export default SquareComponent

const Square = styled.div`
  height: 34px;
  width: 48px;
  line-height: 34px;
  text-align: center;
  color: white;
  border: solid white 1px;
  cursor: pointer;
  background-color: #8D1A41;
  &:hover{
    opacity: 0.6;
    transition: 0.4s;
    background-color: #4A1225;
  }
`