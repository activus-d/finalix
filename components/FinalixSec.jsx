import React from 'react'
import Image from 'next/image'
import finalixSecImg1 from '../public/assets/images/finalixSecImg1.svg'
import finalixSecImg2 from '../public/assets/images/finalixSecImg2.svg'

const FinalixSec = ({props}) => {
  return (
    <section className=''>
      <section className="ss:grid ss:grid-cols-2 ss:bg-[url('../public/assets/images/finalixSecBg2.svg')] bg-no-repeat ss:bg-35% ss:bg-right px-5 pb-5 ss:pt-14 ss:px-28">
        <div className=' flex flex-col justify-center items-center text-center ss:pr-24 ss:text-justify ss:items-start'>
          <h3 className='text-4xl text-deepGreen mb-9 font-bold lg:text-5xl'>
          Finalix Family
          </h3>
          <p className='text-priPara mb-9 text-deepGreen lg:text-16'>
            We are passionate doers with character and live a flat hierarchy. We share our knowledge and actively exchange ideas with each other. Work-life balance is no empty phrase for us – we promote flexible working models.
          </p>
          <button className='w-56 px-3 py-5 bg-deepGreen text-white text-2xl rounded-2xl'>
            Explore More >
          </button>
        </div>
        <div className="hidden ss:flex justify-end self-center">
          <Image 
            src={finalixSecImg1}
            width={500}
            height={350}
          />
        </div>
      </section>
      <section className="ss:grid ss:grid-cols-2 ss:bg-[url('../public/assets/images/finalixSecBg2.svg')] bg-no-repeat bg-35% bg-left px-5 pt-5 ss:pb-14 ss:px-28">
        <div className="hidden ss:flex justify-start self-center">
          <Image 
            src={finalixSecImg2}
            width={500}
            height={350}
            className='w-[800px] h-[500px]'
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center ss:pl-12 ss:text-justify ss:text-left ss:items-start'>
          <h3 className='text-4xl text-deepGreen mb-9 font-bold lg:text-5xl'>
            Recruiting
          </h3>
          <p className='text-priPara mb-9 text-deepGreen lg:text-16'>
            With us, you will accompany and develop value-creating projects with banks and insurance companies. The finalix Family is always looking for new consultants to join us in rethinking the financial industry. Are you ready?
          </p>
          <button className='w-56 px-3 py-5 bg-deepGreen text-white text-2xl rounded-2xl'>
            Explore More >
          </button>
        </div>
      </section>
    </section>
  )
}

export default FinalixSec