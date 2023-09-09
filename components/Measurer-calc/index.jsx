import React, { useState, useMemo } from 'react'

import styled from 'styled-components'
import Dates from './Dates'
import ButtonCalc from './ButtonCalc'
import SquareComponent from './Square'
import { FixturePartidos } from '../../const/index'

const MeasurerCalc = ({ table, setTable }) => {
  const [fecha1, setFecha1] = useState(FixturePartidos[0])
  const [fecha2, setFecha2] = useState(FixturePartidos[1])
  const [fecha3, setFecha3] = useState(FixturePartidos[2])
  const [fecha4, setFecha4] = useState(FixturePartidos[3])
  const [fecha, setFecha] = useState(2)

  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  const [error4, setError4] = useState(false)

  const [errorColor1, setErrorColor1] = useState(false)
  const [errorColor2, setErrorColor2] = useState(false)
  const [errorColor3, setErrorColor3] = useState(false)
  const [errorColor4, setErrorColor4] = useState(false)

  const  [btnDisabled1, setBtnDisabled1] = useState(true)
  const  [btnDisabled2, setBtnDisabled2] = useState(false)
  const  [btnDisabled3, setBtnDisabled3] = useState(false)
  const  [btnDisabled4, setBtnDisabled4] = useState(false)

  const [colorBtn1, setColorBtn1] = useState('red')
  const [colorBtn2, setColorBtn2] = useState('#398E06')
  const [colorBtn3, setColorBtn3] = useState('#398E06')
  const [colorBtn4, setColorBtn4] = useState('#398E06')

  // const [isValid, setIsValid] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false);

  const arrayStates = [
    fecha,
    fecha1, 
    fecha2, 
    fecha3, 
    fecha4, 
    error1, 
    error2, 
    error3, 
    error4, 
    errorColor1, 
    errorColor2,
    errorColor3,
    errorColor4,
    btnDisabled1, 
    btnDisabled2, 
    btnDisabled3, 
    btnDisabled4, 
    colorBtn1, 
    colorBtn2, 
    colorBtn3, 
    colorBtn4,
    isDisabled
  ]

  const handleInput = (e, fn, id, data) => {
    const { value, validity: { valid }, name } = e.target
    const newArray = data.map((f) => {
      if (f.id === id) {
        const x = valid ? value : f[name]
        return {
          ...f,
          [name]: x
        }
      }

      return { ...f }
    })
    fn([...newArray])
  }

  const getInfoCountry = (country) => {
    return table.find((t) => t.pais === country)
  }

  const validatedVs = (item) => {
    const info1 = getInfoCountry(item.nameTeam1)
    const info2 = getInfoCountry(item.nameTeam2)
    if (item.score1 > item.score2) {
      info1.PJ = info1.PJ + 1
      info2.PJ = info2.PJ + 1
      info1.PG = info1.PG + 1
      info2.PP = info2.PP + 1
      info2.DG = info2.DG - (item.score1 - item.score2)
      info1.PTS = info1.PTS + 3
      info1.DG = info1.DG + (item.score1 - item.score2)
    } else if (item.score1 < item.score2) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info1.PP = info1.PP + 1
      info2.PG = info2.PG + 1
      info2.PTS = info2.PTS + 3
      info2.DG = info2.DG + (item.score2 - item.score1)
      info1.DG = info1.DG - (item.score2 - item.score1)
    } else if (item.score1 === item.score2) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info2.PE = info2.PE + 1
      info1.PE = info1.PE + 1
      info2.PTS = info2.PTS + 1
      info1.PTS = info1.PTS + 1
    }
    setTable([...table, info1, info2])
  }

  let info = null

  const CalcPoints = (f, n) => {
    let isValid = true
    f.forEach((item) => {
      // console.log('calc',item.score1.length, item.score2.length)
      if (item.score1.length === 0 || item.score2.length === 0) {
        isValid = false
      }
    })
    
    // console.log('item', isValid)
    if (!isValid) {
      //suma puntos llenos las casillas
      setError1(true)
      setError2(true)
      setError3(true)
      setError4(true)

      setErrorColor1(true)
      setErrorColor2(true)
      setErrorColor3(true)
      setErrorColor4(true)
      
      setBtnDisabled1(true)
      setBtnDisabled2(false)
      setBtnDisabled3(false)
      setBtnDisabled4(false)

      return
    } else {
      //bloquea boton vacios las casillas
      setError1(false)
      setError3(false)
      setError2(false)
      setError4(false)
      
      setErrorColor1(false)
      setErrorColor2(false)
      setErrorColor3(false)
      setErrorColor4(false)

      if (n === 1){
        setBtnDisabled1(true)
        setColorBtn1('red')
      }
      else if (n === 2){
        setBtnDisabled2(true)
        setColorBtn2('red')
      }
      else if (n === 3){
        setBtnDisabled3(true)
        setColorBtn3('red')
      }
      else if (n === 4){
        setBtnDisabled4(true)
        setColorBtn4('red')
      }
      
      f.filter(item => item.score1.length > 0 && item.score2.length > 0)
      .forEach((item, i) => {
        validatedVs(item)
      })
    }
  }

  const MostrarDataFecha = (number) => {
    if (number === 1) {
      return (
        <>
          {
            fecha1 &&
            fecha1.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                isDisabled={true}
                handleInput={(e) => handleInput(e, setFecha1, item.id, fecha1)}
              />
            })
          }
          {errorColor1 && <ButtonCalc colorBtn={colorBtn1} onClick={() => { CalcPoints(fecha1) }} />}
          {!errorColor1 && <ButtonCalc colorBtn={colorBtn1} disabled={btnDisabled1} onClick={() => { CalcPoints(fecha1, 1) }} />}
          {error1 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 2) {
      return (
        <>
          {
            fecha2 &&
            fecha2.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha2, item.id, fecha2)}
              />
            })
          }
          {errorColor2 && <ButtonCalc colorBtn={colorBtn2} onClick={() => { CalcPoints(fecha2) }} />}
          {!errorColor2 && <ButtonCalc colorBtn={colorBtn2} disabled={btnDisabled2} onClick={() => { CalcPoints(fecha2, 2) }} />}
          {error2 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 3) {
      return (
        <>
          {
            fecha3 &&
            fecha3.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha3, item.id, fecha3)}
              />
            })
          }
          {errorColor3 && <ButtonCalc colorBtn={colorBtn3} onClick={() => { CalcPoints(fecha3) }} />}
          {!errorColor3 && <ButtonCalc colorBtn={colorBtn3} disabled={btnDisabled3} onClick={() => { CalcPoints(fecha3, 3) }} />}
          {error3 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 4) {
      return (
        <>
          {
            fecha4 &&
            fecha4.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha4, item.id, fecha4)}
              />
            })
          }
          {errorColor4 && <ButtonCalc colorBtn={colorBtn4} onClick={() => { CalcPoints(fecha4) }} />}
          {!errorColor4 && <ButtonCalc colorBtn={colorBtn4} disabled={btnDisabled4} onClick={() => { CalcPoints(fecha4, 4) }} />}
          {error4 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
  }

  const partidosxFecha = useMemo(() => MostrarDataFecha(fecha), [arrayStates])

  return (
    <>
    <ContainerMeasurer>
      
      <ContainerBar>
        <SquareComponent onClick={() => setFecha(1)} number="1" />
        <SquareComponent onClick={() => setFecha(2)} number="2" />
        <SquareComponent onClick={() => setFecha(3)} number="3" />
        <SquareComponent onClick={() => setFecha(4)} number="4" />
      </ContainerBar>
      <TextoFecha>Fecha {fecha}</TextoFecha>
      {partidosxFecha}

    </ContainerMeasurer>
    </>
  )
}

export default MeasurerCalc

const ContainerMeasurer = styled.div`
  height: auto;
  width: 100%;
`
const ContainerBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`
const TextError = styled.h3`
  font-size: 11px;
  color: red;
  font-weight: 600;
  text-align: center;
`
const TextoFecha = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`