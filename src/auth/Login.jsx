import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import MenuBar from "../components/common/MenuBar";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [verifyPage, setVerifyPage] = useState(true);
  const [message, setMessage] = useState("");
  const { loginWithPhone } = useContext(AuthContext);
  const [loading , setLoading ] = useState (false ) ;
  //  const  {user} = useContext(AuthContext) ; 
  const handleLogin = async (e) => {
    setLoading(true) 
    setMessage("");
    e.preventDefault();
    // console.log(phone);
    try {
      if (phone === "" || phone == null) {
        throw Error("Please Enter the valid  Phone number ");
      }
       await loginWithPhone(phone);

      //  if(user?.uid) {
      //      console.log ("user aa gaya ")
      //  }
      console.log("reCAPTCHA setup complete");
      setLoading(false) 
      navigate("/verify");
    } catch (error) {
      console.error("Error setting up reCAPTCHA:", error);
      setMessage(error?.message);
      setLoading(false) ;
    }
  };

  return (
    <>
      <div className="pt-36">
        <MenuBar />
        <p className="text-center text-4xl mt-12 font-bold">BMW</p>
        <p className="text-center text-3xl text-blue-700 mt-3 font-semibold">
          Log in to your Account!
        </p>
        <div className="sm:mt-32  flex justify-center items-center  gap-8 ">
          <input
            value={phone}
            className="border-b-2 border-slate-700 px-4 w- w-[20%] py-2  focus:outline-none"
            placeholder="Enter your Phone Number "
            onChange={(e) => setPhone(e.target.value)}
            type="text"
          />
          <div className="flex justify-center ">
            <div>
              <div id={verifyPage ? "recaptcha-container" : null}></div>
              <div className="">
                <button
                  className="py-2 px-4 bg-slate-800 rounded text-white mt-2 hover:bg-blue-700 duration-300"
                  onClick={handleLogin}
                >
                { loading? <span className="text-blue-600 ">  Loading... </span>:  "Get OTP"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-12 text-red-600 font-medium">
          {message}
        </div>
      </div>
    </>
  );
}
