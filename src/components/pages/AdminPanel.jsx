import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleClick = async () => {
    try {
      setLoading(true);
      // const dataSnap = await getDocs(collection(db, "transactions"));
      const q = query(
        collection(db, "transactions"),
        where("active", "==", true)
      );
      const dataSnap = await getDocs(q);
      // console.log(dataSnap);
      const newData = [];
      dataSnap.forEach((doc) => {
        newData.push(doc.data());
      });
      setData(newData);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  // HandleConfirm function starting
  const handleConfirm = async (phoneNumber, utr) => {
    // console.log(utr);
    setLoadingBtn(true);

    try {
      // Updating the active payment
      const q = query(
        collection(db, "transactions"),
        where("utrNumber", "==", utr)
      );

      const dataSnap = await getDocs(q);
      let CurrData = {};
      dataSnap.forEach(async (doc) => {
        CurrData = doc.data();
        await updateDoc(doc.ref, {
          active: false,
        });
      });

      // -------------- ////

      ///  setting the amount

      const amountQ = query(
        collection(db, "Users_Profile"),
        where("phoneNumber", "==", phoneNumber)
      );

      const amountSnap = await getDocs(amountQ);
      let Price = 0;
      amountSnap.forEach((doc) => {
        const profileData = doc.data();
        Price = profileData?.amount - 0;
        //  console.log(Price) ;
      });

      const profileDataRef = doc(db, "Users_Profile", phoneNumber);
      const data = {
        phoneNumber: phoneNumber,
        amount: amount - 0 + Price,
      };
      await setDoc(profileDataRef, data);

      console.log("data added successfully");
      setLoadingBtn(false);
      window.location.reload();
    } catch (error) {
      setLoadingBtn(false);
      console.log(error);
    }
  };

  return (
    <div>
      {!loading ? (
        <div>
          <div className="flex justify-center text-4xl font-medium text-green-600 mt-10  ">
            <p> Welcome to the Admin Page <Link to={"/withdrawAdmin"}><span className="text-xl bg-green-500 text-white py-2 px-2  rounded  shadow-xl">Confirm withdraw</span></Link></p>
            
          </div>

          <div className="px-16 mt-10  ">
            {data.map((item) => (
              <div
                key={item.phoneNumber}
                className="flex  justify-between bg-gray-200 items-center px-3 py-5   shadow-2xl  mt-10"
              >
                <p className="text-2xl font-bold">
                  {" "}
                  Phone-Number : {item?.phoneNumber}
                </p>
                <p className="text-2xl font-bold">UTR No : {item?.utrNumber}</p>
                <input
                  className="outline-none py-2 px-3 border-b-4 border-slate-700 "
                  placeholder="Enter the Amount "
                  type="number"
                  required
                  onChange={(e) => setAmount(e.target.value)}
                />
                <button
                  onClick={() =>
                    handleConfirm(item.phoneNumber, item.utrNumber)
                  }
                  className="text-xl bg-green-500 text-white py-2 px-2  rounded  shadow-xl"
                >
                  {loadingBtn ? "Please wait " : " Confirm Payment"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-green-400 text-2xl ">
          {" "}
          Loading...
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
