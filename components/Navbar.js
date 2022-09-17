import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='container lg:mx-8 sticky top-0 z-50 bg-violet-500 lg:bg-transparent'>
        <nav className=" flex justify-between">
          <h1 className='px-1 text-xl lg:px-16 py-6 font-semibold text-white lg:text-violet-700 md:px-8 md:text-6xl lg:text-2xl'>Hunting Coder</h1>
         <ul className=" hidden lg:flex px-16 py-8 space-x-11 justify-end">
          <Link href='/'>
          <li className='cursor-pointer hover:text-violet-700 hover:underline hover:underline-offset-8'>Home</li>
          </Link>
          <Link href='/blog'>
          <li className='cursor-pointer hover:text-violet-700 hover:underline hover:underline-offset-8'>Blog</li>
          </Link>
          <Link href='/about'>
          <li className='cursor-pointer hover:text-violet-700 hover:underline hover:underline-offset-8'>About</li>
          </Link>
          <Link href='/contact'>
          <li className='cursor-pointer hover:text-violet-700 hover:underline hover:underline-offset-8'>Contact US</li>
          </Link>
         </ul>
         {/* // mobile strok */}
          <div className="lg:hidden flex items-center px-1 py-2 md:px-8">
                <button className="outline-none mobile-menu-button">
                  <svg
                    className="w-6 h-6 md:w-20 md:h-20 text-white"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
          </div>
          {/* // mobile menu */}
            <div className="hidden mobile-menu">
                <ul className="">
                    <li className="block text-sm px-2 py-4 text-white bg-violet-400 font-semibold">Home</li>
                    <li className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Blog</li>
                    <li className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</li>
                    <li className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</li>
                </ul>
            </div>
      </nav>
    </div>
  )
}

export default Navbar;