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
              <li>Our Products</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
            <div className="btn">
              <button className='bg-[#015379] border-2 border-[#015379] cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 text-white py-3 rounded-sm px-4 text-[15px]'>E-Brochure</button>
            </div>
          </nav>
          <Image onClick={handleClick} src={'/menu.png'} alt={'hamburger menu icon'} className={'lg:hidden'} width={30} height={30} />
          {open && (
              <div className={'h-screen bg-white shadow-2xl backdrop-blur-2xl absolute top-0 left-0 right-0 z-50 lg:hidden'}>
              <nav className="navbar_links  w-full gap-6 p-6 flex">
                <ul className="link  gap-12 flex w-full flex-col text-[18px] md:text-[16px] font-semibold">
                  <li className={'border-b pb-3 border-gray-400 p-4'}><Image src="/logo.png" alt='This is the logo for my website' className={'w-[270px]'} width={270} height={100} /></li>
                  <li className={''}>Home</li>
                  <li className={''}>About Us</li>
                  <li className={''}>Products</li>
                  <li className={''}>Clients</li>
                  <li className={''}>Contact Us</li>
                <div className="btn mx-auto flex w-full">
                  <button className='bg-blue-600 text-white py-4 rounded-sm w-full px-4 text-[15px]'>E-Brochure</button>
                </div>
                </ul>
              </nav>
              </div>
          )}
        </div>
        </header>
    </div>
  )
}

export default Navbar
