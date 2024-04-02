import React from "react";
import { Link } from "react-router-dom";

export default function SuccessfullBuy() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-16 h-screen text-4xl font-bold ">
        Congratulations 🎉 Purchase Successful !
        <Link
          className="bg-green-600  rounded text-white  font-normal p-3 text-center"
          to={"/"}
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
