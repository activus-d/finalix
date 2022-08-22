import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export const Menu =()=>{
return(
  <ul className='block w-fit ss:flex gap-12 cursor-pointer '>
        <a href='/'>
          <li className='hover:border-b-2 '>Home</li>
        </a>
          <a href='/Services'>
        <li className='hover:border-b-2 '>Services</li>
        </a>
        <a href='/Experts'>
          <li className='hover:border-b-2 py-2 ss:p-0 '>Experts</li>
        </a>
        <a href='/Contact'>
          <li className='hover:border-b-2'>Contact</li>
        </a>
      </ul>
)
}


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <nav className='ss:flex py-7 justify-between items-center text-secPara text-secColor font-bold  w-full'>
      <div className='flex justify-between items-center'>
        <h3 className='text-mediumHead'>
          <a href="/">Finalix</a> 
        </h3>
        <div className='ss:hidden block '>
          {menuToggle 
            ? <AiOutlineClose color='white' size={27} onClick={()=> setMenuToggle(false)}/>
            : <AiOutlineMenu color='white' size={27} onClick={()=> setMenuToggle(true)}/>
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