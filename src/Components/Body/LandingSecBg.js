import React,{useState, useEffect} from 'react'
import planet1 from '../../Images/planet1.png'
import planet2 from '../../Images/planet2.png'
import planet3 from '../../Images/planet3.png'
import planet4 from '../../Images/planet4.png'
import gradientpic from '../../Images/gradient.png'
import rocket from '../../Images/rocket.png'

export default function LandingSecBg(props) {

    const [gradient, setGradient] = useState(true);

    useEffect(() => {
        showGradient();
      }, [])
      
    
      const showGradient = () => {
        if (window.innerWidth <= 1150) {
          setGradient(false);
        } else {
          setGradient(true);
        }
      };
    
      window.addEventListener("resize", showGradient)

  return (
    <>
    <div className='h-[800px] bg-[#131313]'>
        <img src={planet1} className="fixed left-[4%] top-[100px] animate-spin opacity-60 w-10 h-10" alt='planet'/>
        <img src={planet2} className="fixed left-[20%] top-[500px]  animate-spin opacity-60 w-14 h-14 xl:left-[10%]" alt='planet'/>
        <img src={planet3} className="fixed left-[55%] top-[300px] animate-spin opacity-30 w-11 h-11 xl:left-96" alt='planet'/>
        <img src={planet4} className="fixed left-[60%] top-[600px] animate-spin opacity-60 w-8 h-8 xl:left-[90%]" alt='planet'/>
        {gradient && <img src={gradientpic} className='w-[40%] h-[70%] animate-slidedown max-w-2xl max-h-[600px] absolute left-[50%] top-[15%] z-1' alt='gradient'/>}
        {gradient && <img src={rocket} className='w-[15%] h-[40%] max-w-2xl max-h-[500px] absolute rotate-12 left-[70%] z-1' alt='gradient'/>}
        

        {gradient && <div className='relative right-[12%] bottom-48 2xl:bottom-[300px] 3xl:bottom-[500px]'>
            <div className='flex flex-col justify-center items-center p-72 2xl:p-[400px] 3xl:p-[600px]'>
            {props.children}
            </div>
        </div>}

        {!gradient && <div className='flex flex-col justify-center items-center pt-20'>
            {props.children}
        </div>}
    </div>
    </>
  )
}
