import { useState } from "react";
const ProjectBased = (props) => {
  const [desc, setDesc]=useState("-");

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
            Project Description
          </label>
          <input
            className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="IOS app that will allow the users to book flights, hotel rooms....  "
            onChange={(event) => {
              props.setDescription(event.target.body);
              setDesc(event.target.value)
            }}
          />
           {
                   desc===""?(<p className="text-red text-xs italic">Please fill out this field</p>
                    ):<></>

           }
            
            {desc===""?props.setSubmitValid(false):props.setSubmitValid(true)}
            
        </div>
        </div>
      </div>
   
  );
};

export default ProjectBased;
