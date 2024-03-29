import React from "react";
import SliderComponent from "../components/SliderComponent";
import MenuBar from "./common/MenuBar";
import SlideButton from "./SlideButton";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" relative h-[100vh] bg-blue-600">
      <MenuBar />
      <Link to={"/"}>
      <p className="px-6 py-3 text-3xl tracking-widest text-white font-bold cursor-pointer ">
        BMW
      </p>
      </Link>
      <div className="w-full p-2">
        <SliderComponent />
      </div>
      <div className="flex justify-between items-center mt-4 px-12">
        <HashLink to={"https://web.telegram.org/"} target="blank">
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Telegram
          </div>
        </HashLink>
        <HashLink to={"/reward"}>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Reward
          </div>
        </HashLink>
        <HashLink to={"/vip"}>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            VIP
          </div>
        </HashLink>
        <HashLink to={"/team"}>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Team
          </div>
        </HashLink>
      </div>
      <SlideButton />
    </div>
  );
};

export default Home;
