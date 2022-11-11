import { useState } from "react";
import axios from "axios";
import ProjectBased from "./ProjectBased";
import TalentBased from "./TalentBased";
const ClientForm = () => {
  const [gigType, setGigtype] = useState("Project-Based");
  const [email, setemail] = useState("-");
  const [contactPerson, setContactPerson] = useState("-");
  const [phone, setPhone] = useState("-");
  const [budgetType, setBudgetType] = useState("Hourly");
  const [rate, setRate] = useState("-");
  const [role, setRole] = useState("-");
  const [description, setDescription] = useState(true);
  const [submitValid, setSubmitValid] = useState(false);
  const [skills, setSkills] = useState("-");
  const [involvement, setInvolvment] = useState("up to 160 hours");
  const [duration, setDuration] = useState("1-3 months");
  const submitHandler = () => {
    if (gigType === "Project-Based") {
      axios({
        url: "https://nocodeform.io/f/63688c043ca7851619c75de3",
        method: "POST",
        data: {
          "gigType": gigType,
          "contactPerson": contactPerson,
          "email": email,
          "phone": phone,
          "Projectdescription": description,
          "budgetType": budgetType,
          "rate": rate,
        },
      }).then((response) => {
        console.log(response);
      });
    }
    if (gigType === "Talent-Based") {
      axios({
        url: "https://nocodeform.io/f/63688c043ca7851619c75de3",
        method: "POST",
        data: {
          "gigType": gigType,
          "contactPerson": contactPerson,
          "email": email,
          "phone": phone,
          "role": role,
          "skills": skills,
          "involvement": involvement,
          "duration": duration,
          "budgetType": budgetType,
          "rate": rate,
        },
      }).then((response) => {
        console.log(response);
      });
    }
  };

  const checkValid = () => {
    if ( gigType === "Project-Based"){
      if(contactPerson==="INVALID"||contactPerson==="-"||contactPerson.length<0||
      email==="INVALID"||email==="-"||email.length<0||
      phone==="INVALID"||phone==="-"||phone.length<0||
      description==="INVALID"||description==="-"||submitValid===false||
      rate==="-") return false
   
    }
   else if (gigType === "Talent-Based"){
      if(contactPerson==="INVALID"||contactPerson==="-"||contactPerson.length<0||
      email==="INVALID"||email==="-"||email.length<0||
      phone==="INVALID"||phone==="-"||phone.length<0||
      role==="INVALID"||role==="-"||
      skills==="INVALID"||skills==="-"||submitValid===false||
      rate==="-") return false
     
    }
  };
  const gigTypeHandler = (event) => {
    setGigtype(event.target.value);
  };

  const budgetTypeHandler = (event) => {
    setBudgetType(event.target.value);
  };

  return (
    <div className="container bg-background">
      <div className="w-10/12 rounded-xl  shadow-lg text-white mt-10 mx-auto ">
        <form className="w-full max-w-lg ">
          <p className="font-bold text-5xl text-center">
            FOR CLIENTS
          </p>

          <div className="flex flex-wrap -mx-3 mb-3 mt-5">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                I am looking to
              </label>
              <div className="grid grid-cols-2 gap-2 items-center">
                <div>
                  <input
                    type="radio"
                    className="h-3 w-3 mr-2"
                    value="Project-Based"
                    name="radio"
                    defaultChecked
                    onChange={gigTypeHandler}
                  ></input>
                  <label className="text-lg font-bold mb-2">
                    build digital product
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="h-3 w-3 mr-2"
                    name="radio"
                    value="Talent-Based"
                    onChange={gigTypeHandler}
                  ></input>
                  <label className="text-lg font-bold mb-2">
                    hire qualified developers
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Contact Person Name
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Kevin Jon "
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setContactPerson(event.target.value);
                  else setContactPerson("INVALID");
                }}
              />
              {contactPerson.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {contactPerson === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Invalid Contact Person
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Email
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="KevinJon@gmail.com"
                onChange={(event) => {
                  const validateEmail = (email) => {
                    return email.match(
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                  };
                  if (validateEmail(event.target.value))
                    setemail(event.target.value);
                  else setemail("INVALID");
                     }}
              />
              {email.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {email === "INVALID" ? (
                <p className="text-red text-xs italic">Invalid Email</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Phone Number
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="+1 555 555 1234"
                onChange={(event) => {
                  if (
                    /[0-9]/.test(event.target.value) &&
                    event.target.value.length < 16
                  )
                    setPhone(event.target.value);
                  else setPhone("INVALID");
                    }}
              />
              {phone === "INVALID" ? (
                <p className="text-red text-xs italic">Invalid Phone Number</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          {gigType === "Project-Based" ? (
            <ProjectBased
              budgetTypeHandler={budgetTypeHandler}
              setRate={setRate}
              rate={rate}
              setDescription={setDescription}
              setSubmitValid={setSubmitValid}
            />
          ) : (
            <TalentBased
              role={role}
              setRole={setRole}
              skills={skills}
              setSkills={setSkills}
              setInvolvment={setInvolvment}
              setDuration={setDuration}
              setSubmitValid={setSubmitValid}
            />
          )}
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                Pay By:
              </label>
              <div className="relative w-full lg:max-w-sm">
                {gigType === "Project-Based" ? (
                  <select
                    onChange={budgetTypeHandler}
                    className="w-full p-2.5 text-background bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    <option value="Hourly">Hourly</option>
                    <option value="Fixed">Fixed</option>
                  </select>
                ) : (
                  <select
                    onChange={budgetTypeHandler}
                    className="w-full p-2.5 text-background bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    <option value="Hourly">Hourly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly </option>
                  </select>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                {budgetType + " Rate (USD)"}
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 mb-3 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="$50"
                min="0"
                onChange={(event) => {
                  if (event.target.value > 0) setRate(event.target.value);
                  else setRate("INVALID");
                 }}
              />
              {rate.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {rate === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Monthly rate cannot be less then $1.
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3 mt-5">
            <div className="w-full px-3 mb-6 md:mb-0">
              <button
                onClick={submitHandler}
                type="button"
                className={
                  (checkValid()===false)? "w-full text-white bg-red hover:opacity-20 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800 opacity-50 cursor-not-allowed"
                    : "w-full text-white bg-card hover:opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                }
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ClientForm;
