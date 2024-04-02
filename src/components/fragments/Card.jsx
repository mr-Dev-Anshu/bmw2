import React from "react";
import { Link } from "react-router-dom";

const Card = ({ price, dincome, title, tincome, cycle, src }) => {

  
  return (
    <div className="flex justify-between bg-gray-200 rounded-xl">
      <div className="flex gap-6">
        <div className=" grid place-items-center py-2 p-4">
          <img src={src} className="h-24 w-40 object-contain" alt="" />
          <p className="font-bold text-2xl ">₹{price}</p>
        </div>
        <div className="grid place-items-start py-4 font-semibold">
          <p className="font-extrabold tracking-wider">{title}</p>
          <p>Daily Income: ₹{dincome}</p>
         
          <p>Cycle: {cycle}</p>
        </div>
      </div>
      <div className="grid place-items-center  h-full pr-12 ">
        <Link to={`/confirm/${price}`}>
        <button  className="p-4 bg-blue-700 rounded-xl text-white font-semibold">
          Buy
          Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
