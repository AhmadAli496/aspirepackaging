'use client'
import {useState} from 'react'

import Image from 'next/image'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <div className={'fixed top-0 right-0 left-0 shadow-md z-40 bg-white'}>
      <header className="header flex justify-between max-w-[1440px] px-4 md:px-[1rem] mx-auto py-[1rem]">
        <div>
          <Image src="/logo.png" alt='This is the logo for my website' className={'w-[240px] md:w-[300px]'} width={300} height={100} />
        </div>
        <div className="navlink">
          <nav className="navbar_links gap-6 hidden md:flex">
            <ul className="link items-center gap-8 flex flex-col md:flex-row text-2xl md:text-[16px] font-semibold">
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Clients</li>
              <li>Contact Us</li>
            </ul>
            <div className="btn">
              <button className='bg-blue-600 text-white py-3 rounded-sm px-4 text-[15px]'>E-Brochure</button>
            </div>
          </nav>
          <img onClick={handleClick} src={'/menu.png'} alt={'hamburger menu icon'} width={30} height={30} />
          {open && (
              <div className={'h-screen bg-white/50 shadow-2xl backdrop-blur-2xl absolute top-0 left-20 right-0 z-50 lg:hidden'}>
              <nav className="navbar_links  w-full gap-6 flex">
                <Image src="/logo.png" alt='This is the logo for my website' className={'w-[300px]'} width={300} height={100} />
                <ul className="link items-center gap-8 flex text-center w-full flex-col text-2xl md:text-[16px] font-semibold">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Clients</li>
                  <li>Contact Us</li>
                </ul>
              </nav>
                <div className="btn mx-auto flex w-full">
                  <button className='bg-green-700 text-white py-2 px-4 text-[15px]'>E-Brochure</button>
                </div>
              </div>
          )}
        </div>
        </header>
    </div>
  )
}

export default Navbar
