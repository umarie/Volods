import React,{useState, useEffect} from "react";
import cvrocket from '../../Images/rocketcv2 1.png'
import mobtestdev from '../../Images/mobtestdev.png'
import testdev from '../../Images/testdevs.png'

export default function DevTest() {

    const [deskview, setDeskview] = useState(true);  
  
    useEffect(() => {
      showButton();
    }, [])
    
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setDeskview(false);
      } else {
        setDeskview(true);
      }
    };
  
    window.addEventListener("resize", showButton);


  return (
    <>
      <div className="h-auto bg-[#131313] pt-32">
       
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white font-[quicksand] mb-10 font-bold text-xl text-center md:pr-20 md:pl-20 lg:pr-48 lg:pl-48 xl:pr-[400px] xl:pl-[400px] 2xl:pr-[600px] 2xl:pl-[600px]">
              Because a GREAT RESUME does NOT always mean GREAT DEVELOPER that’s
              why we have a four step process to onboard developers
            </h1>
          </div>
          <div>
            <img
              src={cvrocket}
              className="w-20 h-52 max-h-[600px] mb-10 lg:w-36 lg:h-72"
              alt="portal"
            />
          </div>
          <div>
            {!deskview && <img src={mobtestdev} alt='test'/>}
            {deskview && <img src={testdev} alt='test'/>}
          </div>
          
        </div>
      </div>
    </>
  );
}
