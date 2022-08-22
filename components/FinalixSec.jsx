import React from 'react'
import Image from 'next/image'
import finalixSecImg1 from '../public/assets/images/finalixSecImg1.svg'
import finalixSecImg2 from '../public/assets/images/finalixSecImg2.svg'

const FinalixSec = ({props}) => {
  return (
    <section className=''>
      <section className="grid grid-cols-2 bg-[url('../public/assets/images/finalixSecBg2.svg')] bg-no-repeat bg-35% bg-right px-28 py-10">
        <div className='basis-1/2 flex flex-col justify-center text-justify pr-28'>
          <h3 className='text-5xl text-deepGreen mb-9 font-bold'>
          Finalix Family
          </h3>
          <p className='text-3xl mb-9 text-deepGreen'>
            We are passionate doers with character and live a flat hierarchy. We share our knowledge and actively exchange ideas with each other. Work-life balance is no empty phrase for us – we promote flexible working models.
          </p>
          <button className='w-56 px-3 py-5 bg-deepGreen text-white text-2xl rounded-2xl'>
            Explore More >
          </button>
        </div>
        <div className=" basis-2/4 flex justify-end">
          <Image 
            src={finalixSecImg1}
            width={500}
            height={350}
          />
        </div>
      </section>
      <section className="grid grid-cols-2 bg-[url('../public/assets/images/finalixSecBg2.svg')] bg-no-repeat bg-35% bg-left px-28 py-10">
        <div className=" basis- flex justify-start">
          <Image 
            src={finalixSecImg2}
            width={500}
            height={350}
          />
        </div>
        <div className='basis-1/2 pl-28 flex flex-col justify-center text-justify'>
          <h3 className='text-5xl text-deepGreen mb-9 font-bold'>
            Recruiting
          </h3>
          <p className='text-3xl mb-9 text-deepGreen'>
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