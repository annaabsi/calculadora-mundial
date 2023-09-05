import Layout from "../layouts/default"
import styled from 'styled-components'

import Footer from "../components/Footer"
import PortNews from "../components/PortNews"
import TablePosition from "../components/TablePosition"
import ClasificationSA from "../components/Clasification-SD-WC"
import Calculator from "../components/Calculator"
// import EstadisticasSAWC from "../components/ClasificationWC-SA"
// import LastNews from "../components/LastNews"

const Home = ({ goleadores }) => {
  // console.log('goleadores', goleadores)
  return (
    <>
      <Layout>
        <Content>
          <PortNews/>
          <TablePosition />
          <ClasificationSA />
          <Calculator/>
          {/* <EstadisticasSAWC /> */}
          {/* <LastNews/>  */}
        </Content>
      </Layout>
      <Footer/>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  let responseGoleadores= {}
  try{
    responseGoleadores = await fetch("https://content-sheets.googleapis.com/v4/spreadsheets/1ty8ARViG89FfnQMgcLff34ZjgdNSuOQr35GwOXwpjFI/values/'Goleadores'!A1:C11?access_token=AIzaSyAhFukVLxOrfZBH2uHDUajuxRbeql189nk&key=AIzaSyAhFukVLxOrfZBH2uHDUajuxRbeql189nk")
    responseGoleadores = await responseGoleadores.json()
  } catch (e){
    console.error(e)
  }

  return {
    goleadores : responseGoleadores
  }
}

export default Home

const Content = styled.div`
  width: 100%;
  height: auto;
`
