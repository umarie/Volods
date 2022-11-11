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

      <div className="h-auto bg-[#131313] flex flex-col justify-center items-center md:grid md:grid-cols-4 md:pl-[10%]">
        {services.map((item) => {
          return <ServiceItem logo={item.logo} name={item.name} />;
        })}
      </div>

      <Footer />
    </>
  );
}
