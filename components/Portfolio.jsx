import React, {useState} from 'react'

const Portfolio = ({title,content}) => {
  const [portfolioColor, setPortfolioColor]  = useState({lightGreen: '#528276', lightBrown: '#ab6f6f', midGray: '#6e706e', deepCyan: '#8d8642'})
  return (
    <section className='px-6 sm:px-12 w-full py-16 h-full justify-center md:flex-nowrap flex gap-12 md:gap-20 flex-wrap'>
      <SinglePortfolio bgColor={portfolioColor.lightGreen} />
      <SinglePortfolio bgColor={portfolioColor.lightBrown}/>
      <SinglePortfolio bgColor={portfolioColor.midGray}/>
      <SinglePortfolio bgColor={portfolioColor.deepCyan}/>
    </section>
  )
}

const SinglePortfolio = ({bgColor, content}) => {
  return (
    <div className='bg-deepGreen w-[30rem] rounded-md shadow-portfolio mb-16 relative overflow-hidden'>
      <div className='py-4 bg-white rounded-t-md'>
        <h3 className='font-bold text-center text-[20px]' style={{color: bgColor}}>Portfolio & Assets Management</h3>
      </div>
      <div className={`p-3 rounded-b-md`} style={{backgroundColor: bgColor}}>
        <p className=' text-white font-medium text-center mb-4'>Risk Management</p>
        <p className=' text-white font-medium text-center mb-4'>Structured Products</p>
        <p className=' text-white font-medium text-center mb-4'>Portfolio Management</p>
        <p className=' text-white font-medium text-center mb-4'>Investment Accounting</p>
        <p className=' text-white font-medium text-center mb-4'>Client Tax Reporting Services</p>
      </div>
      <div className='w-60px h-60px rounded-full flex pl-6 pt-2 absolute bottom-[-5%] right-[-7%]' style={{backgroundColor: 'black'}}>
        <span className='text-5xl font-bold text-white'></span>
      </div>
    </div>
  )
}

export default Portfolio