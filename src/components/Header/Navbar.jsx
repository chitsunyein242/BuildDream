import { useState } from 'react'
import './Header.css'
import{ BiMenu } from 'react-icons/bi'

const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false);
  return (
    <div className="bg-gray-700 overflow-hidden w-full">
        <div className="max-w-7xl flex justify-between mx-auto items-center">
            <div>
        <h1 className="uppercase text-xl py-6 text-gray-700 font-bold logo">
            Builddream
        </h1>
      </div>
      <buttton onClick={() => setShowMenu(!showMenu)} className="flex text-white text-lg items-center mr-4 md:hidden bg-transparent boder-0">
        <BiMenu/>
        <span className="ml-1">
            MENU
        </span>
      </buttton>

      <div className={`fixed  md:static ${showMenu ? '' : 'hidden md:block'} bg-gray-700 md:bg-transparent w-full top-[164px] md:top-0 md:w-auto`}>
        <ul className="flex flex-col md:flex-row items-center">
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Home
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    About
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Services
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Project
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Pricing
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Blog
                </a>
            </li>
            <li>
                <a href=""className='px-3 py-6 block text-gray-400 uppercase'>
                    Contact
                </a>
            </li>
        </ul>
      </div>
        </div>
    </div>
  )
}

export default Navbar
