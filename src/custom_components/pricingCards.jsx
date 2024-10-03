"use client";
import Image from "next/image";
import Link from "next/link";
export default function PricingCard({ pricing, features, title }) {
  return (
    <div className="bg-[#FF104F] h-full sm:max-w-96 md:w-full xs:w-4/5 w-11/12  pt-16 pb-10 px-8 rounded-xl sm:mx-0 mx-8">
      <h1 className="xs:text-2xl text-xl  font-extrabold text-center tracking-widest mb-14">
        {title}
      </h1>
      <div className="bg-white  pt-10 pb-16 px-6 rounded-xl text-black ">
        <h3 className="text-3xl font-bold mb-10 text-center  tracking-widest">
          ₹ {pricing}/-
        </h3>
        <ul className="mb-24">
          {features.map((feature, index) => {
            return (
              <li className="flex mb-5 gap-5 items-center  " key={index}>
                <Image
                  width={25}
                  height={25}
                  className="w-5 h-5"
                  src={"/images/check.png"}
                ></Image>
                <span className="text-xs font-semibold">{feature}</span>
              </li>
            );
          })}
        </ul>
        <Link
          href={"/contact-us"}
          className="sm:orange__button-large orange__button-md text-nowrap lg:mr-12 sm:mr-8 mr-3 text-white"
        >
          {" "}
          Contact Us
        </Link>
      </div>
    </div>
  );
}
