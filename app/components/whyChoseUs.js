import React from 'react'
import Image from 'next/image'
import { BtnTitle } from './'
import { whyChoseUs } from '../data'

const WhyChoseUs = () => {
  return (
    <div className='py-12'>
        <div className="container flex justify-center items-center flex-col">
          <BtnTitle>Why Chose Us</BtnTitle>
          <div className='text-center'>
          <h2 className="h2 mb-12 font-bold">Why Chose Aspire Packaging?</h2>
          <p className='text-gray-600 md:w-[70%] mx-auto'>At Aspire Packaging, we understand that packaging plays a vital role in branding, product protection, and customer experience. Our dedication to quality, customization, and sustainability makes us the preferred choice for businesses looking for reliable and innovative packaging solutions</p>
          </div>
          <div className='flex justify-center items-center gap-8 flex-wrap mt-12'>
            {whyChoseUs.map((data) => (
              <div key={data.id} className='border h-[20rem] md:w-[23rem] border-gray-300 rounded-xl'>
                <div className="image w-full h-[12rem] bg-gray-100 flex justify-center items-center mx-auto py-4">
                  <Image className='w-[50%]' src={data.image} alt={data.title} width={200} height={200}/>
                </div>
                <div className='text-center px-6 md:px-8'>
                <h3 className="h5 py-2 font-semibold">{data.title}</h3>
                <p className='text-gray-700'>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default WhyChoseUs