import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reward = () => {
  return (
    <div className="px-12 mb-10">
      {" "}
      <Link to={"/"} className=" w-full p-2">
        <p>
          <FaArrowAltCircleLeft size={36} color="blue" />
        </p>
      </Link>
      <p className="text-3xl font-semibold">Reward</p>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center font-semibold text-xl">
          Invitation Introduction
        </p>
        <p className="text-center mt-4 font-semibold">
          Invitation Commision rewards
        </p>
        <p className="text-center font-bold text-2xl">83434673</p>
        <p className="text-center mt-2 p-2 bg-blue-700 px-8  text-white rounded-t-xl">
          Copy
        </p>
      </div>
      <div className="bg-white grid gap-4">
        <p className="text-xl pl-6 bg-blue-700 rounded-xl text-center p-2 text-white font-extrabold">Rule Description</p>
        <div className="bg-blue-700/[0.5] rounded-xl p-2 flex flex-col gap-2 text-white font-semibold">
          <p>Promotion Commission ration</p>
          <p>Direct Referral (level 1 ) : 45%</p>
          <p>Indirect referral (level 2 ) : 2%</p>
          <p>Indirect recommendation (level 3) : 1%</p>
        </div>
        <p className="bg-blue-700/[0.5] rounded-xl p-2 flex flex-col gap-2 text-white font-semibold">
          If you invite A to invest successfully, you will get a reward of +45%
          of A's total investment. A invites B, you will get 2% of B's Total
        </p>
        <p className="bg-blue-700/[0.5] rounded-xl p-2 flex flex-col gap-2 text-white font-semibold">
          Investement B invites C, You will get 1% of C's total investment
        </p>
      </div>
    </div>
  );
};

export default Reward;
