import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
const Expertise = ({title, photo, desc}) => {
  return (
    <div className=' w-[40rem] h-full'>

    <Image src={photo}/>
        <div className='py-6 mt-[-7px] bg-white md:px-10 px-8 rounded-b-2xl hover:bg-navBarBg hover:text-white text-navBarBg'>
          <h2 className='flex justify-between items-center  text-mediumHead font-bold py-4'>{title} 
          <span className='bg-navBarBg rounded-full p-2 hover:bg-white hover:text-navBarBg text-white '>
            <IoIosArrowForward  size={25}/>
            </span>
          </h2>
           
            
           
          <p className='text-priPara   pb-8 '>{desc}</p>
        </div>
    </div>
  )
}

export default Expertise