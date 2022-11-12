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
import DevFormPage from './Components/Forms/DevFormPage';
import ClientFormPage from './Components/Forms/ClientFormPage'
import PrivacyPolicy from './Components/Body/PrivacyPolicy';


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
        <Route path="/fordevelopers" element={<DevFormPage />}/>
        <Route path="/hiredevs" element={<ClientFormPage />}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
    </Routes>

    </>

  );
}

export default App;

