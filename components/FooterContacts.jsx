import React from 'react'

const FooterContacts = () => {
  return (
    <div className='flex sm:flex-col justify-between text-white gap-4 sm:gap-12'>
        <div>
            <h3 className='text-3xl pb-4 font-bold '>Singapore</h3>
            <p>Finalix Pte. Ltd.</p>
            <p className='py-2'>4 Battery Road</p>
            <p >#25-1. Bank of China Building</p>
            <p className='py-2'>Singapore 049908</p>
            <p>
                <a href="mailto:sensysinfo31@gmail.com">
                info@finalix.com
                </a>
            </p>
        </div>
        <div >
            <h3 className='text-3xl pb-4 font-bold'>Switzerland</h3>
            <p className='pb-2'>Finalix AG</p>
            <p>baarerstrasse 110a</p>
            <p className='py-2'>6302 Zug</p>
            <p>
                <a href="mailto:sensysinfo31@gmail.com">
                info@finalix.com
                </a>
            </p>
        </div>
    </div>
  )
}

export default FooterContacts