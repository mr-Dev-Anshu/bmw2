import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading ] = useState (false)
  const handleClick = async () => {
    try {
      setLoading(true)
      const dataSnap = await getDocs(collection(db, "transactions"));
      const newData = [] ; 
      dataSnap.forEach((doc) => {
        newData.push(doc.data());
        console.log(newData)
      });
      setData(newData) ;
      console.log(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

    useEffect(()=> {
        handleClick() ; 
    } , [])

  return (
    <div>
      {!loading ? (
        <div>
          <div className="flex justify-center text-4xl font-medium text-green-600 mt-10  ">
           Welcome to the Admin Page 
          </div>

          <div className="px-16 mt-10  ">
            {data.map((item) => (
              <div className="flex  justify-between bg-gray-200 items-center px-3 py-5   shadow-2xl  mt-4">
                <p className="text-2xl font-bold">
                  {" "}
                  Phone-Number : {item?.phoneNumber}
                </p>
                <p className="text-2xl font-bold">UTR No  : {item?.utrNumber}</p>
                <button className="text-xl bg-green-500 text-white py-2 px-2  rounded  shadow-xl">
                  Confirm Payment
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-green-400 text-2xl "> Loading...</div>
      )}
    </div>
  );
};

export default AdminPanel;
