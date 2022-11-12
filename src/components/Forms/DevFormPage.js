import DevForm from "./DevForm";
import Devgif from "./Dev.gif";
import { useEffect, useState } from "react";
const DevFormPage = () => {
  useEffect(() => {
    showPicture();
  }, []);
  const [pic, setPic] = useState();
  const showPicture = () => {
    if (window.innerWidth <= 960) {
      setPic(false);
    } else setPic(true);
  };
  window.addEventListener("resize", showPicture);
  return (
    <div>
      {pic && (
        <div className="grid grid-cols-2 gap-4 items-center">
          <DevForm />
          <img className="ml-39 " src={Devgif} width="85%"></img>
        </div>
      )}
      {!pic && <DevForm />}
    </div>
  );
};

export default DevFormPage;
