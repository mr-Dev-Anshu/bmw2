import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const { VerifyOPT, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleVerification = () => {
    try {
      setMessage(null);
      setLoading(true);
      VerifyOPT(otp);
      setLoading(false);
    } catch (error) {
      setMessage("Wrong OTP !");
    }
  };
  return (
    <div>
      <p className="text-center mt-12 text-3xl text-green-500">
        We have sent you an OTP on your Phone Number !
      </p>
      <div className="sm:mt-32  flex justify-center items-center  gap-8">
        <input
          required
          className="border-b-2 text-xl border-slate-700 px-4 w- w-[20%] py-2  focus:outline-none"
          placeholder="Enter OTP..."
          onChange={(e) => setOtp(e.target.value)}
          type="text"
        />
        <div className="flex justify-center ">
          <button
            className="py-2 px-8 font-semibold  bg-slate-800 rounded text-white mt-2"
            onClick={handleVerification}
          >
            {loading ? "Loading..." : "Verify"}
            
          </button>
        </div>
      </div>
      <div className="flex justify-center sm:mt-12 text-red-600 font-medium">
        {message}
      </div>
    </div>
  );
}
