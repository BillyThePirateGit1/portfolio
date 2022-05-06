import Head from 'next/head'
import { Background, BGBody, HomeH1, Line, LineContainer, H2, HRStyle } from './../components/Home/Home.style'
import { createGlobalStyle } from 'styled-components'
import Layout from './../components/Layout/Layout'
import Hero from './../components/Hero/Hero'
import { useEffect } from 'react/cjs/react.production.min';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600&display=swap');

  body{
    font-family: 'Roboto Slab', serif;
  }
`

export default function Home() {

  return (

    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles/>
      <Hero/>
      
    </Layout>
  )
}
