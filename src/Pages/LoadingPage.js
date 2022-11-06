import React from 'react'
import loadinglogo from '../Images/loadinglogo.png'

export default function LoadingPage() {
  return (
    <>
    <div className='h-screen flex justify-center items-center bg-[#131313]'>
        <img className='w-64 h-64 animate-pulse' src={loadinglogo} alt='volodslogo'/>
    </div>
    </>
  )
}
