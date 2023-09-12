import React from 'react'

import NextHead from 'next/head'
import Header from '../components/Header'
import OptaComp from '../components/Opta'

import styled from 'styled-components'

const Layout = (props) => {
  const {
    children
  } = props
  return (
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>

        {/* Metadatos Opta */}
        <script src="https://secure.widget.cloud.opta.net/2.0/js/widgets.opta.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://secure.widget.cloud.opta.net/2.0/css/widgets.opta.css" type="text/css" />
        <OptaComp/>

        {/* Metadatos Facebook */}
        <meta property="fb:pages" content="94604237016" />
        <meta property="fb:app_id" content="489210501129201" />
        <meta property="og:image" content="https://larepublica.cronosmedia.glr.pe/package/2023/09/06/40e7jcgh6d-portadas.jpg"/>
        <meta property="og:url" content="https://especiales.larepublica.pe/eliminatorias-mundial-2026-tabla-posiciones-fixture-estadisticas-ultimas-noticias-conmebol/"/>
        <meta property="og:title" content="Eliminatorias Sudamericanas 2026: calculadora de la Copa Mundial, tabla de posiciones y fixture"/>
        <meta property="og:description" content="Fecha a fecha. Sigue el fixture, los resultados y la tabla de posiciones de las eliminatorias sudamericanas."/>
        <meta property="og:type" content="article"/>
        {/* Metadatos Twitter */} 
        <meta property="twitter:image" content="https://larepublica.cronosmedia.glr.pe/package/2023/09/06/40e7jcgh6d-portadas.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:title" content="Eliminatorias Sudamericanas 2026: calculadora de la Copa Mundial, tabla de posiciones y fixture"/>
        <meta name="twitter:description" content="Fecha a fecha. Sigue el fixture, los resultados y la tabla de posiciones de las eliminatorias sudamericanas."/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://especiales.larepublica.pe/eliminatorias-mundial-2026-tabla-posiciones-fixture-estadisticas-ultimas-noticias-conmebol/" />
        
        <title>Eliminatorias Sudamericanas 2026: calculadora de la Copa Mundial, tabla de posiciones y fixture</title>
      </NextHead>
      <Wrapper>
        <Header />
        <LayoutContent>
          <LayoutBody>
            {children}
          </LayoutBody>
        </LayoutContent>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background-image: url("./static/images/fondo-opaco.png");
  background-size: 100%;
  background-repeat: repeat;
  background-attachment: fixed;
`
const LayoutContent = styled.div`
  display: flex;
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`
const LayoutBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
`