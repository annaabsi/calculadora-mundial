import React from 'react'

import styled from 'styled-components'

const InputScore = ({ onchange, value, name, type = 'text', ...props }) => {
  return (
    <>
      <Input
        value={value}
        name={name}
        type={type}
        {...props}
      />
    </>
  )
}

export default InputScore

const Input = styled.input`
  width: 40px;
  height: 40px;
  background-color: #8D1A41;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  margin: 0 10px;
  border: solid black 1px;
  @media (max-width: 400px){
    margin: 0 5px;
  }
`