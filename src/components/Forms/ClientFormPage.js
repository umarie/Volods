import ClientForm from "./ClientForm";
import Client from "./Client.gif"
import { useState , useEffect} from "react";




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
        <div>
        {pic && (
          <div className="grid grid-cols-2 gap-4 items-center">
            <ClientForm></ClientForm>
            <img className="ml-39 " src={Client} width="85%"></img>
          </div>
      )}
      {!pic && <ClientForm></ClientForm>}
    </div>
  );
};

export default DevFormPage;
