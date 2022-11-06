import { useState } from "react";

const Form = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [hourlyRate, sethourlyRate] = useState("");
  const [monthlyRate, setmonthlyRate] = useState("");
  const [positionTitle, setpositionTitle] = useState("");
  const [linkedIn, setLinkedIn]=useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [IsSelected, setIsSelected] = useState(false);
  const [submitValid, setsubmitValid] = useState(true);
  

  const submitHandler = () => {
  
      const developers = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        hourlyRate: hourlyRate,
        monthlyRate: monthlyRate,
        linkedIn:linkedIn,
        positionTitle: positionTitle,
        
      };
    }
    const checkValid=()=>{
      (
        firstName === "INVALID" ||
        lastName === "INVALID" ||
        email === "INVALID" ||
        hourlyRate === "INVALID_<=0" ||
        hourlyRate === "INVALID_>1000" ||
        monthlyRate === "INVALID" || 
        linkedIn ==="INVALID" ||
        positionTitle === "INVALID"
      )?setsubmitValid(false): setsubmitValid(true);
    }
  return (
    <div className="container bg-background">
      <div className="w-8/12 rounded-xl  shadow-lg text-white mt-10 mx-auto ">
        <form className="w-full max-w-lg ">
          <p className="font-bold text-5xl">
            <center>FOR DEVELOPERS</center>
          </p>

          <div className="flex flex-wrap -mx-3 mb-3 mt-5">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                First Name
              </label>
              <input
                class="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Kevin"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setfirstName(event.target.value);
                  else setfirstName("INVALID");
                  checkValid();
                }}
              />
              {firstName.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {firstName === "INVALID" ? (
                <p class="text-red text-xs italic">Enter valid first name.</p>
              ) : (
                <></>
              )}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                Last Name
              </label>
              <input
                class="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Jon"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setlastName(event.target.value);
                  else setlastName("INVALID");

                  checkValid(); 
                }}
              />
              {lastName.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {lastName === "INVALID" ? (
                <p class="text-red text-xs italic">Enter valid last name.</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Email
              </label>
              <input
                class=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="KevinJone@gmail.com"
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
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {email === "INVALID" ? (
                <p class="text-red text-xs italic">Invalid Email</p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                <input className="mr-2 leading-tight mb-2" type="checkbox" />
                Hourly Rate $
              </label>
              <input
                class="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="$15"
                min="0"
                onChange={(event) => {
                  if (event.target.value > 10000)
                    console.log(event.target.value);
                  if (event.target.value <= 0) sethourlyRate("INVALID_<=0");
                  else sethourlyRate(event.target.value);

                  checkValid();
                }}
              />
              {hourlyRate.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {hourlyRate === "INVALID_>1000" ? (
                <p class="text-red text-xs italic">
                  Hourly rate cannot be more then 10000.
                </p>
              ) : (
                <></>
              )}
              {hourlyRate === "INVALID_<=0" ? (
                <p class="text-red text-xs italic">
                  Hourly rate cannot be less then $1.
                </p>
              ) : (
                <></>
              )}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                <input className="mr-2 leading-tight mb-2" type="checkbox" />
                Monthly Rate
              </label>
              <input
                class="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 mb-3 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="$50"
                min="0"
                onChange={(event) => {
                  if (event.target.value > 0)
                    setmonthlyRate(event.target.value);
                  else setmonthlyRate("INVALID");

                  checkValid();
                }}
              />
              {monthlyRate.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {monthlyRate === "INVALID" ? (
                <p class="text-red text-xs italic">
                  Monthly rate cannot be less then $1 .
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Position Title
              </label>
              <input
                class=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Senior Software Engineer"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setpositionTitle(event.target.value);
                  else setpositionTitle("INVALID");
                  checkValid();
                }}
              />
              {positionTitle.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {positionTitle === "INVALID" ? (
                <p class="text-red text-xs italic">
                  Enter valid position title
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                LinkedIn Profile link
              </label>
              <input
                class=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="https://www.linkedin.com/KevinJ"
                onChange={(event) => {
                 
                  if (event.target.value.includes("linkedin.com"))
                  setLinkedIn(event.target.value);
                  else setLinkedIn("INVALID");
                }}
              />
              {linkedIn.length <= 0 ? (
                <p class="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {linkedIn === "INVALID" ? (
                <p class="text-red text-xs italic">Invalid Link</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Please Upload your updated Resume
              </label>
              <input
                className="block w-full text-sm text-background bg-white rounded py-3 px-2  border border-gray-200 cursor-pointer dark:text-gray-400 focus:outline-none "
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(event)=>{
                  setSelectedFile(event.target.files[0]);
	                setIsSelected(true);
                  checkValid();
                }}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300 mb-3"
                id="file_input_help"
              >
                PDF or Word (MAX 1Mb)
              </p>
              {!IsSelected? (
                <p class="text-red text-xs italic"> Please select a file</p>
              ) : (
                <></>
              )}
              
             
            </div>
          </div>
          {checkValid}
          <button
            onClick={submitHandler}
            type="button"
            className={submitValid?"text-white bg-red hover:opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 opacity-50 cursor-not-allowed": "text-white bg-card hover:opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}
          >
            Submit
          </button>
         
        </form>
      </div>
    </div>
  );
};
export default Form;
