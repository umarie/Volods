import React from "react";
import web from "../Images/web.png";
import app from "../Images/mobiledev.png";
import uiux from "../Images/uiux.png";
import digimarketing from "../Images/digitalmarketing.png";
import seo from "../Images/seo.png";
import testing from "../Images/testing.png";
import projectmanagement from "../Images/projectmanagement.png";
import contentwriting from "../Images/contentwriting.png";
import NavBar from "../Components/Layout/NavBar";
import Footer from "../Components/Layout/Footer";
import ServiceItem from "../Components/Body/ServiceItem";
import {Link} from 'react-router-dom'

const services = [
  {
    logo: web,
    name: "Web Development",
  },
  {
    logo: app,
    name: "App Development",
  },
  {
    logo: uiux,
    name: "UI/UX",
  },
  {
    logo: digimarketing,
    name: "Digital Marketing",
  },
  {
    logo: seo,
    name: "SEO",
  },
  {
    logo: testing,
    name: "Quality Assurance",
  },
  {
    logo: projectmanagement,
    name: "Project Management",
  },
  {
    logo: contentwriting,
    name: "Content Writing",
  },
];

export default function Services() {
  return (
    <>
      <NavBar />
      <div className="bg-[#131313] flex flex-col justify-center items-center">
      <h1 className="text-[#94c0d9] text-2xl mt-20 font-[quicksand] md:text-4xl md:mt-32">Build your next big thing with us!</h1>
      <h3 className="text-white text-lg text-center p-5 mt-10 mb-10 font-[quicksand] md:text-xl">From an idea to an unforgettable and measurable digital product & experience.</h3>
      <Link to='/hiredevs'>
            <button className='text-white w-52 mt-3 mb-14 font-[quicksand] h-12  z-20 rounded-md border-2 border-[#94C0D9] hover:bg-[#94C0D9]'>Book a Project</button>
      </Link>
      <h3 className="text-[#94c0d9] text-2xl  text-center mt-10 mb-10 font-[quicksand] md:text-3xl">Services</h3>
      
      </div>
      <div className="h-auto bg-[#131313] flex flex-col justify-center items-center md:grid md:grid-cols-4 md:pl-[10%]">
        {services.map((item) => {
          return <ServiceItem logo={item.logo} name={item.name} />;
        })}
      </div>
      
      
          
      <Footer />
    </>
  );
}
