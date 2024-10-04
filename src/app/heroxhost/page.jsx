"use client";
import "@/global-css/about-us.css";
import "@/global-css/digital-marketing.css";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/custom_components/footer";
import Link from "next/link";

export default function Heroxhost() {
  // animation for cards

  const text_reveal = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 1],
    },
  };
  function stringToCharArray(str) {
    // Use the spread operator (...) to unpack the string into an array of characters
    return [...str];
  }

  return (
    <>
      <div className=" hero__container overflow-x-hidden relative z-60 sm:mb-10 xs:mb-20">
        <Image
          className="object-cover absolute h-full w-full"
          src="/images/building.jpg"
          // fill={true}
          width={500}
          height={300}
        ></Image>

        <header className="mx-auto md:max-w-3xl sm:max-w-xl  max-w-lg">
          <div className=" sm:my-44 sm:mt-52 my-28 mt-64 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem]  lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight tracking-wider font-bold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray("25% OFF ON HOSTING").map((char, index) => (
                  <motion.span key={index} variants={text_reveal}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.01 }}
                className=" sm:text-base text-sm mt-4"
              >
                {stringToCharArray(
                  "Grab 25% off on top-tier hosting with HeroXHost! Enjoy fast, secure, and reliable hosting to power your website at an unbeatable price"
                ).map((char, index) => (
                  <motion.span key={index} variants={text_reveal}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="hero__button__container ">
              <Link
                href={"contact-us"}
                className="sm:transparent__button-large transparent__button-md "
              >
                Contact Us
              </Link>
              <a
                href={"https://www.heroxhost.com/"}
                className="sm:orange__button-large orange__button-md  lg:ml-12 sm:ml-8 ml-3"
              >
                HeroXhost Website
              </a>
            </div>
          </div>
        </header>
      </div>

      <section className="xl:container mx-auto lg:px-20 md:px-10 sm:px-10  ">
        <h1 className="text-center mt-28 sm:mb-48 mb-28 xl:text-[2.9rem] lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight  tracking-wide font-semibold">
          Our Partnership with <br></br> HeroXHost
        </h1>

        <div className="zic-zac-text">
          <div className="w-full  space-y-4  mr-auto text-start  px-5 ">
            <h1> Partnership with HeroXHost</h1>
            <p>
              At Growthifyservices, we’ve partnered with HeroXHost to offer
              reliable, high-performance hosting at a flat 20% discount. Enjoy
              secure, efficient hosting that keeps your website running
              smoothly.
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full  space-y-4 ml-auto text-end     px-5 ">
            <h1>Why We Trust HeroXHost</h1>
            <p>
              HeroXHost offers high-speed hosting, excellent uptime, and 24/7
              support. With free SSL, unlimited bandwidth, and easy WordPress
              integration, it’s perfect for businesses looking to scale
              confidently."
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full   space-y-4  mr-auto text-start      px-5 ">
            <h1> Exclusive Hosting Benefits for Growthifyservices Clients</h1>
            <p>
              Through our HeroXHost partnership, Growthifyservices clients get a
              20% discount on all hosting packages. Enjoy high-performance
              hosting, from shared to dedicated servers, tailored to your needs.
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full   space-y-4 ml-auto text-end     px-5 ">
            <h1>How to Redeem the Discount</h1>
            <p>
              Getting your discount is easy! Simply choose any of our web
              development or digital marketing services, and we’ll provide you
              with an exclusive HeroXHost discount code upon checkout. Apply the
              code during your hosting purchase on HeroXHost to unlock your 20%
              discount.
            </p>
            {/* <hr /> */}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
