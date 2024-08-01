"use client";

import React from "react";
import Image from "next/image";

export default function Contact_us_model() {
  return (
    <>
      {" "}
      <button
        className="fixed bottom-5 flex justify-center items-center animate-bounce z-[1000] left-5 w-16 h-16 rounded-full bg-white border border-black "
        onClick={() => document.getElementById("my_modal_3").showModal()}
        open
        modal
      >
        <Image
          src="/images/chat.png"
          className="w-8 h-8"
          width={40}
          height={40}
        ></Image>
      </button>
      <dialog data-theme="light" id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form className="flex w-full   space-x-3">
            <div className="w-full   px-5 py-10 m-auto   bg-white rounded-lg   ">
              <div className="mb-6 text-3xl font-light text-center text-gray-800 ">
                Contact us !
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2  ">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2  ">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-span-2  ">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border shadow-sm border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400   text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Phone no"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" for="name">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your Message"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
