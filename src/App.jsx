import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow'
import Price from './Components/Price'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Price />
      <Testimonial />
      <Footer />
      </div>
    </div>
  )
}

export default App
