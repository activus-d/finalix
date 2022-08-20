import React from 'react'
import {Home, Footer } from '../container'
import Head from 'next/head'
const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>FINALIX</title>
    </Head>
      <header>
        <Home/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default LandingPage