import React, {useState} from 'react'

const Portfolio = ({title,content}) => {
  const [portfolioColor, setPortfolioColor]  = useState({lightGreen: '#528276', lightBrown: '#ab6f6f', midGray: '#6e706e', deepCyan: '#8d8642'})
  const [isOptionShow, setIsOptionShow] = useState(false)

  const showOptions = (e) => {
    e.currentTarget.classList.add('portfolioShow') //check globas css for the class 'portfolioShow'
  }
  const hideOptions = (e) => {
    e.currentTarget.classList.remove('portfolioShow') //check globas css for the class 'portfolioShow'
  }

  return (
    <section className='hidden ss:flex ss:justify-around ss:gap-x-20 lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-7'>
      <SinglePortfolioOne 
        bgColor={portfolioColor.lightGreen}
        showOptions={showOptions}
        isOptionShow={isOptionShow}
        hideOptions={hideOptions}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioTwo 
        bgColor={portfolioColor.lightBrown}
        showOptions={showOptions}
        isOptionShow={isOptionShow}
        hideOptions={hideOptions}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioOne 
        bgColor={portfolioColor.midGray}
        showOptions={showOptions}
        isOptionShow={isOptionShow}
        hideOptions={hideOptions}
        title={'Portfolio & Assets Management'}
        option1={'Risk Management'}
        option2={'Structured Products'}
        option3={'Portfolio Management'}
        option4={'Investment Accounting'}
        option5={'Client Tax Reporting Services'}
      />
      <SinglePortfolioTwo 
        bgColor={portfolioColor.deepCyan}
        showOptions={showOptions}
        isOptionShow={isOptionShow}
        hideOptions={hideOptions}
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

const SinglePortfolioOne = ({bgColor, option1, option2, option3, option4, option5, title, showOptions, isOptionShow, hideOptions}) => {
  return (
    <div className='bg-deepGreen rounded-md h-250px shadow-portfolio mb-16 relative overflow-hidden flex flex-col' onMouseOver={(e) => showOptions(e)} onMouseLeave={(e) => hideOptions(e)}>
      <h3 className=' w-full flex items-center py-4 px-4 bg-white rounded-t-md font-bold ss:px-4font-bold text-center text-[18px] basis-full' style={{color: bgColor}}>{title}</h3>
      <div className={`rounded-b-md overflow-hidden basis-0`} style={{backgroundColor: bgColor}}>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option1}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option2}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option3}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option4}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option5}</p>
      </div>
      <div className='w-60px h-60px rounded-full flex pl-6 pt-2 absolute bottom-[-10%] right-[-10%]' style={{backgroundColor: bgColor}}>
        <span className='text-4xl font-bold text-white'>></span>
      </div>
    </div>
  )
}
const SinglePortfolioTwo = ({bgColor, option1, option2, option3, option4, option5, title, showOptions, isOptionShow, hideOptions}) => {
  return (
    <div className='bg-deepGreen rounded-md h-250px shadow-portfolio mb-16 relative overflow-hidden hidden lg:flex flex flex-col' onMouseOver={(e) => showOptions(e)} onMouseLeave={(e) => hideOptions(e)}>
      <h3 className='flex items-center py-4 bg-white rounded-t-md font-bold text-center text-[18px] basis-full' style={{color: bgColor}}>{title}</h3>
      <div className={`rounded-b-md overflow-hidden basis-0`} style={{backgroundColor: bgColor}}>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option1}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option2}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option3}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option4}</p>
        <p className={`opacity-0 text-white font-medium text-center mb-4`}>{option5}</p>
      </div>
      <div className='w-60px h-60px rounded-full flex pl-6 pt-2 absolute bottom-[-10%] right-[-10%]' style={{backgroundColor: bgColor}}>
        <span className='text-4xl font-bold text-white'>></span>
      </div>
    </div>
  )
}

export default Portfolio