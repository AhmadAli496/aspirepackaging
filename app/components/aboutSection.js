// app/about/page.jsx or components/AboutUs.jsx
import Image from 'next/image';
import { BtnTitle } from '.';
import React from "react";
import Link from 'next/link';

const AboutSection = () => {
  return (
      <div className="py-12 lg:py-8 bg-[#f8f8f8]">
        <div className='container flex  flex-col items-center justify-center'>
          <BtnTitle className={''}>About Us</BtnTitle>
      <h2 className="h2 font-bold text-center">Who We Are</h2>
            <div className="mt-1 h-1 w-28 mb-12 bg-blue-600 mx-auto"></div>
      <p className="text-gray-500 text-center mb-8 lg:w-[80%] text-lg">
        At Aspire Packaging, we are committed to redefining the standards of innovative, sustainable, and purpose-driven packaging solutions. With a passion for quality and a focus on environmental responsibility, we design and deliver packaging that not only protects products but also elevates brand presence.
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
            Our mission is to empower businesses by providing packaging solutions that combine functionality, and brand impact. We are dedicated to reducing environmental footprints through the use of eco-conscious materials. At Aspire Packaging, we believe that packaging should do more than contain—it should communicate, connect, and contribute to a better future.
          </p>
          <p className="text-gray-700 mb-6">
            We envision a world where packaging is not a burden to the environment, but a vehicle for progress and innovation. Aspire Packaging aims to lead the transformation of the packaging industry through continuous improvement, and a deep-rooted commitment to sustainability. Our vision is to become a global standard in packaging excellence—where our designs inspire trust, our processes support the planet.
          </p>
          <button className="mt-2 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 font-semibold hover:bg-gray-100 transition">
            <Link href="/about">
            Learn More
            </Link>
          </button>
            <button className='mt-4 border border-gray-300 py-2 px-3 rounded-lg shadow-md lg:ml-8 '>
            <a href="tel:+923072262269" className="text-gray-800 hover:text-blue-600">
            Call Us: +92 307 2262269
            </a>
            </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutSection