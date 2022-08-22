import React from 'react'
import {Header, Footer } from '.'
import Head from 'next/head'
const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>FINALIX</title>
    </Head>
      <header className='bg-navBarBg px-6 sm:px-28 font-inter h-auto '>
        <Header/>
      </header>
      <main className=' font-inter pb-16'>
        {children}
      </main>
      <footer className='font-inter h-full w-full sm:px-28 px-6 px-6 xs:px-8 '>
        <Footer/>
      </footer>
    </>
  )
}

export default LandingPage