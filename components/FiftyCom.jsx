import React from 'react'

const FiftyCom = () => {
  return (
    <section className='flex bg-veryLightGreen h-56 items-center rounded-full'>
      <div className='flex flex-col justify-center align-center border-r-2 border-lightGreen basis-1/3'>
        <h3 className='text-verydeepGreen text-5xl font-extrabold text-center mb-3'>50+</h3>
        <p className='text-deepGreen font-bold text-center inline-block w-5/6 m-auto'>Business Consulting <br/>Professionals</p>
      </div>
      <div className='flex flex-col justify-center align-center border-r-2 border-lightGreen basis-1/3'>
        <h3 className='text-verydeepGreen text-5xl font-extrabold text-center mb-3'>>250</h3>
        <p className='text-deepGreen font-bold text-center inline-block w-5/6 m-auto'>Successfully Delivered <br/>Projects</p>
      </div>
      <div className='flex flex-col justify-center align-center basis-1/3'>
        <h3 className='text-verydeepGreen text-5xl font-extrabold text-center mb-3'>>12</h3>
        <p className='text-deepGreen font-bold text-center inline-block w-5/6 m-auto'>years Average <br/>Experience</p>
      </div>
    </section>
  )
}

export default FiftyCom