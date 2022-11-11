import React from "react";
import Footer from "../Components/Layout/Footer";
import NavBar from "../Components/Layout/NavBar";
import volods from "../Images/volodslogo.png";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="h-auto bg-[#131313]">
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-[#94C0D9] text-2xl font-[quicksand] md:text-3xl">WE ARE</h1>
          <img src={volods} className="w-96 h-48" alt="logo" />
          <p className="text-lg p-5 text-white font-[quicksand] text-center  md:text-xl lg:pl-28 lg:pr-28 xl:pl-72 xl:pr-72">
            Not very long time ago when our founders wanted to hire developers
            for their startup project, they used many freelancing platforms to
            hire these developers, but little did they know that they were
            playing Russian roulette and will end up hiring the wrong person
            that will potentially ruin their entire project. After that the
            founders pledge that they will create such exclusive community of
            developers so that no other startup has to endure this pain. That's
            how Volods came into existence.
          </p>

          <h1 className="text-[#94C0D9] text-2xl mt-10 font-[quicksand] md:text-4xl">
            "I" am because "WE" are
          </h1>
          <p className="text-lg p-5 text-white font-[quicksand] text-center   md:text-xl lg:pl-28 lg:pr-28 xl:pl-72 xl:pr-72">
            As a global collective community of developers and entrepreneurs, we
            love to build and solve problems. Our self-driven diverse cultured
            team that spans globally is unified by technology.
          </p>

          <h1 className="text-[#94C0D9] text-2xl mt-10 font-[quicksand] md:text-4xl">
            Values we live by
          </h1>
          <p className="text-md mt-4 text-white font-[quicksand] text-center  md:text-xl">
            Justice for all - Both Clients & Developers
          </p>
          <p className="text-md mt-4 text-white font-[quicksand] text-center  md:text-xl">
            Restoring faith in Remote work
          </p>
          <p className="text-md mt-4 text-white font-[quicksand] text-center  md:text-xl">
            Honesty & Transparency{" "}
          </p>
          <p className="text-md mt-4 text-white font-[quicksand] text-center  md:text-xl">
            Ownership & Trust
          </p>
          <h1 className="text-[#94C0D9] text-2xl mt-14 font-[quicksand] md:text-4xl">
            Our Lead
          </h1>

          <h1 className="text-[#94C0D9] text-2xl mt-10 font-[quicksand] md:text-4xl">
            Work for us
          </h1>
          <p className="text-md p-3 text-white font-[quicksand] text-center  md:text-xl">
            Jump into our Rocketship and let's explore together
          </p>
          <h1 className="text-[#94C0D9] text-2xl mt-5 font-[quicksand]">
            Open Application
          </h1>
          <p className="text-md p-3 text-white font-[quicksand] text-center  md:text-xl lg:pl-28 lg:pr-28 xl:pl-72 xl:pr-72">
            If you think of work as more of a lifestyle than a job, if you want
            to be surrounded by like-minded people, and if you think you can get
            sh*t done, we want to hear from you. Volods will always be “open
            application.”
          </p>
          <p className="text-md p-3 text-white font-[quicksand] text-center  md:text-xl lg:pl-28 lg:pr-28 xl:pl-72 xl:pr-72">
            We’re here to change the world of startups and developers. You’ll be
            a part of a dedicated team that truly prioritizes transparency,
            trust, customer satisfaction, and product excellence.
          </p>
          <p className="text-md p-3 text-white font-[quicksand] text-center md:text-xl lg:pl-28 lg:pr-28 xl:pl-72 xl:pr-72">
            Leave us your CV, tell us why you’re the best at what you do, how
            you’ll fit into Volods, and what you want to accomplish. We look
            forward to hearing from you! :) 
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
