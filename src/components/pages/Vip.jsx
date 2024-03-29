import React from "react";
import { VipCard } from "../fragments/VipCard";
import v1 from "../../assets/1.png";
import v2 from "../../assets/2.png";
import v3 from "../../assets/3.png";
import v4 from "../../assets/4.png";
import v5 from "../../assets/5.png";
import v6 from "../../assets/6.png";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Vip = () => {
  return (
    <div className="px-12 mb-10">
    <Link to={"/"} className=" w-full p-2">
        <p>
          <FaArrowAltCircleLeft size={36} color="blue " />
        </p>
      </Link>
      <p className="text-3xl font-semibold">VIP</p>
      <div className="grid gap-6 mt-6">
        {" "}
        <VipCard level="1" amount="475" src={v1} />
        <VipCard level="2" amount="7,000" src={v2} />
        <VipCard level="3" amount="25,000" src={v3} />
        <VipCard level="4" amount="60,000" src={v4} />
        <VipCard level="5" amount="2,00,000" src={v5} />
        <VipCard level="6" amount="4,00,000" src={v6} />
      </div>
    </div>
  );
};

export default Vip;
