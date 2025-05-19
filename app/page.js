import React from 'react'
import {AboutSection, AutoScroller, Benefits, Hero, OurStory, Products, StatsSection, WhyChoseUs} from './components'
import ClientsCertificates from "@/app/components/clientsCertificates";

const Home = () => {
  return (
    <>
     <Hero /> 
     <Benefits />
     <Products />
     <OurStory />
     <AboutSection />
     <WhyChoseUs />
        {/*<AutoScroller />*/}
        <ClientsCertificates  title={'Our Great Clients'}/>
        <ClientsCertificates Certificate={true} title={'Our Certificates'}/>
    </>
  )
}

export default Home