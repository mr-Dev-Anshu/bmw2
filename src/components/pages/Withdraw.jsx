import React, { useContext, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import { userForProfileContext } from "../../context/UserForProfile";
const Withdraw = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message , setMessage ] =  useState("") ; 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // console.log(formData)
  };

  const { currUser } = useContext(userForProfileContext);
 const navigate  = useNavigate()  ; 
  const handleSubmit = async () => {
    try {

        //  const {phoneNumber , money , isActive , ifscCode , accountNo } =  formData  ; 

        //  if (!phoneNumber || !money || !isActive || !ifscCode || !accountNo ) {
        //    setMessage ("Please fill  all the inputs ")
        //    return 
        //  }
       setMessage("")
      setLoading(true)
      const q = query(
        collection(db, "Users_Profile"),
        where("phoneNumber", "==", currUser.phoneNumber)
      );

      const dataSnap = await getDocs(q);
      let  amount = 0 ; 
      dataSnap.forEach((doc) => {
        // console.log(doc.data().amount);
        amount = doc.data().amount ; 
      });

       const  money = formData.money-0 ; 
       console.log(amount)
       console.log (money)

      if (amount >= money) {
        await addDoc(collection(db, "withdraw"), {
          ...formData,
          isActive: true,
        });

          console.log("Data added successfully")

        // console.log(dbRef);
        setLoading(false);
         navigate ("/withdrawlmessage")
      }else {
        setLoading(false)
        setMessage("Insufficient  Amount ")
       }
       setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      {currUser ? (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          
          <Link to={"/"} className=" w-full p-2">
            <p>
              <FaArrowAltCircleLeft size={36} color="blue" />
            </p>
          </Link>
          <form
         
            className="flex flex-col gap-6 p-4 py-10 rounded-xl shadow-lg shadow-blue-500"
            action=""
          >
            <p className="text-center text-5xl font-bold">BMW</p>
            <input
              required
              onChange={handleChange}
              id="phoneNumber"
              className="w-72 border-b-2 p-2 border-black outline-none"
              type="text"
              placeholder="Enter your contact no..."
            />
            <input
             required
              onChange={handleChange}
              id="accountNo"
              className="w-72 border-b-2 p-2 border-black outline-none"
              type="text"
              placeholder="Enter your account no..."
            />
            <input
            required
              onChange={handleChange}
              id="ifscCode"
              className="w-72 border-b-2 p-2 border-black outline-none"
              type="text"
              placeholder="Enter your IFSC code..."
            />
            <input
            required
              onChange={handleChange}
              id="money"
              className="w-72 border-b-2 p-2 border-black outline-none"
              type="text"
              placeholder="Enter Amount..."
            />

            <p
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-blue-500 text-center p-2 rounded-xl text-white font-semibold"
            >
              {loading ? "Loading...." : "Withdraw"}
            </p>
          </form>

          <div className="text-xl text-red-500 ">{message}</div>
        </div>
      ) : (
        <div className="loading">Loading</div>
      )}
    </>
  );
};

export default Withdraw;
