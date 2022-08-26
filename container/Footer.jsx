import React from 'react'
import { FooterCom, Newsletter,FooterContacts } from '../components'
const Footer = () => {
  return (
    <section className='px-6 md:px-28 py-20 h-full'>
      <h2 className='text-4xl text-center my-8 text-white'>Finalix</h2>
      <div className='sm:flex items-center   justify-center sm:justify-between gap-12'>
        <FooterCom/>
        <Newsletter/>
        <FooterContacts/>
      </div>
      
    </section>
  )
}

export default Footer