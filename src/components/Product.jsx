import React from "react";
import MenuBar from "./common/MenuBar";
import SlideButton from "./SlideButton";

const Product = () => {
  return (
    <div className=" relative w-full h-[100vh]">
      <MenuBar />
      <p className="px-6 text-2xl font-bold pt-4">Product</p>
      <SlideButton />
    </div>
  );
};

export default Product;
