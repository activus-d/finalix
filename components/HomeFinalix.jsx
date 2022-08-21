import React from 'react'
import Image from 'next/image'
import rec1 from '../public/assets/rec1.svg'
import rec4 from '../public/assets/rec4.svg'
const HomeFinalix = () => {
  return (
    <section className='flex relative   justify-between'>
      <div className=' py-28 sm:bg px-6  '>
        <div className=' h-full w-full  ss:w-5/6 sm:w-4/5  mx-auto '>
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
    <div className='hidden sm:flex flex-col  items-center  relative w-[50rem]'>
      
        <div className='one w-[28rem] md:w-[34rem] h-[9rem] '>
        </div>
        <div className=' absolute right-8 top-32 '>
        <Image 
        src={rec1}
        width={220}
        height={180}
        className='img'
      />
      </div>
        
      
     <div className='two  w-[35rem] md:w-[43rem] h-[12rem]'>
        </div>
        <div className='absolute sm:right-16 lg:right-40  md:bottom-[-15px] sm:bottom-8'>
        <Image 
        src={rec4}
        width={250}
        height={240}
        className='img'
      />
      </div>

      
      </div>
    </section>
    
  )
}

export default HomeFinalix