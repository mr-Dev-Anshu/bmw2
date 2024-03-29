import React, { useState } from "react";
import Card from "./fragments/Card";
import bmw from "../assets/bmw.png";
import bmw2 from "../assets/bmw2.png";
import bmw3 from "../assets/bmw3.png";
import bmw4 from "../assets/bmw4.png";
import sold from "../assets/sold.png";

const SlideButton = () => {
  const [showProduction, setShowProduction] = useState(true);
  const [showHarvest, setShowHarvest] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const handleProductionClick = () => {
    setShowProduction(true);
    setShowHarvest(false);
    setShowGift(false);
  };

  const handleHarvestClick = () => {
    setShowHarvest(true);
    setShowProduction(false);
    setShowGift(false);
  };

  const handleGiftClick = () => {
    setShowGift(true);
    setShowProduction(false);
    setShowHarvest(false);
  };

  return (
    <div className="bg-white mt-4 rounded-t-xl pb-24">
      <div className="flex justify-between px-4 pt-4">
        <p
          onClick={handleProductionClick}
          className={`buttons rounded-l-md ${
            showProduction ? "bg-red-600" : "bg-blue-600"
          } text-white font-semibold  w-full cursor-pointer`}
        >
          Production
        </p>
        <p
          onClick={handleHarvestClick}
          className={`buttons ${
            showHarvest ? "bg-red-600" : "bg-blue-600"
          } text-white font-semibold  w-full cursor-pointer`}
        >
          Harvest
        </p>
        <p
          onClick={handleGiftClick}
          className={`buttons rounded-r-md ${
            showGift ? "bg-red-600" : "bg-blue-600"
          } text-white font-semibold  w-full cursor-pointer`}
        >
          Gift
        </p>
      </div>
      <div className="flex px-4 mt-4">
        <div
          className={`w-[100vw] flex-col gap-4 ${
            showProduction ? "flex" : "hidden"
          }`}
        >
          <Card
            title="BMW Cars"
            price="475"
            dincome="203"
            tincome="8550"
            cycle="42 days"
            src={bmw}
          />
          <Card
            title="BMW Cars"
            price="1770"
            dincome="906"
            tincome="37170"
            cycle="41 days"
            src={bmw}
          />
          <Card
            title="BMW Cars"
            price="4850"
            dincome="2788"
            tincome="111550"
            cycle="40 days"
            src={bmw}
          />
          <Card
            title="BMW Cars"
            price="15000"
            dincome="10384"
            tincome="405000"
            cycle="39 days"
            src={bmw}
          />
          <Card
            title="BMW Cars"
            price="30000"
            dincome="22105"
            tincome="840000"
            cycle="38 days"
            src={bmw}
          />
          <Card
            title="BMW Cars"
            price="60000"
            dincome="50270"
            tincome="1860000"
            cycle="37 days"
            src={bmw}
          />
        </div>
        <div
          className={`w-[100vw] flex-col gap-4 ${
            showHarvest ? "flex" : "hidden"
          }`}
        >
          <Card
            title="BMW No.1 "
            price="277"
            dincome="427"
            tincome="427"
            cycle="1 day"
            src={bmw2}
          />
          <Card
            title="BMW No.2 "
            price="1287"
            dincome="815"
            tincome="2445"
            cycle="3 days"
            src={bmw2}
          />
          <Card
            title="BMW No.3"
            price="4500"
            dincome="2959"
            tincome="8877"
            cycle="3 days"
            src={bmw2}
          />
          <Card
            title="BMW No.4"
            price="15800"
            dincome="10000"
            tincome="30000"
            cycle="3 days"
            src={bmw2}
          />
          <Card
            title="BMW No.5"
            price="32200"
            dincome="20000"
            tincome="60000"
            cycle="3 days"
            src={bmw2}
          />
          <Card
            title="BMW No.6"
            price="52000"
            dincome="45266"
            tincome="135800"
            cycle="3 days"
            src={bmw2}
          />
        </div>
        <div
          className={`w-[100vw] flex-col gap-4 ${showGift ? "flex" : "hidden"}`}
        >
          <Card
            title="Gift"
            price="288"
            dincome="18"
            tincome="435"
            cycle="24 Hours"
            src={bmw3}
          />
          <Card
            title="Gift"
            price="1355"
            dincome="838"
            tincome="2515"
            cycle="3 days"
            src={sold}
          />
          <Card
            title="Gift"
            price="4250"
            dincome="2859"
            tincome="8579"
            cycle="3 days"
            src={bmw4}
          />
          <Card
            title="Gift"
            price="10000"
            dincome="7000"
            tincome="21000"
            cycle="3 days"
            src={sold}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideButton;
