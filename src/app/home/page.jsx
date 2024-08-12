"use client";
import "@/global-css/home.css";
import Image from "next/image";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Footer from "@/custom_components/footer";
import Link from "next/link";
const about_us_heading = "ABOUT US";
const our_services_heading = "OUR SERVICES";
const our_client_heading = "OUR CLIENT";
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
      {/* <div className=" hero__container overflow-x-hidden relative z-10 sm:mb-40 xs:mb-20">
        <Image
          className="object-cover absolute h-full w-full"
          src="/images/hero-workers-background-image.png"
          // fill={true}
          width={500}
          height={300}
        ></Image>

        <header className="grid lg:grid-cols-5 md:grid-cols-6 xl:container mx-auto">
          <div className="lg:col-span-3 md:col-span-4  sm:my-44 my-28 md:mx-16  sm:mx-10  mx-6 ">
             <div className="hero__text__container col-span-6 row-start-1 col-start-2 sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem] lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight  font-bold"
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
                className=" sm:text-base text-sm mt-4 pr-12"
              >
                {stringToCharArray(hero_para).map((char) => (
                  <motion.span key={char} variants={text_reveal}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="hero__button__container col-span-6 row-start-3 col-start-2">
              <button className="sm:orange__button-large orange__button-md  lg:mr-12 sm:mr-8 mr-3">
                Contact Us
              </button>
              <button className="sm:transparent__button-large transparent__button-md ">
                Check our Portfolio
              </button>
            </div>
          </div>

          <Image
            className=" md:block hidden z-10 lg:w-24 lg:h-24 md:w-20 md:h-20 translate-y-96"
            src="/images/hero-circle.png"
            width={100}
            height={100}
          ></Image>
          <Image
            className="md:block hidden z-10  lg:w-24 lg:h-24 translate-y-56"
            src="/images/hero-traingle.png"
            width={100}
            height={100}
          ></Image>  
        </header>
      </div> */}
      <div className=" hero__container overflow-x-hidden relative z-60 sm:mb-10 xs:mb-20">
        <Image
          className="object-cover absolute h-full w-full"
          src="/images/hero-workers-background-image.png"
          // fill={true}
          width={200}
          height={100}
          quality={50}
        ></Image>

        <header className="mx-auto md:max-w-3xl sm:max-w-xl  max-w-lg">
          <div className=" sm:my-44 sm:mt-52 my-28 mt-40 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem] lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight  tracking-wide font-semibold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray("WEB DEV & DIGITAL MARKETING").map(
                  (char, index) => (
                    <motion.span key={index} variants={text_reveal}>
                      {char}
                    </motion.span>
                  )
                )}
              </motion.h1>

              <motion.p
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.01 }}
                className=" sm:text-base text-sm mt-4"
              >
                {stringToCharArray(hero_para).map((char, index) => (
                  <motion.span key={index} variants={text_reveal}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="hero__button__container  ">
              <Link
                href={"contact-us"}
                className="sm:orange__button-large orange__button-md  lg:mr-12 sm:mr-8 mr-3"
              >
                Contact Us
              </Link>
              <Link
                href={"/home#portfolio"}
                className="sm:transparent__button-large transparent__button-md "
              >
                Check our Portfolio
              </Link>
            </div>
          </div>
        </header>
      </div>

      <motion.div
        ref={contentRef}
        className="relative overflow-hidden md:-mt-20 sm:-mt-16 xs:-mt-12 mt-5"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <div className="moving__strip_left"></div>
        <div className="moving__strip_right"></div>
        <motion.div
          className="space-x-16 cursor-pointer moving__strip  "
          animate={{
            x: isHovering
              ? animationProgress.current
              : containerWidth.current * -1, // Pause at current position on hover
            // Pause at current position
            transition: { duration: 5, repeat: Infinity, ease: "linear" }, // Customize as needed
          }}
        >
          <span>FRONTEND DEVELOPMENT</span>
          <span>WEB DEVELOPMENT</span>
          <span>BACKEND DEVELOPMENT</span>
          <span>E-COMMERSE WEBSITE</span>
          <span>FRONTEND DEVELOPMENT</span>
          <span>WEB DEVELOPMENT</span>
          <span>BACKEND DEVELOPMENT</span>
          <span>E-COMMERSE WEBSITE</span>
          <span>FRONTEND DEVELOPMENT</span>
          <span>WEB DEVELOPMENT</span>
          <span>BACKEND DEVELOPMENT</span>
          <span>E-COMMERSE WEBSITE</span>
        </motion.div>
        {/* <motion.div
          className="space-x-16 cursor-pointer moving__strip"
          animate={{
            x: isHovering ? animationProgress.current : containerWidth.current, // Pause at current position on hover
            transition: { duration: 5, repeat: Infinity, ease: "linear" }, // Customize as needed
          }}
        >
          <span>DIGITAL MARKETING</span>
          <span>SOCIAL MEDIA</span>
          <span>GOOGLE AD</span>
          <span>SOCIAL MEDIA AD</span>
          <span>INSTAGRAM MARKETING</span>
          <span>DIGITAL MARKETING</span>
          <span>SOCIAL MEDIA</span>
          <span>GOOGLE AD</span>
          <span>SOCIAL MEDIA AD</span>
          <span>INSTAGRAM MARKETING</span>
          <span>DIGITAL MARKETING</span>
          <span>SOCIAL MEDIA</span>
          <span>GOOGLE AD</span>
          <span>SOCIAL MEDIA AD</span>
          <span>INSTAGRAM MARKETING</span>
        </motion.div> */}
      </motion.div>

      <section className="relative md:mt-40 sm:mt-48 xs:mt-32 mt-28">
        <div className="about__us xl:container  xl:mx-auto flex lg:flex-row-reverse   pb-60">
          <div className="about__us-image-container relative">
            <Image
              className="pl-10 w-full ml-auto z-10 absolute"
              src="/images/about-us.png"
              fill={true}
              quality={30}
            ></Image>
          </div>
          <div className="lg:w-1/2 z-50 sm:mb-32 mb-24">
            <div>
              <div className="section__heading justify-start lg:py-28 md:py-24 sm:py-20 pt-20 xs:pb-32 pb-24 md:px-10 px-0">
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {stringToCharArray(about_us_heading).map((char, index) => (
                    <motion.span
                      key={index}
                      variants={text_reveal}
                      transition={{ duration: 0.2 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                <hr />
              </div>
            </div>
            <div className="about__us-text-container">
              <h2>
                We are the team of expert digital marketers and web developers
              </h2>
              <p>
                GROWTHIFY. is a leading Website Development and Digital
                marketing Company in indore with a team of professional
                developers and digital marketer dedicated to working with
                proficient coding skills and expertise that grab consumers’
                attention toward your business online.
              </p>
              <Link
                href={"/about"}
                className="sm:orange__button-large orange__button-md  lg:mr-12 sm:mr-8 mr-3 text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="our-services" className=" 2xl:container relative 2xl:mx-auto ">
        <section className="our__services pb-20 sm:pb-0 sm:mt-5 mt-20 sm:mb-28 mb-6">
          <div className=" xl:container relative xl:mx-auto 2xl:px-20">
            <div className="section__heading-bold  lg:pb-36 md:pb-28 sm:pb-16 pb-8">
              <h1>{our_services_heading}</h1>
            </div>
            {/* <div className="our__services-cards-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-10 px-10"> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={card_animation_parent}
              viewport={{ amount: 0.1 }}
              className="our__services-cards-container grid lg:grid-cols-3 sm:grid-cols-2  gap-8 p-20 px-10 pt-5 lg:w-11/12 md:w-11/12 justify-items-end mx-auto"
            >
              <Link
                href={"web-dev"}
                className="our__services-cards relative z-10"
              >
                <Image
                  src="/images/web_development.png"
                  width={50}
                  height={50}
                  quality={30}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span> Web Development</span>
                  <p>
                    Design your first impression exaltedly! What if you get a
                    beautifully designed website that attracts clients in the
                    first blink? We are an excellent Web development company
                    where our experts create enthralling websites for your
                    business.
                  </p>
                </div>
              </Link>
              <Link
                href={"digital-marketing"}
                className="our__services-cards relative z-10"
              >
                <Image
                  src="/images/digital_marketing.png"
                  width={50}
                  height={50}
                  quality={30}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span> Digital marketing</span>
                  <p>
                    Boost your online presence with precision-targeted campaigns
                    and innovative strategies. Our digital marketing services
                    are designed to engage your audience and drive measurable
                    results
                  </p>
                </div>
              </Link>
              <Link href={""} className="our__services-cards relative z-10">
                <Image
                  src="/images/video-editing.png"
                  width={50}
                  height={50}
                  quality={30}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span>Video Editing</span>
                  <p>
                    Transform raw footage into captivating stories with our
                    expert video editing services. We create visually stunning
                    and impactful videos that leave a lasting impression on your
                    audience.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <motion.div
        ref={contentRefportfolio}
        id="portfolio"
        className="relative overflow-hidden "
        onMouseEnter={handleHoverStartportfolio}
        onMouseLeave={handleHoverEndportfolio}
      >
        <div className="moving__strip_left"></div>
        <div className="moving__strip_right"></div>
        <motion.div
          className="portfolio__strip"
          animate={{
            x: isHoveringportfolio ? animationProgressportfolio.current : 0, // Pause at current position on hover
            // Pause at current position
            transition: { duration: 8, repeat: Infinity, ease: "linear" }, // Customize as needed
          }}
        >
          <span>OUR PORTFOLIO</span>
          <span>WEB DEVELOPMENT</span>
          <span>OUR PORTFOLIO</span>
          <span>DIGITAL MARKETING</span>
          <span>OUR PORTFOLIO</span>
          <span>DIGITAL MARKETING</span>
          <span>OUR PORTFOLIO</span>
          <span>OUR PORTFOLIO</span>
          <span>DIGITAL MARKETING</span>
        </motion.div>
      </motion.div>

      <section className="portfolio relative z-10 mt-20 container mx-auto  mb-28 md:p-12 xs:p-0 p-4">
        <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-16  xs:p-0 p-6 ">
          <div className="space-y-10">
            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/digital_agency_short.png"
                width={300}
                height={100}
              ></Image>
              <div className="portfolio-image-container-info">
                <span> Web Development</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/digital_marketing"}
                    className="orange__button-large mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>
            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/cloud_website_long.png"
                width={300}
                height={300}
              ></Image>
              <div className="portfolio-image-container-info">
                <span>Cloud website</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/cloud_website"}
                    className="orange__button-large  mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/ride_now_long.png"
                width={300}
                height={300}
              ></Image>
              <div className="portfolio-image-container-info">
                <span> Web Development</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/ridenow_website"}
                    className="orange__button-large mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/coaching_website_short.png"
                width={300}
                height={300}
              ></Image>
              <div className="portfolio-image-container-info">
                <span> Web Development</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/coaching_website"}
                    className="orange__button-large mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-10  ">
            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/dashboard_short.png"
                width={300}
                height={300}
              ></Image>
              <div className="portfolio-image-container-info">
                <span> Web Development</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/dashboard"}
                    className="orange__button-large mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>

            <div className="portfolio-image-container">
              <Image
                src="/images/portfolio/coupons_long.png"
                width={300}
                height={300}
              ></Image>
              <div className="portfolio-image-container-info">
                <span> Web Development</span>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                  <Link
                    href={"portfolio_projects/coupons_website"}
                    className="orange__button-large mr-12"
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>
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
      <div className=" bg-stone-950">
        <section className="our__clients xl:container mx-auto">
          {/* <div className="section__heading w-full justify-start sm:py-36 xs:py-28 py-20 sx:px-10 px-5">
            <motion.h1
              initial="hidden"
              whileInView="show"
              transition={{ staggerChildren: 0.1 }}
            >
              {stringToCharArray(our_client_heading).map((char) => (
                <motion.span
                  key={char}
                  variants={text_reveal}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <hr />
          </div> */}
          <div className="section__heading-bold  lg:pb-36 md:pb-28 sm:pb-16 pb-8">
            <h1>{our_client_heading}</h1>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={card_animation_parent}
            viewport={{ amount: 0.2 }}
            className="relative  grid sm:grid-cols-2 gap-5 p-20 px-10 pt-5 lg:w-3/5 md:w-4/5 justify-items-end mx-auto"
          >
            <Image
              className="absolute our__clients-background-light -top-0"
              src="/images/background-light.png"
              width={512}
              height={512}
            ></Image>
            <div className="our__client-cards relative z-10">
              <div className="our__client-cards-imageContainer">
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                ></Image>{" "}
                <Image
                  src="/images/star-half.png"
                  width={100}
                  height={100}
                ></Image>{" "}
                <Image
                  src="/images/star-empty.png"
                  width={100}
                  height={100}
                ></Image>{" "}
              </div>

              <div className="our__client-text-content">
                <span> Arvind Kumar</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis autem eius eveniet libero unde quia deserunt
                  aspernatur modi. Exercitationem, praesentium!
                </p>
              </div>
            </div>
            <div className="our__client-cards relative z-10">
              <div className="our__client-cards-imageContainer">
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-half.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-empty.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
              </div>
              <div className="our__client-text-content">
                <span>Rahul chaudhary </span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis autem eius eveniet libero unde quia deserunt
                  aspernatur modi. Exercitationem, praesentium!
                </p>
              </div>
            </div>
            <div className="our__client-cards relative z-10">
              <div className="our__client-cards-imageContainer">
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-half.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-empty.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
              </div>
              <div className="our__client-text-content">
                <span>Shubham prajapat</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis autem eius eveniet libero unde quia deserunt
                  aspernatur modi. Exercitationem, praesentium!
                </p>
              </div>
            </div>
            <div className="our__client-cards relative z-10">
              <div className="our__client-cards-imageContainer">
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-Filled.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-half.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
                <Image
                  src="/images/star-empty.png"
                  width={100}
                  height={100}
                  quality={30}
                ></Image>{" "}
              </div>
              <div className="our__client-text-content">
                <span> Om tomar</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis autem eius eveniet libero unde quia deserunt
                  aspernatur modi. Exercitationem, praesentium!
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}
