import React from 'react'
import {Header, Footer } from '.'
import Head from 'next/head'
const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>FINALIX</title>
    </Head>
      <header className='bg-navBarBg font-inter h-auto '>
        <Header/>
      </header>
      <main className=' font-inter pb-16'>
        {children}
      </main>
      <footer className='font-inter h-full w-full md:w-5/6 px-6 xs:px-8 mx-auto'>
        <Footer/>
      </footer>
    </>
  )
}

export default LandingPage