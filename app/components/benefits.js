import React from 'react'
import Image from 'next/image'
import { benifits } from '../data'
const Benefits = () => {
  return (
    <div className='relative md:-top-16'>
    <div className="container">
      <div className="grid rounded-xl lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-gray-100 border border-gray-300  shadow-lg">
        {benifits.map((benifit) => (
          <div key={benifit.id} className={`${benifit.id === "1" ? " border-t md:border-l border-black/20" : " border-none"} py-3 px-4 ${benifit.colored ? "bg-[#015379] rounded-br-xl rounded-tr-xl text-white/90" : ''}`}>
            <div className=' border border-gray-500 w-[80px] h-[80px] rounded-full flex justify-center items-center'>
              <Image src={benifit.icon} alt={'icons'} width={60} height={60}/>
            </div>
            <div>
            <h1 className='h3 lg:text-[2.2rem] font-semibold'>{benifit.title}</h1>
            <p>{benifit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Benefits