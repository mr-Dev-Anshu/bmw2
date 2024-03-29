import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaHome, FaTasks, FaUser } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiPriceTagFill } from "react-icons/ri";

const MenuBar = () => {
  return (
    <div className="w-full fixed bottom-0 flex justify-around py-2 bg-white">
      <HashLink to={"/"} className=" menu-button">
        <div className="center">
          <FaHome size={24} />
          <p>Home</p>
        </div>
      </HashLink>
      <HashLink to={"/product"} className=" menu-button">
        <div className="center">
          <RiPriceTagFill size={24} />
          <p>Product</p>
        </div>
      </HashLink>
      <HashLink to={"/tasks"} className=" menu-button">
        <div className="center">
          <FaTasks size={24} />
          <p>Tasks</p>
        </div>
      </HashLink>
      <HashLink to={"/prize"} className=" menu-button">
        <div className="center">
          <BiMoneyWithdraw size={24} />
          <p>Prize</p>
        </div>
      </HashLink>
      <HashLink to={"/profile"} className=" menu-button">
        <div className="center">
          <FaUser size={24} />
          <p>Profile</p>
        </div>
      </HashLink>
    </div>
  );
};

export default MenuBar;
