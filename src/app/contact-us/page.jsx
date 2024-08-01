"use client";
import "@/global-css/contact-us.css";
import Footer from "@/custom_components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stagger } from "framer-motion";
const query_heading = "SEND US A MESSAGE";
const our_services_heading = "OUR SERVICES";
const hero_heading = "CONTACT US";
const contact_details_heading = "CONTACT DETAILS";
const hero_para =
  "We help your business to grow online with minimal efforts and helps you to grow your business";

export default function Home() {
  // animation for cards
  const card_animation_parent = {
    hidden: { opacity: 0, translateX: -100 },
    show: {
      opacity: [0, 1],
      translateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        // delay: 0.4,
        bounce: 0.3,
      },
    },
  };
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
  // animation for first moving stripe
  const [isHovering, setIsHovering] = useState(false); // Initial state is not hovering
  const contentRef = useRef(null);
  const containerWidth = useRef(0);
  const animationProgress = useRef(0);

  useEffect(() => {
    if (contentRef.current) {
      containerWidth.current = contentRef.current.offsetWidth;
      animationProgress.current = containerWidth.current * -1; // Initial progress
    }
  }, [contentRef]);
  useEffect(() => {
    setIsHovering(true);
  }, []);

  const handleHoverStart = () => {
    setIsHovering(false);
  };

  const handleHoverEnd = () => {
    setIsHovering(true);
  };

  // animation for protfolio moving stipe
  const [isHoveringportfolio, setIsHoveringportfolio] = useState(false); // Initial state is not hovering
  const contentRefportfolio = useRef(null);
  const containerWidthportfolio = useRef(0);
  const animationProgressportfolio = useRef(0);

  useEffect(() => {
    if (contentRefportfolio.current) {
      containerWidthportfolio.current = contentRefportfolio.current.offsetWidth;
      animationProgressportfolio.current = containerWidthportfolio.current * -1; // Initial progress
    }
  }, [contentRefportfolio]);
  useEffect(() => {
    setIsHoveringportfolio(true);
  }, []);

  const handleHoverStartportfolio = () => {
    setIsHoveringportfolio(false);
  };

  const handleHoverEndportfolio = () => {
    setIsHoveringportfolio(true);
  };
  return (
    <>
      <div className=" hero__container overflow-x-hidden relative z-60  ">
        {/* <Image
          className="object-cover absolute h-full w-full"
          src="/images/hero-workers-background-image.png"
          // fill={true}
          width={500}
          height={300}
        ></Image> */}

        <header className="mx-auto max-w-3xl ">
          <div className="  sm:my-44 sm:mt-52 my-28 mt-40 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem]  lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight  tracking-wider font-bold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray(hero_heading).map((char) => (
                  <motion.span key={char} variants={text_reveal}>
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
                  "We're here to assist you! Have questions, need more information, or ready to start a project? Reach out to us using the contact form below or through the provided details."
                ).map((char) => (
                  <motion.span key={char} variants={text_reveal}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="hero__button__container  ">
              <button className="sm:orange__button-large orange__button-md  lg:mr-12 sm:mr-8 mr-3">
                Contact Us
              </button>
              <button className="sm:transparent__button-large transparent__button-md ">
                Check our Portfolio
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* CONTACT DETAILS  */}

      <div id="our-services">
        <section className="our__services xl:container mx-auto">
          <div className="section__heading-bold -mb-16">
            <h1>Contact details</h1>

            {/* <hr /> */}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={card_animation_parent}
            viewport={{ amount: 0.1 }}
            className="relative  grid sm:grid-cols-2 gap-5 p-20 px-10 pt-5 lg:w-3/5 md:w-4/5 justify-items-end mx-auto"
          >
            <div className="our__services-cards relative z-10">
              <Image
                src="/images/web_development.png"
                width={50}
                height={50}
              ></Image>{" "}
              <div className="our__services-text-content">
                <span>Growthify</span>
                <p>
                  We are digital agency that provides web development and
                  digital marketing services to customers at very low cost
                </p>
              </div>
            </div>
            <div className="our__services-cards relative z-10">
              <Image src="/images/phone.png" width={50} height={50}></Image>{" "}
              <div className="our__services-text-content">
                <span>Phone</span>
                <p>
                  +91 9340233410
                  <br></br>
                  <br></br>
                  +91 88151 52801
                </p>
              </div>
            </div>
            <div className="our__services-cards relative z-10">
              <Image
                src="/images/email-icon.png"
                width={50}
                height={50}
              ></Image>{" "}
              <div className="our__services-text-content">
                <span>Email</span>
                <p>
                  servicesgrowthify@gmail.com
                  <br></br>
                  <br></br>
                  lovesinghkalbhor@gmail.com
                </p>
              </div>
            </div>
            <div className="our__services-cards relative z-10">
              <Image src="/images/location.png" width={50} height={50}></Image>{" "}
              <div className="our__services-text-content">
                <span>Location</span>
                <p>
                  157b Vaibhav lakshmi nagar near by reddison hotel vijay
                  nagar indore 452010
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <section className="relative md:mt-40 sm:mt-48 xs:mt-32 mt-28">
        <div className="about__us xl:container  xl:mx-auto flex lg:flex-row-reverse   pb-60">
          <div className="about__us-image-container relative">
            <Image
              className="pl-10 w-full ml-auto z-10 absolute"
              src="/images/about-us.png"
              fill={true}
            ></Image>
          </div>
          <div className="lg:w-1/2 z-50 sm:mb-32 mb-24">
            <div>
              <div className="section__heading justify-start lg:pb-20 md:pb-20 sm:pb-18 pt-20 xs:pb-28 pb-24 md:px-10 px-0">
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {stringToCharArray(query_heading).map((char) => (
                    <motion.span
                      key={char}
                      variants={text_reveal}
                      transition={{ duration: 0.2 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                {/* <hr /> */}
              </div>
            </div>
            <div className="about__us-text-container">
              {/* <h2>
                we are the team of expert digital marketers and web developers
              </h2>
              <p>
                Extreme dynamic range on the 12.9-inch iPad Pro.4 The
                Liquid Retina XDR display delivers true-to-life detail with a
                1,000,000:1 contrast ratio, great for viewing and editing HDR
                photos and videos or enjoying your favorite movies and TV shows.
                It also features a breathtaking 1000 nits of full‑screen
                brightness and 1600
              </p> */}
              <div className="space-y-10 mb-20 ">
                <label class="block max-w-96">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-black">
                    Your Name
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-2 lg:bg-white bg-transparent border-b-2  border-gray-800 placeholder-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full   sm:text-sm focus:ring-1"
                    placeholder="joy doe"
                  />
                </label>
                <label class="block max-w-96">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-black">
                    Your Email{" "}
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-2 lg:bg-white bg-transparent border-b-2  border-gray-800 placeholder-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full   sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label class="block max-w-96">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-black">
                    Subject{" "}
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-2 lg:bg-white bg-transparent border-b-2  border-gray-800 placeholder-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full   sm:text-sm focus:ring-1"
                  />
                </label>
                <label class="block max-w-96">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-black">
                    Your Name
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-2 lg:bg-white bg-transparent border-b-2  border-gray-800 placeholder-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full   sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <button className="sm:orange__button-large orange__button-md  lg:mr-12 sm:mr-8 mr-3 text-white">
                Contact Us
              </button>
            </div>
            {/* <div className="md:flex hidden flex-row-reverse  pb-60">
              <div className="about__us-card-container w-1/2 grid grid-cols-2 gap-8 gap-x-0">
                <div className="about__us-card">
                  <span>10 +</span>
                  <span>Completed Projects</span>
                </div>
                <div className="about__us-card">
                  <span>100 +</span>
                  <span>Completed Projects</span>
                </div>
                <div className="about__us-card">
                  <span>10 +</span>
                  <span> projects</span>
                </div>
                <div className="about__us-card">
                  <span>10 +</span>
                  <span>projects</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="portfolio__strip overflow-hidden mt-10">
        <span>OUR</span>
        <span>PORTFOLIO</span>
        <span>OUR</span>
        <span>DIGITAL MARKETING</span>
        <span>WEB</span>
        <span>DEVELOPMENT</span>
      </section> */}

      {/* <section className="query__section">
        <h2>
          {" "}
          Have any project in <br></br>mind
        </h2>
        <button className="orange__button-large">Let's Talk</button>
      </section> */}

      <Footer></Footer>
    </>
  );
}
