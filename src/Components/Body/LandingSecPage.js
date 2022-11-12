import React from 'react'
import LandingSecBg from './LandingSecBg'

export default function LandingSecPage() {
  return (
    <>
    <LandingSecBg>
        <h1 className='text-[#94C0D9] text-2xl mt-20 z-10  text-center animate-movement font-[quicksand] xl:text-3xl'>Hire Candidates to build your next</h1>
        <h1 className='text-[#94C0D9] text-4xl z-10 font-bold font-[quicksand] animate-movement xl:text-5xl'>BIG THING!</h1>
        <p className='text-white text-center text-xl p-10 z-10 font-[quicksand] xl:text-2xl'>Whether you want to add a member to your existing tech team or build a standalone project from scratch, Volods can help you find the best remote developers for the job and make sure the project is successfully delivered on time.</p>
        
        <button className='text-white w-32 h-12 z-20 animate-slidedown rounded-md border-2 border-[#94C0D9] hover:bg-[#94C0D9]'>Hire now!</button>
  
    </LandingSecBg>
    </>
  )
}
