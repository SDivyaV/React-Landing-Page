import React from 'react'
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        VirtualR build tools 
        <span className='bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text'>
          {" "}
          for developers
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Step into a new dimension with our cutting-edge virtual reality platform. 
        Whether you're exploring immersive worlds, engaging in interactive gaming,
        or diving into virtual learning, our website offers an unparalleled VR 
        experience.
      </p>
      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-pink-500 to-purple-800 py-3 px-4 mx-3 rounded-md'>
          Start for free
        </a>
        <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
          Documentation
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/2 border-pink-700 shadow-purple-400 mx-2 my-4'>
          <source src={video3} type='video/mp4' />
          Your browser does not support the video tag
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border-pink-700 shadow-purple-400 mx-2 my-4'>
          <source src={video2} type='video/mp4' />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  )
}

export default HeroSection
