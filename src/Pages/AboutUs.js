import React from "react";
import Footer from "../Components/Layout/Footer";
import NavBar from "../Components/Layout/NavBar";
import volods from "../Images/volodslogo.png";
import person1 from "../Images/person1.png";
import person2 from "../Images/person2.png";
import person3 from "../Images/person3.png";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="h-auto bg-[#131313]">
        <div className="flex flex-col justify-center items-center pt-24">
          <h1 className="text-[#94C0D9] text-2xl font-[quicksand] md:text-3xl">
            WE ARE
          </h1>
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
            Leaders
          </h1>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-16 md:flex-row">
            <div className="mt-10 md:mt-0 ">
              <img src={person2} className='w-28 ml-28 md:mt-3 hover:opacity-30 md:ml-12  ' alt="robot" />
              <h1 className="text-[#94c0d9] font-[quicksand] text-center text-xl md:mt-3">Taimur Khan</h1>
              <h2 className="text-white font-[quicksand] text-center">Co-founder - CEO </h2>
              <h3 className="text-white font-[quicksand] text-center">// the man behind the space & rocket theory </h3>
            </div>
            <div className="mt-10 md:mt-0 md:ml-20">
              <img src={person1} className='w-28 ml-32 hover:opacity-30 md:ml-16' alt="robot" />
              <h1 className="text-[#94c0d9] font-[quicksand] text-center text-xl">Umair Farooq</h1>
              <h2 className="text-white font-[quicksand] text-center">Co-founder - CTO</h2>
              <h3 className="text-white font-[quicksand] text-center">// the guardian of the code and rocket technology. </h3>

            </div>
            <div className="mt-10 md:mt-0 md:ml-20 ">
              <img src={person3} className='w-28 ml-36 hover:opacity-30 md:ml-16' alt="robot" />
              <h1 className="text-[#94c0d9] font-[quicksand] text-center text-xl">Harris Aamir</h1>
              <h2 className="text-white font-[quicksand] text-center">Co-founder - COO</h2>
              <h3 className="text-white font-[quicksand] text-center">// handles the operations. which kind? the galactic ones. </h3>

            </div>
          </div>

          <h1 className="text-[#94C0D9] text-2xl mt-16 font-[quicksand] md:text-4xl">
            Work with us
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5tNjh6RwNK6ZMHYq2JQuLxQOG_UygEDqM1O93sk2lYVCwA/viewform"
          rel="noreferrer"
          target="_blank">
            <button className='text-white w-52 mt-8 mb-14 font-[quicksand] h-12  z-20 rounded-md border-2 border-[#94C0D9] hover:bg-[#94C0D9]'>Jump into our Rocketship!</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
