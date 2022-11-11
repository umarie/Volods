import DevForm from "./DevForm";
import Devgif from "./Dev.gif"
const DevFormPage=()=>{
    return(
        <div className='grid grid-cols-2 gap-4 items-center'>
        <div>  <DevForm></DevForm></div>
        <div> <img className="ml-39 "src={Devgif} width="85%"></img></div>
        </div>
    );

}

export default DevFormPage