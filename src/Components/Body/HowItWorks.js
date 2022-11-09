import React from 'react'
import blue from '../../Images/portalBlue.png'
import red from '../../Images/portalRed.png'
import Carousal from './Carousal'

export default function HowItWorks() {
  return (
    <>
    <div className='h-auto bg-[#131313] pt-32'>
            <h1 className='text-white font-[quicksand] font-bold flex justify-center text-4xl mb-10 z-20'>How it Works?</h1>
            <h1 className='text-white font-[quicksand] font-bold flex justify-center text-xl z-20'>Find your Developers</h1>
            <div className='flex flex-col justify-center font-bold items-center lg:flex-row lg:justify-evenly lg:items-center'>
                <div>
                    <img src={blue} className='w-44 h-[80vw] max-h-[700px] rotate-90 lg:rotate-0 lg:h-[40vw]' alt='portal'/>
                </div>
                <div>
                  <Carousal/>
                </div>
                <div>
                    <img src={red} className='w-44 h-[60vw] max-h-[600px] rotate-90 lg:rotate-0 lg:h-[30vw]' alt='portal'/>
                </div>
            </div>
        </div>
    </>
  )
}
