import { useState } from "react";

const TalentBased = (props) => {
  const [role, setrole] = useState("-");
  const [skills, setskills] = useState("-");
  const involvementHandeler = (event) => {
    props.setInvolvment(event.target.value);
  };
  const durationHandler = (event) => {
    props.setDuration(event.target.value);
  };
  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
            Tell us what you are looking for:
          </label>
          <input
            className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="What is the product you want to build? What tasks you expect to delegate to the developer? If you have a link to a job description, simply paste it here for a quick start            "
            onChange={(event) => {
              props.setRole(event.target.body);
              setrole(event.target.value);
            }}
          />
          {role === "" ? (
            <p className="text-red text-xs italic">
              Please fill out this field
            </p>
          ) : (
            <></>
          )}
          {role === "" && skills === ""
            ? props.setSubmitValid(false)
            : props.setSubmitValid(true)}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
            Desired area of expertise
          </label>
          <input
            className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Type needed skills here (e.g. react, node.js, angular)"
            onChange={(event) => {
              props.setSkills(event.target.body);
              setskills(event.target.value);
            }}
          />
          {skills === "" ? (
            <p className="text-red text-xs italic">
              Please fill out this field
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap -mx-3 mb-3 mt-5">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
              What is the expected level of involvement?
            </label>
            {/* <div className="grid grid-cols-3 gap-2 items-center"> */}
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                value="full-time (40 hours/week)"
                name="involvement"
                onChange={involvementHandeler}
                defaultChecked
              ></input>

              <label className="text-lg font-bold mb-2">
                full-time (40 hours/week)
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                name="involvement"
                value="part-time (20+ hours/week)"
                onChange={involvementHandeler}
              ></input>
              <label className="text-lg font-bold mb-2">
                part-time (20+ hours/week)
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                name="involvement"
                value="under 20 hours/week"
                onChange={involvementHandeler}
              ></input>
              <label className="text-lg font-bold mb-2">
                under 20 hours/week
              </label>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-wrap -mx-3 mb-3 mt-5">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
            How long do you expect to work with a developer?
          </label>
          <div className="grid grid-cols-2 gap-2 items-center">
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                value="up to 160 hours"
                name="duration"
                onChange={durationHandler}
                defaultChecked
              ></input>
              <label className="text-lg font-bold mb-2">up to 160 hours</label>
            </div>
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                name="duration"
                value="1-3 months"
                onChange={durationHandler}
              ></input>
              <label className="text-lg font-bold mb-2">1-3 months</label>
            </div>
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                name="duration"
                value="4-6 months"
                onChange={durationHandler}
              ></input>
              <label className="text-lg font-bold mb-2">4-6 months</label>
            </div>
            <div>
              <input
                type="radio"
                className="h-3 w-3 mr-2"
                name="duration"
                value="7+ months"
                onChange={durationHandler}
              ></input>
              <label className="text-lg font-bold mb-2">7+ months</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentBased;
