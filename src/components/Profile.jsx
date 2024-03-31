import React, { useContext, useEffect, useState } from "react";
import MenuBar from "./common/MenuBar";
import { FaArrowAltCircleLeft, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userContext } from "../context/user.context";
import { userForProfileContext } from "../context/UserForProfile";

const Profile = () => {
  const { currUser } = useContext(userForProfileContext);
  const [ProfileData, setProfileData] = useState();
  // console.log (currUser)
  const admin = "+919608837964";

  const [userProfile, setUserProfile] = useState();

  const handleLogOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  useEffect(async () => {
    try {

      const q = query(
        collection(db, "Users_Profile"),
        where("phoneNumber", "==", currUser?.phoneNumber)
      );
  
      const snapProfileData = await getDocs(q);
      snapProfileData.forEach((doc) => {
        console.log(doc.data());
  
        setProfileData(doc.data());
      });
      
    } catch (error) {
       console.log(error) ; 
    }
    
  }, []);

  return (
    <>
      <MenuBar />
      <>
        {currUser ? (
          <div className="p-3">
            <Link to={"/"}>
              <p className="px-6">
                <FaArrowAltCircleLeft size={36} color="blue" />
              </p>
            </Link>
            <div className="h-fit flex flex-col gap-12 items-center shadow-lg shadow-blue-500 rounded-xl p-4">
              <div className="flex justify-between items-center w-full pr-24 h-full">
                <div className="h-full w-fit flex gap-6 justify-center">
                  <FaUser size={64} />
                  <div>
                    <p className="text-2xl font-bold">
                      User: {currUser.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="h-full outline w-48 py-4 flex justify-center items-center flex-col rounded-xl">
                  <p className="text-xl font-semibold">Balance</p>
                  <p className="text-4xl font-bold mt-6">
                    Rs : {ProfileData?.amount}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <Link
                  to={"/payment"}
                  className="bg-blue-700 cursor-pointer text-white font-bold rounded-xl p-4 px-24"
                >
                  Deposit Money
                </Link>
                <p
                  onClick={handleLogOut}
                  className="bg-red-500 cursor-pointer text-white font-bold rounded-xl p-4 px-24"
                >
                  Log Out
                </p>
                {admin === currUser.phoneNumber ? (
                  <Link
                    to={"/admin"}
                    className="bg-green-500 cursor-pointer text-white font-bold rounded-xl p-4 px-24"
                  >
                    Admin Panel
                  </Link>
                ) : null}
              </div>
            </div>
            <p className="text-center mt-12 text-3xl font-bold ">
              Your Products
            </p>
            <p className="text-center font-bold mt-6 text-red-500">
              No Product Available!
            </p>
            <div></div>
            <p className="text-center mt-12 text-3xl font-bold  ">
              Your Transactions
            </p>
            <p className="text-center font-bold mt-6 text-red-500">
              No Transactions Available!
            </p>
            <div className="mt-6 mb-24 flex flex-col gap-8"></div>
          </div>
        ) : (
          <div className=" flex flex-col justify-center items-center min-h-screen">
            <FaUser size={64} />
            <div className="text-center mt-8">
              <Link
                to={"/login"}
                className=" p-4 px-24 bg-blue-700 rounded-xl text-white font-semibold text-xl"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Profile;
