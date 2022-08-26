import React from 'react'

const FooterCom = () => {
  return (
    <div className=' text-white'>
      <h4 className='text-3xl pb-4'>Career</h4>
      <div className='flex sm:flex-col justify-between gap-4 sm:gap-12'>
        <div>
        <p className='pb-3'> <a href="/Singapore">Singapore</a></p>
        <p><a href="/TrustedPartners">Trusted Partners</a></p>
        </div>
      
        <div>
          <p className='pb-3'><a href="/LegalNotice">Legal Notice</a></p>
          <p><a href="/PrivacyPolicy">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  )
}

export default FooterCom