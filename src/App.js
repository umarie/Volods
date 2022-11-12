import React,{useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/Layout/NavBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoadingPage from './Pages/LoadingPage';
import LandingSecPage from './Components/Body/LandingSecPage';
import WhyUs from './Components/Body/WhyUs';
import HowItWorks from './Components/Body/HowItWorks';
import DevTest from './Components/Body/DevTest';
import Footer from './Components/Layout/Footer';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import BookaCall from './Components/Body/BookaCall';

function App() {

  const [disappearLoadingPage, setDisappearLoadingPage] = useState(false)

  useEffect(() => {
   setInterval(() => {
    setDisappearLoadingPage(true);
    }, 2000);

  }, []);

  return (
    <>
    {!disappearLoadingPage && <LoadingPage/>}
    {disappearLoadingPage && <BookaCall/>}

    <Routes>
        <Route path="/" element={disappearLoadingPage && [<NavBar/>,<LandingSecPage/>,<WhyUs/>,
      <HowItWorks/>, <DevTest/>, <Footer/>]}/>
      
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/services" element={<Services />}/>
    </Routes>

    </>
  );
}

export default App;
