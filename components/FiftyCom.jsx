import React from 'react'

const FiftyCom = () => {
  return (
    <section className='flex bg-veryLightGreen h-40 items-center rounded-full ss:h-44 lg:52'>
      <div className='flex flex-col justify-center align-center border-r-2 border-lightGreen basis-1/3'>
        <h3 className='text-verydeepGreen text-3xl font-extrabold text-center mb-3 ss:text4xl lg:text-5xl'>50+</h3>
        <p className='text-deepGreen text-8 font-bold text-center inline-block m-auto ss:text-11 ss:w-5/6'>Business Consulting <br/>Professionals</p>
      </div>
      <div className='flex flex-col justify-center align-center border-r-2 border-lightGreen basis-1/3'>
        <h3 className='text-verydeepGreen text-3xl font-extrabold text-center mb-3 ss:text4xl lg:text-5xl'>>250</h3>
        <p className='text-deepGreen text-8 font-bold text-center inline-block m-auto ss:text-11 ss:w-5/6'>Successfully Delivered <br/>Projects</p>
      </div>
      <div className='flex flex-col justify-center align-center basis-1/3'>
        <h3 className='text-verydeepGreen text-3xl font-extrabold text-center mb-3 ss:text4xl lg:text-5xl'>>12</h3>
        <p className='text-deepGreen text-8 font-bold text-center inline-block m-auto ss:text-11 ss:w-5/6'>years Average <br/>Experience</p>
      </div>
    </section>
  )
}

export default FiftyCom