import React from 'react'
import code from '../assets/code.jpg'
import { checklistItems } from '../Constants'
import { CheckCircle } from 'lucide-react'

const WorkFlow = () => {
  return (
    <div mt-20>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            Accelerate your 
            <span className='bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text'>
            {" "}coding workflow.
            </span>
        </h2>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src={code} alt="Code"/>
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index) => (
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 justify-center p-2 items-center rounded-full'>
                            <CheckCircle />
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow
