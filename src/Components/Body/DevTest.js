import React, { useState, useEffect } from "react";
import cvrocket from "../../Images/rocketcv2 1.png";
import mobtestdev from "../../Images/mobtestdev.png";
import testdev from "../../Images/testdevs.png";
import { Link } from "react-router-dom";

export default function DevTest() {
  const [deskview, setDeskview] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

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
            <h1 className="text-[#94c0d9] font-[quicksand] mb-10 font-bold text-xl text-center md:pr-20 md:pl-20 lg:pr-48 lg:pl-48 xl:pr-[400px] xl:pl-[400px] 2xl:pr-[600px] 2xl:pl-[600px]">
              Because a GREAT RESUME does NOT always mean GREAT DEVELOPER
            </h1>
            <h1 className="text-white font-[quicksand] mb-10 font-bold text-xl text-center md:pr-20 md:pl-20 lg:pr-48 lg:pl-48 xl:pr-[400px] xl:pl-[400px] 2xl:pr-[600px] 2xl:pl-[600px]">
              that’s why we have a four step process to onboard developers
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
            {!deskview && <img src={mobtestdev} alt="test" />}
            {deskview && <img src={testdev} alt="test" />}
          </div>
          <h1 className="text-white font-[quicksand] mt-28 mb-5 font-bold text-xl text-center md:pr-20 md:pl-20 lg:pr-48 lg:pl-48 xl:pr-[400px] xl:pl-[400px] 2xl:pr-[600px] 2xl:pl-[600px]">
            Speed is what Volods takes pride in — it typically takes only 24-72
            hours for our clients to receive a short list of top candidates.
          </h1>

          <h1 className="text-[#94c0d9] font-[quicksand] mt-28 mb-10 p-5 font-bold text-xl text-center md:text-2xl md:pr-20 md:pl-20 lg:pr-48 lg:pl-48 xl:pr-[400px] xl:pl-[400px] 2xl:pr-[600px] 2xl:pl-[600px]">
            Service so good, we will restore your faith in remote work
          </h1>

          <div className="flex justify-center mt-10">
            <Link to="">
              <button className="text-white w-44 font-[quicksand] h-12  z-20 rounded-md border-2 border-[#94C0D9] hover:bg-[#94C0D9]">
                restore my faith
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
