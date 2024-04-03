import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { addDoc, collection,  getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import { query } from "firebase/database";

const SubmitUtr = () => {
  const [utr, setUtr] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading , setLoading ] = useState(false) ; 

  const submitUtr = async () => { 
    setLoading(true) ; 
    setError(null)
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "transactions"), where("utrNumber", "==", utr))
      );

      if (querySnapshot.empty) {
        const docRef = await addDoc(collection(db, "transactions"), {
          active: true,
          utrNumber: utr,   
          phoneNumber: user?.phoneNumber,
          userId: user?.uid,
        });
        
         console.log(docRef)
         setLoading(false) ;

           navigate("/message") 
      } else {
        setLoading(false) ; 
         setError("UTR is already in use ")
      }
    } catch (error) {
      setLoading(false) ; 
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
          disabled={loading}  
          onClick={submitUtr}
          className="bg-blue-700 p-3 text-xl text-white rounded-xl"
        >
        { loading ? 'Loading...': " Submit"}
        </button>
      </div>
      <p className="text-red-500 text-center text-2xl">{error}</p>
    </div>
  );
};

export default SubmitUtr;
