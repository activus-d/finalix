import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import rec1 from '../public/assets/images/rec1.svg'
import rec4 from '../public/assets/images/rec4.svg'
const HomeFinalix = () => {
  return (
    <section className='flex relative justify-between sm:bg px-6 sm:px-28 py-8 h-full'>
      <div className='py-12 '>
        <div className=' h-full w-full ss:px-0 ss:w-5/6  w-full '>
          <h1 className='font-bold capitalize text-[3rem] md:text-secHead text-priHeadColor'>
          Finalix business consulting
          </h1>
          <p className='md:w-3/4 text-homeTextColor py-8 text-priPara '>Finalix develops and supports projects for companies in the finance and insurance industry. Our clients include universal banks, private banks, asset managers, private equity companies and insurance companies.
          </p>

          <div>
            <div className='py-10'>
              <h2 className='text-secHead text-priHeadColor font-bold text-[2.7rem]'>Expertise</h2>
            <p className='md:w-[45rem] text-homeTextColor md:w-2/3  w-full py-8 text-priPara'>You benefit from experienced and conceptually strong consultants who develop solutions to strengthen your company on the market in the long term.
            </p>
            <a href="#explore"><IoIosArrowDown  size={44} color='white' className = 'bg-priHeadColor rounded-full px-4'/></a>
            </div>
            
            
            
           
          </div>
          
        </div>  
      </div>
      
      <div className='hidden sm:flex flex-col items-center w-[50rem] h-[50rem]'>
        <div className='one w-[23rem] md:w-[32rem] h-[9rem] '></div>
        <div className=' absolute right-0 md:right-8  top-32 '>
          <Image 
            src={rec1}
            width={220}
            height={180}
          />
        </div>
        
        <div className='two  w-[31rem] md:w-[41rem] h-[12rem]'></div>
        <div className='absolute sm:right-6 md:right-40  top-[28rem]'>
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