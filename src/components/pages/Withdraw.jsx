import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Withdraw = () => {
  return (
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
          className="w-72 border-b-2 p-2 border-black outline-none"
          type="text"
          placeholder="Enter your contact no..."
        />
        <input
          className="w-72 border-b-2 p-2 border-black outline-none"
          type="text"
          placeholder="Enter your account no..."
        />
        <input
          className="w-72 border-b-2 p-2 border-black outline-none"
          type="text"
          placeholder="Enter your IFSC code..."
        />
        <input
          className="w-72 border-b-2 p-2 border-black outline-none"
          type="text"
          placeholder="Enter Amount..."
        />
        <Link to={"/withdrawlmessage"}>
          <p className="w-full bg-blue-500 text-center p-2 rounded-xl text-white font-semibold">
            Withdraw
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Withdraw;
