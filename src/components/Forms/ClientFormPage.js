import ClientForm from "./ClientForm";
import Client from "./Client.gif"
import { useState } from "react";
const DevFormPage=()=>{
    const [pic, setPic]=useState()
    const showPicture=()=>{
        if(window.innerWidth <=960)
        {
            setPic(false);
        }   
        else setPic(true)
    }
    window.addEventListener("resize",showPicture)
    return(
        <div className='grid grid-cols-2 gap-4 items-center'>
        <div>  <ClientForm></ClientForm></div>
        <div> pic && <img className="ml-39 "src={Client} width="85%"></img></div>
        
        </div>
       
    );
 
}

export default DevFormPage