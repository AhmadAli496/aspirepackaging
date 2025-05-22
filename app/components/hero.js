import React from 'react'
import VerticalAutoScroller from "./verticalScroller"
import Image from 'next/image'
import Link from 'next/link'
// import heroImage from "./public/package.jpg"

const Hero = () => {
  return (
    <div className='py-12 mt-12 md:mt-20 lg:mt-0'>
        <div className="container flex items-center justify-center flex-col gap-[3rem] md:gap-4 md:flex-row w-full">
            <div className="info md:w-[50%] lg:px-[2rem]">
                <h1 className="text-[2.2rem] mb-6 md:text-[3.5rem] font-bold">Custom packaging designed to fit your business</h1>
                <p className="text-lg lg:body-1 text-gray-700">Explore, design and order sustainable packaging your customers will love</p>
            <div className="btns mt-8">
             <Link href={"/contact"}><button className="btn bg-[#015379] cursor-pointer text-white/97 py-4 text-lg px-5 rounded-md font-bold">Get In Touch</button></Link> 
            </div>
            </div>
            <div className="image md:w-1/2 flex gap-4">
                {/*<Image src='/package.jpg' alt="my-Hero Image" width={600} height={400} />*/}
                <VerticalAutoScroller/>
                <VerticalAutoScroller toBottom={false} />
            </div>
        </div>
    </div>
  )
}

export default Hero