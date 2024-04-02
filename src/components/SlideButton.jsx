import React, { useState } from "react";
import Card from "./fragments/Card";
import iphone from "../assets/iphone.png"
import ipad from "../assets/ipad.png"
import watch from "../assets/appleWatch.png"
import macbook from "../assets/macbook.png"
import mac from "../assets/macdesk.png"
import bmw from "../assets/bmw.png";
import bmw2 from "../assets/bmw2.png";
import bmw3 from "../assets/bmw3.png";
import bmw4 from "../assets/bmw4.png";
import sold from "../assets/sold.png";

const SlideButton = () => {


  const cardData = [
    {
      title:"Apple Watch",
      price:"800",
      dincome:"10%",
      cycle:"42 days",
      src:watch
    },
    {
      title:"I-pad",
      price:"1600",
      dincome:"10%",
      cycle:"42 days",
      src:ipad
    },
    {
      title:"Iphone",
      price:"3200",
      dincome:"10%",
      cycle:"42 days",
      src:iphone
    },
    {
      title:"Macbook",
      price:"6400",
      dincome:"10%",
      cycle:"42 days",
      src:macbook
    },
    {
      title:"BMW Cars",
      price:"12800",
      dincome:"10%",
      cycle:"42 days",
      src:mac
    },
    {
      title:"BMW Cars",
      price:"25600",
      dincome:"10%",
      cycle:"42 days",
      src:bmw4
    },
  ]
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
         {
          cardData.map((item)=> (
            <Card
            title={item.title} 
            price={item.price}
            dincome= {item.dincome}
            cycle={item.cycle}
            src={item.src}
          />
          ))
         }
        </div>
        <div
          className={`w-[100vw] flex-col gap-4 ${
            showHarvest ? "flex" : "hidden"
          }`}
        >
        {
          cardData.map((item)=> (
            <Card
            title={item.title} 
            price={item.price}
            dincome= {item.dincome}
            cycle={item.cycle}
            src={item.src}
          />
          ))
         }
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
