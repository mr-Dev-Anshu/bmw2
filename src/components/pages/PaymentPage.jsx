import React from "react";
import QR from "../../assets/Qr2.jpeg";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PaymentPage = () => {
  return (
    <div className="pt-6">
      <Link to={"/"}>
        <p className="px-6">
          <FaArrowAltCircleLeft size={36} color="blue" />
        </p>
      </Link>
      <p className="text-center text-5xl font-semibolds ">Pay here!</p>
      <p className=" mt-12 text-2xl flex justify-center gap-10 font-semibold ">
        <span>1. Scan QR Code</span> <span> 2. Pay the amount</span>
        <span> 3. Submit the UTR no.</span>
      </p>
      <p className="text-center text-xl font-bold mt-3 text-red-600">
        Minimum Deposit : Rs 500/-
      </p>
      <div className=" flex flex-col justify-center items-center mt-4">
        <img className="h-96 outline rounded-xl" src={QR} alt="" />
        <Link
          to={"/utr"}
          className="p-4 bg-blue-700 font-semibold mt-6 rounded-xl hover:scale-95 text-white duration-200"
        >
          Submit UTR No.
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
