import React, {useState} from 'react'

const Portfolio = ({title,content}) => {
  const [portfolioColor, setPortfolioColor]  = useState({lightGreen: '#528276', lightBrown: '#ab6f6f', midGray: '#6e706e', deepCyan: '#8d8642'})
  const [portfolioOptions] = useState({title: 'Portfolio & Assets Management', options: ['Risk management', 'Structured product', 'Portfolio Management', 'Investment Accounting']})
// 
  return (
    <section className='hidden ss:flex ss:justify-around ss:gap-x-20 lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-7'>
      <SinglePortfolioOne 
        bgColor={portfolioColor.lightGreen}
        options={portfolioOptions.options}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioTwo 
        bgColor={portfolioColor.lightBrown}
        options={portfolioOptions.options}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioOne 
        bgColor={portfolioColor.midGray}
        options={portfolioOptions.options}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioTwo 
        bgColor={portfolioColor.deepCyan}
        options={portfolioOptions.options}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      
    </section>
  )
}

const SinglePortfolioOne = ({bgColor, option1, option2, option3, option4, option5, title}) => {
  return (
    <div className='bg-deepGreen rounded-md shadow-portfolio mb-16 relative overflow-hidden'>
      <div className='py-4 bg-white rounded-t-md ss:px-4'>
        <h3 className='font-bold text-center text-[18px]' style={{color: bgColor}}>{title}</h3>
      </div>
      <div className={`p-3 rounded-b-md`} style={{backgroundColor: bgColor}}>
        <p className=' text-white font-medium text-center mb-4'>{option1}</p>
        <p className=' text-white font-medium text-center mb-4'>{option2}</p>
        <p className=' text-white font-medium text-center mb-4'>{option3}</p>
        <p className=' text-white font-medium text-center mb-4'>{option4}</p>
        <p className=' text-white font-medium text-center mb-4'>{option5}</p>
      </div>
      <div className='w-60px h-60px rounded-full flex pl-6 pt-2 absolute bottom-[-10%] right-[-10%]' style={{backgroundColor: 'black'}}>
        <span className='text-4xl font-bold text-white'>></span>
      </div>
    </div>
  )
}
const SinglePortfolioTwo = ({bgColor, option1, option2, option3, option4, option5, title}) => {
  return (
    <div className='bg-deepGreen rounded-md shadow-portfolio mb-16 relative overflow-hidden hidden lg:block'>
      <div className='py-4 bg-white rounded-t-md '>
        <h3 className='font-bold text-center text-[18px]' style={{color: bgColor}}>Portfolio & Assets Management</h3>
      </div>
      <div className={`p-3 rounded-b-md`} style={{backgroundColor: bgColor}}>
        <p className=' text-white font-medium text-center mb-4'>{option1}</p>
        <p className=' text-white font-medium text-center mb-4'>{option2}</p>
        <p className=' text-white font-medium text-center mb-4'>{option3}</p>
        <p className=' text-white font-medium text-center mb-4'>{option4}</p>
        <p className=' text-white font-medium text-center mb-4'>{option5}</p>
      </div>
      <div className='w-60px h-60px rounded-full flex pl-6 pt-2 absolute bottom-[-10%] right-[-10%]' style={{backgroundColor: 'black'}}>
        <span className='text-4xl font-bold text-white'>></span>
      </div>
    </div>
  )
}

export default Portfolio