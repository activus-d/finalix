import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Menu =()=>{
return(
  <ul className='block w-fit ss:flex gap-12 cursor-pointer '>
        <a href='/'>
          <li className='hover:border-b-2 pb-2'>Home</li>
        </a>
          <Link href='/Services'>
        <li className=' border-b-2 hover:border-b-2 '>Services</li>
        </Link>
        <Link href='/Experts'>
          <li className='hover:border-b-2 pt-2'>Experts</li>
        </Link>
        <Link href='/Contact'>
          <li className='hover:border-b-2 pt-2'>Contact</li>
        </Link>
      </ul>
)
}

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <nav className='ss:flex py-7 justify-between items-center text-secPara text-secColor font-bold  w-full px-6 ss:px-0 ss:w-5/6 mx-auto'>
      <div className='flex justify-between items-center'>
        <h3 className='text-mediumHead'>
          <a href="/">Finalix</a> 
        </h3>
        <div className='ss:hidden block '>
          {menuToggle 
            ? <AiOutlineClose color='#08352A' size={27} onClick={()=> setMenuToggle(false)}/>
            : <AiOutlineMenu color='#08352A' size={27} onClick={()=> setMenuToggle(true)}/>
          }
        </div>
      </div>
      <div className='hidden ss:block'>
        <Menu/>
      </div>
      {menuToggle &&
        <div className='ss:hidden  pr-12  py-4 min-w-[250px]'>
  
        <Menu/>
      </div>
}
    </nav>
  )
}

export default Navbar