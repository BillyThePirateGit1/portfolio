import Head from 'next/head'
import Link from 'next/link'
import Navbar from './../Navbar/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <h1>Gussy Gaming</h1>
    </div>
  )
}
