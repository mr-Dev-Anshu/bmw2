import React, { useContext , useEffect, useState  } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function VerifyOtp() {
     const [message , setMessage ] = useState () ; 
     const [otp, setOtp] = useState();
     const navigate = useNavigate() ; 
     const {   VerifyOPT  , user } = useContext(AuthContext);
      
     useEffect(()=> {
           if(user){
             navigate("/") ; 
           }
     })
  return (
    <div>
      <div>
          <div className="sm:mt-32  flex justify-center items-center  gap-8">
            <input
              value={otp}
              className="border-b-2 border-slate-700 px-4 w- w-[20%] py-2  focus:outline-none"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              type="text"
            />
            <div className="flex justify-center ">
              <div>
                <div className="">
                  <button
                    className="py-2 px-4 bg-slate-800 rounded text-white mt-2"
                    onClick={()=> VerifyOPT(otp)}
                  >
                    Verify Your OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:mt-12 text-red-600 font-medium">
            {message}
          </div>
        </div>
    </div>
  )
}
