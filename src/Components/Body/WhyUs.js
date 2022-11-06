import React from 'react'
import dev from '../../Images/Volods dev.png'
import replacement from '../../Images/replacment2.png'
import clock from '../../Images/clock 1.png'

export default function WhyUs() {
  return (
    <>
        <div className='h-auto bg-[#131313]'>
            <h1 className='text-white font-[quicksand] font-bold flex justify-center text-4xl mb-10 z-20'>Why Us?</h1>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center'>
                <span className='mt-5 mb-7 2xl:mt-0 2xl:mb-0'>
                    <img className='w-40 h-40 hover:animate-wiggle' src={clock} alt='clock'/>
                    <h3 className='text-white font-[quicksand]  z-20 lg:text-xl'>24-36 hour match</h3>
                </span>

                <span className='mt-5 mb-7 2xl:mt-0 2xl:mb-0'>
                    <img className='w-40 h-40 hover:animate-wiggle' src={dev} alt='developer'/>
                    <h3 className='text-white font-[quicksand] z-20 lg:text-xl'>Highly vetted devs</h3>
                </span>

                <span className='mt-5 mb-7 2xl:mt-0 2xl:mb-0'>
                    <img className='w-48 h-40 hover:animate-wiggle' src={replacement} alt='replacement'/>
                    <h3 className='text-white font-[quicksand]    z-20 text-center lg:text-xl'>Zero risk replacement</h3>
                    <h3 className='text-white font-[quicksand] z-20 text-center lg:text-xl'>guarantee</h3>
                </span>
            </div>
        </div>
    </>
  )
}
