"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setMobileDropdownOpen(false);
  };

  return (
    <div className={"fixed top-0 right-0 left-0 shadow-md z-40 bg-white"}>
      <header className="header flex items-center justify-between max-w-[1440px] px-4 md:px-[1rem] mx-auto py-[1rem]">
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="This is the logo for my website"
              className={"w-[240px] md:w-[300px] md:h-[47px]"}
              width={300}
              height={50}
            />
          </Link>
        </div>

        <div className="navlink">
          {/* Desktop Nav */}
          <nav className="navbar_links gap-6 hidden md:flex">
            <ul className="link items-center gap-8 flex flex-col md:flex-row text-2xl md:text-[16px] font-semibold relative">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative group">
                <button className="hover:text-blue-600 cursor-pointer px-2 py-1">
                  Our Products
                </button>

                <div className="absolute top-full left-0 bg-white border shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50">
                  <ul className="py-2">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 hover:bg-[#015379] whitespace-nowrap hover:text-white"
                      >
                        <Link href={`/products/${product.slug}`}>
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href={"/faqs"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
            <div className="btn">
              <a
                href="/pdf/aspire_packaging.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#015379] border-2 border-[#015379] cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 text-white py-3 rounded-sm px-4 text-[15px]">
                  E-Brochure
                </button>
              </a>
            </div>
          </nav>

          {/* Hamburger Icon */}
          {open ? (
            <Image
              onClick={() => setOpen(false)}
              src={"/close.png"}
              alt="close icon"
              width={30}
              height={30}
            />
          ) : (
            <Image
              onClick={handleClick}
              src={"/menu.png"}
              alt={"hamburger menu icon"}
              className={"lg:hidden"}
              width={30}
              height={30}
            />
          )}

          {/* Mobile Menu */}
          {open && (
            <div
              className={
                "min-h-screen mt-[4rem] bg-white shadow-2xl backdrop-blur-2xl absolute top-0 left-0 right-0 z-50 lg:hidden"
              }
            >
              <nav className="navbar_links w-full gap-6 flex">
                <ul className="link mt-4 border-b gap-6 flex p-6 w-full flex-col text-[18px] font-semibold">
                  <li onClick={() => handleClose()}>
                    <Link href="/">Home</Link>
                  </li>
                  <li onClick={() => handleClose()}>
                    <Link href="/about">About Us</Link>
                  </li>

                  {/* Mobile Dropdown Toggle */}
                  <li>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full text-left hover:bg-blue-700 hover:text-white hover:p-3  "
                    >
                      Our Products
                    </button>
                    {mobileDropdownOpen && (
                     <ul className="py-2 border">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleClose()}
                        className="px-4 py-2 hover:bg-[#015379] whitespace-nowrap hover:text-white"
                      >
                        <Link href={`/products/${product.slug}`}>
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                    )}
                  </li>

                  <li onClick={() => setOpen(false)}>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/contact">Contact Us</Link>
                  </li>

                  <div className="btn mx-auto flex w-full">
                    <a
                      href="/pdf/aspire_packaging.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-600 text-white py-4 rounded-sm w-full px-4 text-[15px]">
                        E-Brochure
                      </button>
                    </a>
                  </div>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
