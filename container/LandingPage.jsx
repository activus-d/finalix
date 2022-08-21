import React from 'react'
import {Header, Footer } from '.'
import Head from 'next/head'
const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>FINALIX</title>
    </Head>
      <header>
        <Header/>
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