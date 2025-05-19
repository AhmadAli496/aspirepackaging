// app/about/page.jsx or components/AboutUs.jsx
import Image from 'next/image';
import { BtnTitle } from '.';
import React from "react";

const AboutSection = () => {
  return (
      <div className="py-12 lg:py-8 bg-[#f8f8f8]">
        <div className='container flex  flex-col items-center justify-center'>
          <BtnTitle className={''}>About Us</BtnTitle>
      <h2 className="h2 font-bold text-center">Who We Are</h2>
            <div className="mt-1 h-1 w-28 mb-12 bg-blue-600 mx-auto"></div>
      <p className="text-gray-500 text-center mb-8 max-w-xl text-lg">
        As a Web Development Services We are Committed to Building Custom Web Solutions that Drive Business Success.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-8">
        <div className="w-full md:w-[38rem] lg:h-94 relative rounded-lg overflow-hidden">
          <Image
            src="/home/about-section.jpg" // Place your image in the public folder
            alt="Team working together"
            className="rounded-lg"
            priority
            width={700}
            height={700}
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            At our web development agency, we specialize in crafting bespoke online solutions tailored to elevate businesses toward their digital objectives. Committed to continuous evolution, we remain abreast of cutting-edge web technologies and trends, ensuring a constant delivery of unparalleled excellence.
          </p>
          <p className="text-gray-700 mb-6">
            Our ethos is rooted in equipping clients with the essential tools for triumph in the digital realm. Committed to continuous evolution, we remain abreast of cutting-edge web technologies and trends, ensuring a constant delivery of unparalleled excellence. We firmly believe in furnishing every business with a digital presence that authentically embodies their brand essence and effectively resonates with their target demographic.
          </p>
          <button className="mt-2 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutSection