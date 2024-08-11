"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function WhatsApp() {
  const [openWhatsapp, setopenWhatsapp] = useState(false);
  return (
    <>
      <div className="fixed bottom-5 right-6 z-[1000] transition-all duration-500">
        <div
          className={`w-72 sm:w-80 h-fit p-2  sm:mb-6 mb-2 shadow-2xl rounded-xl  bg-[#152128]    ${
            openWhatsapp ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <button
            className="ml-auto block mb-7 p-3 absolute invert top-2 right-2"
            onClick={() => setopenWhatsapp(false)}
          >
            <Image
              src={"/images/close.png"}
              width={9}
              height={9}
              quality={10}
            ></Image>
          </button>
          <div className="border-b p-4 px-2 border-white/40 flex gap-4">
            <Image
              src={"/images/whatsapp.png"}
              width={20}
              height={20}
              className="w-12 h-12 object-contain"
            ></Image>
            <div>
              <h1 className="text-base font-bold">GROWTHIFY</h1>
              <p className="text-[0.7rem]">Online</p>
            </div>
          </div>
          <div className="bg-gray-700 w-4/5 h-fit m-4 p-3 relative rounded-lg">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-700 absolute top-0 left-[-0.5rem]"></div>
            <p className="text-sm ">
              Hey there! 👨‍💻 Looking for professional web development or digital
              marketing services? We provide customized solutions to help your
              business grow online. Let’s discuss your project and how we can
              make it a success. We are here to assist with any questions you
              have!
            </p>
          </div>
          <a
            target="__blank"
            href="https://wa.me/918815152801?text=Hi! 👋 I'm interested in your web development and digital marketing services. Can we discuss how you can help elevate my business? 🚀"
            className="py-2 mb-4 px-5 bg-green-500 w-fit m-auto rounded-full flex gap-2"
          >
            <Image
              className="invert w-8 h-8"
              src={"/images/white-whatsapp.png"}
              width={20}
              height={20}
            ></Image>
            <h1 className="mt-1 text-base font-semibold">Chat on Whatsapp</h1>
          </a>
        </div>
        <div
          role="button"
          className="rounded-full hover:scale-110 duration-300 w-16 h-16 relative ml-auto "
        >
          <div className="  z-10  w-3 h-3 rounded-full absolute bg-red-600  animate-ping top-1   right-2 "></div>
          <Image
            onClick={() => setopenWhatsapp(true)}
            className={
              "absolute   w-14 h-14  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            }
            src={"/images/whatsapp.png"}
            width={60}
            height={60}
            quality={10}
          ></Image>
        </div>
      </div>
    </>
  );
}
