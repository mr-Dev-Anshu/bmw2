import React from "react";
import { Link } from "react-router-dom";

const WithdrawlMessage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 justify-center items-center">
      <p className="text-2xl font-bold text-green-500">
        Your request is submitted successfully!
      </p>
      <p className="text-xl font-semibold">
        The amount will be credited in your account in 1-2 buisness days.
      </p>
      <Link to={"/"}>
        <p className="bg-blue-500 p-2 rounded-xl text-white font-semibold px-4">
          Go to Home page
        </p>
      </Link>
    </div>
  );
};

export default WithdrawlMessage;
