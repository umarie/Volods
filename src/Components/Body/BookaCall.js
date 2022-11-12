import React, { useState, useEffect } from "react";
import bookacall from "../../Images/bookacall.png";

export default function BookaCall() {
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    showButton();
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      {!logo && (
        <div className="md:bg-[#94c0d9] md:fixed md:bottom-[70px] md:left-[80%] md:z-20 md:w-36 md:h-12 md:animate-bounce md:rounded-xl hover:cursor-pointer hover:opacity-90 hover:scale-105">
          <a href="https://calendly.com/volods" rel="noreferrer"
                  target="_blank">
            <div className="flex justify-evenly items-center mt-3">
              <img src={bookacall} className="w-6 h-6" alt="bookacall" />
              <p className="font-[quicksand]">Book a call</p>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
