import ClientForm from "./ClientForm";
import Client from "../../Images/Client.gif"
import { useState , useEffect} from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";




const DevFormPage=()=>{
    const [pic, setPic]=useState()

    useEffect(() => {
      showPicture()
    }, [])
    

    const showPicture=()=>{
        if(window.innerWidth <=960)
        {
            setPic(false);
        }   
        else setPic(true)
    }
    window.addEventListener("resize",showPicture)
    return(

      <>
      <NavBar/>
      <div className="bg-background">
        {pic && (
          <div className="grid grid-cols-2 gap-4 items-center">
            <ClientForm></ClientForm>
            <img className="ml-39 " src={Client} width="85%"></img>
          </div>
      )}
      {!pic && <ClientForm></ClientForm>}
    </div>
    <Footer/>
      </>
        
  );
};

export default DevFormPage;
