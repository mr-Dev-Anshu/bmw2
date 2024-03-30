import React, { useContext, useState } from "react";
import { realTimeDb } from "../../firebase.config";
import { equalTo, get, push, query, ref } from "firebase/database";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const SubmitUtr = () => {
    const [data , setData ] = useState ({}) 
  const [utr, setUtr] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const dbRef = ref(realTimeDb, "transactions");

  const submitUtr = async () => {
    const utrExist = query(dbRef, equalTo("utr", utr));

    try {
      const snapShot = await get(utrExist);
       console.log (snapShot.exists) ; 
      if (!snapShot) {
        setError(null);
          setData (pre=> {
              pre.phoneNumber = user.phoneNumber ;
              pre.userID =  user.uid  ;
              pre.utr = utr ; 
              pre.active  = true 
          })
        await push(dbRef, data);
        navigate("/profile");
      } else {
        setError("UTR already exists!");
      }
    } catch (error) {
      console.log("Error while submitting Utr", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen justify-center items-center">
      <p className="text-4xl font-extrabold">BMW</p>
      <p className="text-xl font-bold">Submit Your UTR NO...</p>
      <div className="flex flex-col gap-10">
        <input
          onChange={(e) => setUtr(e.target.value)}
          className=" border-b-2 outline-none indent-4 p-2 text-xl"
          type="text"
          placeholder="Enter the UTR No. ..."
        />
        <button
          onClick={submitUtr}
          className="bg-blue-700 p-3 text-xl text-white rounded-xl"
        >
          Submit
        </button>
      </div>
      <p className="text-red-500 text-center text-2xl">{error}</p>
    </div>
  );
};

export default SubmitUtr;
