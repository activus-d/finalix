import React from 'react'
import Image from 'next/image'
import rec1 from '../public/assets/rec1.svg'
import rec4 from '../public/assets/rec4.svg'
const HomeFinalix = () => {
  return (
    <section className='flex relative   justify-between'>
      <div className=' py-28 sm:bg  '>
        <div className=' h-full w-full px-6 ss:px-0 ss:w-5/6 sm:w-4/5  mx-auto '>
          <h1 className='font-bold capitalize text-secHead text-priHeadColor'>
          Finalix business consulting
          </h1>
          <p className='sm:w-3/4 text-homeTextColor py-8 text-priPara'>Finalix develops and supports projects for companies in the finance and insurance industry. Our clients include universal banks, private banks, asset managers, private equity companies and insurance companies.
          </p>

          <div className='py-10'>
            <h2 className='text-secHead text-priHeadColor font-bold'>Expertise</h2>
            <p className='md:w-[45rem] text-homeTextColor sm:w-2/3  w-full py-8 text-priPara'>You benefit from experienced and conceptually strong consultants who develop solutions to strengthen your company on the market in the long term.
            </p>
          </div>
        </div>  
      </div>
      <div className='hidden sm:flex flex-col   items-center w-[50rem]'>
        <div className='one w-[22rem] md:w-[34rem] h-[9rem] '></div>
        <div className=' absolute right-0 md:right-8  top-32 '>
          <Image 
            src={rec1}
            width={220}
            height={180}
          />
        </div>
        
        <div className='two  w-[30rem] md:w-[43rem] h-[12rem]'></div>
        <div className='absolute sm:right-6 lg:right-40  top-[28rem]'>
          <Image 
            src={rec4}
            width={250}
            height={240}
          />
        </div>
      </div>
    </section>
    
  )
}

export default HomeFinalix