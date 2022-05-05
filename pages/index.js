import Head from 'next/head'
import Navbar from './../components/Navbar/Navbar'
import { Background, BGBody, HomeH1, Line, LineContainer, H2 } from './../components/Home/Home.style'
import Footer from './../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Background>
        <BGBody>
          <HomeH1> Hey! I'm Billy, </HomeH1>
          <H2> Full-stack Web Developer based in Saskatoon.  </H2>
          
        </BGBody>
      </Background>
      <Footer/>
      

    </div>
  )
}
