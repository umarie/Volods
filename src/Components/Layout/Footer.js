import React from 'react'
import volodslogo from '../../Images/volodslogo.png'
import email from '../../Images/email.png'
import insta from '../../Images/instagram.png'
import fb from '../../Images/facebook.png'
import linkedin from '../../Images/linkedin.png'
import instaplatform from '../../Images/instaPlatform.png'
import fbplatform from '../../Images/facrbookplatform.png'
import linkedplatform from '../../Images/linkedplatform.png'

export default function Footer() {
  return (
    <>
    <div className='h-auto bg-[#131313]'>
            <div className='flex flex-col justify-center items-center'>
                
                <div className='lg:flex lg:justify-center lg:items-center'>

                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
                <img src={volodslogo} className='mt-20 w-48 h-24 lg:w-72 lg:h-36' alt='logo'/>
                <span className='flex mb-10'>
                    <img src={email} className='w-7 h-7 mr-2' alt='email'/>
                    <p className='text-white ml-2 font-[quicksand]'>support@volods.com</p>
                </span>
                </div>
                
                <span className='flex justify-center items-center lg:ml-20 lg:mt-20'>
                    <span>
                        <img src={insta} className='w-8 h-8 ml-3 hover:animate-bounce' alt='socialmedia'/>
                        <img src={instaplatform} className='w-14 h-12 mb-5 lg:mb-0' alt='socialmedia'/>
                    </span>

                    <span>
                        <img src={fb} className='w-8 h-8 ml-3 hover:animate-bounce' alt='socialmedia'/>
                        <img src={fbplatform} className='w-14 h-12 mb-5  lg:mb-0 ' alt='socialmedia'/>
                    </span>

                    <span>
                        <img src={linkedin} className='w-8 h-8 ml-3 hover:animate-bounce' alt='socialmedia'/>
                        <img src={linkedplatform} className='w-14 h-12 mb-5 lg:mb-0' alt='socialmedia'/>
                    </span>
                </span>
                </div>


            <span className='flex flex-col items-center lg:flex-row mb-10'>
                <p className='text-white font-[quicksand] mb-3 lg:ml-8'>Privacy Policy</p>
                <p className='text-white font-[quicksand] mb-3 lg:ml-8'>Terms & conditions</p>
                <p className='text-white font-[quicksand] mb-3 lg:ml-8'>About us</p>
                <p className='text-white font-[quicksand] mb-3 lg:ml-8'>Careers</p>
                <p className='text-white font-[quicksand] mb-5 lg:ml-8'>FAQ's</p>
            </span>
            </div>
                <p className='text-white text-[10px] flex justify-center font-[quicksand]'>Volods.com© 2022</p>
        </div>
    </>
  )
}