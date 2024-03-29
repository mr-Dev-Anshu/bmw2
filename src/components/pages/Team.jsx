import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center bg-blue-700 h-[100vh]">
      <Link to={"/"} className=" w-full p-2">
        <p>
          <FaArrowAltCircleLeft size={36} color="white " />
        </p>
      </Link>
      <p className="text-3xl text-white font-semibold text-center ">Team</p>
      <div className="w-full flex justify-center items-center flex-col mt-3">
        <p className="font-semibold p-6 bg-slate-200 w-44 rounded-t-xl">
          Team Recharge: 0
        </p>
        <div className="flex justify-center gap-5 bg-slate-100 p-6 rounded-xl">
          <p className="center">
            <span>Team Members</span>
            <span className="font-bold text-2xl">0</span>
          </p>
          <p className="center">
            <span>All team members</span>
            <span className="font-bold text-2xl">0</span>
          </p>
        </div>
      </div>
      <p className="mt-12 text-2xl font-bold text-white">
        No Records Available...
      </p>
    </div>
  );
};

export default Team;
