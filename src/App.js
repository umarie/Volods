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
    {disappearLoadingPage && <NavBar/>}
    {disappearLoadingPage && <LandingSecPage/>}
    {disappearLoadingPage && <WhyUs/>}
    {disappearLoadingPage && <HowItWorks/>}
    {disappearLoadingPage && <DevTest/>}
    {disappearLoadingPage && <Footer/>}
    <Routes>
        <Route path="/hj" element={<LandingSecPage />}/>
    </Routes>
    </>
  );
}

export default App;
