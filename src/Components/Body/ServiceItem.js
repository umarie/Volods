import React from "react";

export default function ServiceItem(props) {
  return (
    <>
      <div className="bg-slate-700 w-44 h-40 mt-8  pt-12 rounded-xl hover:scale-90 hover:cursor-pointer">
        <div className="flex flex-col justify-center items-center">
            <img src={props.logo} className="w-10 h-10" alt="logo" />
            <h1 className="text-white font-[quicksand]">{props.name}</h1>
        </div>
        
      </div>
    </>
  );
}
