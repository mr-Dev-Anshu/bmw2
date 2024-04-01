import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase.config";
import { useEffect } from "react";
export default function WithdrawAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "withdraw"),
        where("isActive", "==", true)
      );
      const dataSnap = await getDocs(q);

      const newData = [];

      dataSnap.forEach((doc) => {
        newData.push(doc.data());
      });

      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleConfirm = async (phone, amount) => {
    setLoading(true);

    try {
      const q = query(
        collection(db, "withdraw"),
        where("phoneNumber", "==", phone)
      );

      const currSnap = await getDocs(q);

      currSnap.forEach(async (doc) => {
        await updateDoc(doc.ref, {
          isActive: false,
        });
        // console.log("Updated");
      });

      // console.log(phone);
      const pq = query(
        collection(db, "Users_Profile"),
        where("phoneNumber", "==", "+91" + phone)
      );

      const profileSnap = await getDocs(pq);

      if (profileSnap.empty) {
        console.log("there is not any doc about ");
      }

      let Price = 0;
      profileSnap.forEach((doc) => {
        Price = doc.data().amount;
      });

      amount = amount - 0;
      const profileDataRef = doc(db, "Users_Profile", "+91" + phone);
      const data = {
        phoneNumber: "+91" + phone,
        amount: Price - amount,
      };
      await setDoc(profileDataRef, data);

      console.log("Data added successfully ");
      setLoading(false);
      // window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      {data ? (
        <div className="px-16 mt-10  ">
          {data.map((item) => (
            <div
              key={item.phoneNumber}
              className="flex  justify-between bg-gray-200 items-center px-3 py-5   shadow-2xl  mt-10"
            >
              <p className="text-xl font-bold">
                {" "}
                Phone-Number : {item?.phoneNumber}
              </p>
              <p className="text-xl font-bold">
                Account No : {item?.accountNo}
              </p>
              <p className="text-xl font-bold">IFSC Code : {item?.ifscCode}</p>
              <p className="text-xl text-green-600  font-bold">
                Amount : {item?.money}
              </p>
              <button
                onClick={() => handleConfirm(item.phoneNumber, item.money)}
                className="text-xl bg-green-500 text-white py-2 px-2  rounded  shadow-xl"
              >
                {!loading ? "Please wait " : " Confirm Payment"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-green-400 text-2xl ">
          {" "}
          Loading...
        </div>
      )}
    </>
  );
}
