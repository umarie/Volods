import react,{ useState } from "react";
import axios from "axios";
const ClientForm = () => {
  const [firstName, setfirstName] = useState("-");
  const [lastName, setlastName] = useState("-");
  const [email, setemail] = useState("-");
  const [hourlyRate, sethourlyRate] = useState("-");
  const [monthlyRate, setmonthlyRate] = useState("-");
  const [positionTitle, setpositionTitle] = useState("-");
  const [linkedIn, setLinkedIn] = useState('https://www.linkedin.com/');
  const [selectedFile, setSelectedFile] = useState(true);
  const [IsSelected, setIsSelected] = useState(true);
  const [submitValid, setsubmitValid] = useState(false);
  const formData = new FormData();

  const submitHandler = () => {
    const developer = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      hourlyRate: hourlyRate,
      monthlyRate: monthlyRate,
      linkedIn: linkedIn,
      positionTitle: positionTitle,
    };

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("hourlyRate", hourlyRate);
    formData.append("monthlyRate", monthlyRate);
    formData.append("linkedIn", linkedIn);
    formData.append("positionTitle", positionTitle);
    formData.append("resume",selectedFile);

    // console.log(selectedFile);
    // console.log(developer);
  //   fetch("https://nocodeform.io/f/6366953e5c61679c1717457b", {
  //     method: "POST",
  //     body: formData,
  //     {
  //       headers: {
  //           "Content-type": "multipart/form-data",
  //       },                    
  //   })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // };

  axios({
    url: 'https://nocodeform.io/f/63688c043ca7851619c75de3',
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      hourlyRate: hourlyRate,
      monthlyRate: monthlyRate,
      linkedIn: linkedIn,
      positionTitle: positionTitle,
      resume:selectedFile
    }
  }).then((response) => {
    console.log(response);
  })
  }
  const checkValid = () => {
   if (firstName === "INVALID" ||
    lastName === "INVALID" ||
    email === "INVALID" ||
    hourlyRate === "INVALID_<=0" ||
    hourlyRate === "INVALID_>1000" ||
    monthlyRate === "INVALID" ||
    positionTitle === "INVALID")
      return false
      else  return true;
  };
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
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {firstName === "INVALID" ? (
                <p className="text-red text-xs italic">Enter valid first name.</p>
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

                  checkValid();
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
                <p className="text-red text-xs italic">Enter valid last name.</p>
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
                Hourly Rate $
              </label>
              <input
                className="text-background appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
              
                Monthly Rate
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

                  checkValid();
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
                  checkValid();
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
                  if (event.target.value.includes("linkedin.com"))
                    setLinkedIn(event.target.value);
                  else setLinkedIn("INVALID");
                }}
              />
              {linkedIn.length <= 0 ? (
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              ) : (
                <></>
              )}
              {linkedIn === "INVALID" ? (
                <p className="text-red text-xs italic">Invalid Link</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray text-s font-bold mb-2">
                Please Upload your updated Resume
              </label>
              <input
                className="block w-full text-sm text-background bg-white rounded py-3 px-2  border border-gray-200 cursor-pointer dark:text-gray-400 focus:outline-none "
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(event) => {
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
              {!IsSelected ? (
                <p className="text-red text-xs italic"> Please select a file</p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <button
            onClick={submitHandler}
            type="button"
            className={
              !submitValid
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
export default ClientForm;
