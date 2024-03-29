import React from "react";
import { Link } from "react-router-dom";

export default function MessageAfterConfirm() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-[50%]">
        <div className="text-green-600 text-2xl  ">
          Thank you for choosing BMW. Your payment has been successfully
          confirmed . Please note that it may take 2-3 hours for your payment to
          be processed and reflected in your account.
        </div>
        <Link to={"/"}>
          <button className="bg-green-500 cursor-pointer text-white font-bold rounded-xl p-4 px-24 mt-9">
            Back to the Home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
