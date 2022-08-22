import React from 'react'
import {Expertise} from '../components'
import image from '../public/assets/images/Rectangle 23.svg'

const ExpertiseSection = () => {
  return (
    <section className='bg-secBg px-6 sm:px-12 w-full py-16 h-full justify-center sm:flex-nowrap flex gap-12  flex-wrap'>
      <div className='md:block hidden'>
        <Expertise 
        photo={image}
        title='Expertise' 
        desc='You benefit from experienced and conceptually strong consultants who develop solutions to strengthen your company on the market in the long term.'/>
      </div>
        
        <Expertise 
        photo={image}
        title='Expertise' 
        desc='You benefit from experienced and conceptually strong consultants who develop solutions to strengthen your company on the market in the long term.'/>
        <Expertise 
        photo={image}
        title='Expertise' 
        desc='You benefit from experienced and conceptually strong consultants who develop solutions to strengthen your company on the market in the long term.'/>
        
    </section>
  )
}

export default ExpertiseSection