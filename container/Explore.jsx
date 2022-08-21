import React from 'react'
import { Portfolio, FiftyCom, ExploreCom } from '../components'
import Image from 'next/image'
import exploreBg from '../public/assets/images/exploreBg.svg'

const Explore = () => {
  return (
    <section className="bg-[url('../public/assets/images/exploreBg.svg')] bg-cover w-full pt-10 pb-16 px-28">
        <ExploreCom/>
        <Portfolio />
        <FiftyCom/>
    </section>
  )
}

export default Explore