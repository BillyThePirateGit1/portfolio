import Head from 'next/head'
import Navbar from './../components/Navbar/Navbar'
import { Background, BGBody, HomeH1, Line, LineContainer } from './../components/Home/Home.style'
import Footer from './../components/Footer/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle/>
      <Navbar/>
      <Background>
        <BGBody>
          <HomeH1> Gussy Gaming </HomeH1>
          <LineContainer>
          <Line/>
          <Line/>
          <Line/>
        </LineContainer>
        </BGBody>
      </Background>
      <BGBody>
        <Footer/>
      </BGBody>
    </div>
  )
}
