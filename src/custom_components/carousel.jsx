import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

export default function Carousel({ children }) {
  const crousal_name = [
    "Business showcase",
    "Online store",
    "Portfolio",
    "Blog",
  ];
  let [count, setcount] = useState(0);
  const next = () => {
    if (count < children.length - 1) {
      setcount((prevCount) => prevCount + 1);
    } else {
      setcount(0);
    }
  };

  const previous = () => {
    if (count > 0) {
      setcount((prevCount) => prevCount - 1);
    } else {
      setcount(children.length - 1);
    }
  };

  return (
    <>
      <div className="flex justify-between mb-16  max-w-xl mx-auto">
        {crousal_name.map((Name, nameindex) => (
          <h1
            key={nameindex}
            className={`text-base border-b-2 pb-4 ${
              count === nameindex
                ? "text-orange-600 border-orange-600"
                : "text-gray-300"
            }`}
          >
            {Name}
          </h1>
        ))}
      </div>
      <div className="relative">
        <div className="h-full w-40 absolute  bg-gradient-to-r from-black z-50"></div>
        <div className="h-full w-40 absolute right-0 bg-gradient-to-l from-black z-50"></div>
        <button
          onClick={previous}
          className="absolute  focus:w-7 focus:h-7  hover:w-9 hover:h-9 transition-all duration-200 w-8 h-8 bg-orange-600 top-1/2 left-4 -translate-y-1/2 rounded-full z-50"
        >
          <Image
            src={"/images/icons8-arrow-50.png"}
            className="rotate-180"
            width={50}
            height={50}
          ></Image>
        </button>
        <button
          onClick={next}
          className="absolute focus:w-7 focus:h-7  hover:w-9 hover:h-9 transition-all duration-200 w-8 h-8 bg-orange-600 top-1/2 right-4 -translate-y-1/2 rounded-full z-50"
        >
          {" "}
          <Image
            src={"/images/icons8-arrow-50.png"}
            width={50}
            height={50}
          ></Image>
        </button>
        <div className={`flex  relative overflow-hidden `}>
          {children.map((image, index) => (
            <>
              <div
                key={index}
                className="relative min-w-fit transition-all duration-200"
                style={{ transform: `translateX(-${count * 100}%)` }}
              >
                <img
                  src={image}
                  className="object-cover "
                  alt={`Carousel Image ${index + 1}`}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
