import React from 'react';
import Image from 'next/image'
import diagramDown from "../public/assets/images/diagramDown.svg"
import diagramUp from "../public/assets/images/diagramUp.svg"
import line from "../public/assets/images/Line2.svg"

const FinalixMiles = () => {
  return (
    <section className="hidden px-28 py-7 md:block">
      <h2 className='text-4xl font-bold text-deepGreen mb-20'>Finalix Milestone</h2>
      <div className='grid grid-cols-5 justify-between'>
        <RectangleDown 
          number={'200'}
          text={'Founded & Domiciled in Zug'}
        />
        <div></div>
        <RectangleDown 
          number={'50+'}
          text={'Business Consulting Professionals'}
        />
        <div></div>
        <RectangleDown 
          number={'>250'}
          text={'successfully delivered projects'}
        />
      </div>
      <div className='relative h-[50px] mt-8'>
        <Image 
          src={line}
        />
        <div className='flex justify-around w-full absolute top-[-20%]'>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </div>
      </div>
      <div className='grid grid-cols-5 justify-between'>
        <div></div>
        <RectangleUp 
          number={'50+'}
          text={'Business Consulting Professionals'}
        />
        <div></div>
        <RectangleUp 
          number={'50+'}
          text={'Business Consulting Professionals'}
        />
        <div></div>
      </div>
    </section>
  )
};

const RectangleDown = ({number, text}) => {
  return <>
    <div className='flex flex-col items-center relative'>
      <Image 
        src={diagramDown}
      />
      <div className='h-[50px] w-[162px] bg-deepGreen ml-3 absolute flex justify-center items-center'>
        <p className="text-white font-bold text-3xl">{number}</p>
      </div>
      <p className='absolute top-[40%] text-center w-[150px] font-bold text-deepGreen'>{text}</p>
    </div>
  </>
};

const RectangleUp = ({number, text}) => {
  return <>
    <div className='flex flex-col items-center relative'>
      <Image 
        src={diagramUp}
      />
      <div className='h-[50px] w-[159px] bg-deepGreen absolute bottom-[3%] flex justify-center items-center'>
        <p className="text-white font-bold text-3xl">{number}</p>
      </div>
      <p className='absolute bottom-[40%] text-center w-[150px] font-bold text-deepGreen'>{text}</p>
    </div>
  </>
};

const Circle = () => {
  return (
    <div className='bg-deepGreen h-[30px] w-[30px] rounded-full flex justify-center items-center'>
      <div className='bg-white h-[12px] w-[12px] rounded-full'></div>
    </div>
  )
};

export default FinalixMiles