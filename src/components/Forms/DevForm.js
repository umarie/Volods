import react, { useState } from "react";
import axios from "axios";
const DevForm = () => {
  const [firstName, setfirstName] = useState("-");
  const [lastName, setlastName] = useState("-");
  const [email, setemail] = useState("-");
  const [hourlyRate, sethourlyRate] = useState("-");
  const [monthlyRate, setmonthlyRate] = useState("-");
  const [positionTitle, setpositionTitle] = useState("-");
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com/");
  const [CvLink, setCvLink] = useState("-");

  const submitHandler = () => {
    axios({
      url: "https://nocodeform.io/f/636f19969ff7ddfaf07cb3b1",
      method: "POST",
      data: {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "hourlyRate": hourlyRate,
        "monthlyRate": monthlyRate,
        "linkedIn": linkedIn,
        "positionTitle": positionTitle,
        "CvLink": CvLink,
      },
    }).then((response) => {
      console.log(response);
    });
  };
  const checkValid = () => {
    if (
      firstName === "INVALID" ||
      firstName === "-" ||
      firstName.length === 0 ||
      lastName === "INVALID" ||
      lastName.length === 0 ||
      lastName === "-" ||
      email === "INVALID" ||
      email.length === 0 ||
      email === "-" ||
      hourlyRate === "INVALID_<=0" ||
      hourlyRate.length === 0 ||
      hourlyRate === "INVALID_>1000" ||
      hourlyRate === "-" ||
      monthlyRate.length === 0 ||
      monthlyRate === "INVALID" ||
      monthlyRate === "-" ||
      positionTitle.length === 0 ||
      positionTitle === "INVALID" ||
      positionTitle === "-" ||
      CvLink.length === 0 ||
      CvLink === "INVALID" ||
      !CvLink.includes("https://")
    )
      return false;
    else return true;
  };
  return (
    <div className="container bg-background">
      <div className="w-9/12 rounded-xl  shadow-lg text-white mt-10 mx-auto ">
        <form className="w-full max-w-lg ">
          <p className="font-bold text-5xl text-center">FOR DEVELOPERS</p>

          <div className="flex flex-wrap -mx-3 mb-3 mt-5">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                First Name
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Kevin"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setfirstName(event.target.value);
                  else setfirstName("INVALID");
                }}
              />
              {firstName.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {firstName === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Enter valid first name.
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                Last Name
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Jon"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setlastName(event.target.value);
                  else setlastName("INVALID");
                }}
              />
              {lastName.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {lastName === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Enter valid last name.
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                Hourly Rate (USD)
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="$15"
                min="0"
                onChange={(event) => {
                  if (parseInt(event.target.value) > 10000);
                  sethourlyRate("INVALID_>1000");
                  if (event.target.value <= 0) sethourlyRate("INVALID_<=0");
                  else sethourlyRate(event.target.value);
                }}
              />
              {hourlyRate.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {hourlyRate === "INVALID_>1000" ? (
                <p className="text-red text-xs italic">
                  Hourly rate cannot be more then 10000.
                </p>
              ) : (
                <></>
              )}
              {hourlyRate === "INVALID_<=0" ? (
                <p className="text-red text-xs italic">
                  Hourly rate cannot be less then $1.
                </p>
              ) : (
                <></>
                
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                Monthly Rate (USD)
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 mb-3 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="$50"
                min="0"
                onChange={(event) => {
                  if (event.target.value > 0)
                    setmonthlyRate(event.target.value);
                  else setmonthlyRate("INVALID");
                }}
              />
              {monthlyRate.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {monthlyRate === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Monthly rate cannot be less then $1 .
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Position Title
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Senior Software Engineer"
                onChange={(event) => {
                  if (!/[0-9]/.test(event.target.value))
                    setpositionTitle(event.target.value);
                  else setpositionTitle("INVALID");
                }}
              />
              {positionTitle.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {positionTitle === "INVALID" ? (
                <p className="text-red text-xs italic">
                  Enter valid position title
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                LinkedIn Profile link
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                defaultValue="https://www.linkedin.com/"
                onChange={(event) => {
                  setLinkedIn(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Link to CV
              </label>
              <input
                className=" text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Enter a public accessible link to your CV"
                onChange={(event) => {
                  if (event.target.value.length > 1 && event.target.value.includes("https://"))
                    setCvLink(event.target.value);
                  else setCvLink("INVALID");
                }}
              />
              {CvLink.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {CvLink === "INVALID" ? (
                <p className="text-red text-xs italic">Invalid Link</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <button
            onClick={submitHandler}
            type="button"
            className={
              checkValid() === false
                ? "w-full text-white bg-red hover:opacity-20 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800 opacity-50 cursor-not-allowed"
                : "w-full text-white bg-card hover:opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default DevForm;
