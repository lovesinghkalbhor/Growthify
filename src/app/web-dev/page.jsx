"use client";
import "@/global-css/web-dev.css";
import Footer from "@/custom_components/footer";

import Image from "next/image";
import Carousel from "@/custom_components/carousel";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stagger } from "framer-motion";
const query_heading = "SEND US A MESSAGE";
const about_us_heading = "ABOUT US";

const our_services_heading = "OUR SERVICES";
const hero_heading = "WEB DEVELOPMENT";
const contact_details_heading = "CONTACT DETAILS";
const hero_para =
  "We help your business to grow online with minimal efforts and helps you to grow your business";

export default function Home() {
  const carousel_image = [
    "/images/business-showcase.png",
    "/images/online-store.png",
    "/images/portfolio.png",
    "/images/blogs.png",
  ];

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
      <div className=" hero__container overflow-x-hidden relative z-60 sm:mb-10 xs:mb-20">
        {/* <Image
          className="object-cover absolute h-full w-full"
          src="/images/hero-workers-background-image.png"
          // fill={true}
          width={500}
          height={300}
        ></Image> */}

        <header className="mx-auto max-w-3xl ">
          <div className=" sm:my-44 sm:mt-52 my-28 mt-40 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem]  lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight  tracking-wider font-bold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray("Web Design and Development Services").map(
                  (char) => (
                    <motion.span key={char} variants={text_reveal}>
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
                {stringToCharArray(
                  "Growthify is a top custom web development company in India providing a wide range of website services. "
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
              <div className="section__heading justify-start lg:py-28 md:py-24 sm:py-20 pt-20 xs:pb-32 pb-24 md:px-10 px-0">
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {stringToCharArray(about_us_heading).map((char) => (
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
              </div>
            </div>
            <div className="about__us-text-container">
              <h2>The Best web development company in India</h2>
              <p>
                Growthify is a top custom web development company in India
                providing a wide range of website services. Our skilled
                developers carefully study your business challenges to create
                websites that match your needs perfectly.
              </p>
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

      <section className="md:block hidden">
        <div className="section__heading-2">
          <h1>Tailored Solutions for Every Industry</h1>
          <p>
            We deliver tailored web solutions across diverse industries. Whether
            in tech, real estate, or beyond, our expertise ensures your vision
            becomes reality. No matter your field, we’re ready to create the
            ideal digital solution for your business.
          </p>
          {/* <hr /> */}
        </div>

        <Carousel>{carousel_image}</Carousel>
      </section>

      {/* CONTACT DETAILS  */}

      <div id="our-services" className=" 2xl:container relative 2xl:mx-auto ">
        <section className="our__services pb-20 sm:pb-0 sm:mt-5 mt-20 sm:mb-0 mb-6">
          <div className=" xl:container relative xl:mx-auto 2xl:px-20">
            <div className="section__heading-2">
              <h1>Here Are The Standard Web devlopment Services We Provide.</h1>
              <p>
                We offer a comprehensive range of web development services
                tailored to your unique needs. From conceptualization to
                deployment, our skilled team delivers exceptional digital
                solutions
              </p>
              {/* <hr /> */}
            </div>
            {/* <div className="our__services-cards-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-10 px-10"> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={card_animation_parent}
              viewport={{ amount: 0.1 }}
              className="our__services-cards-container grid lg:grid-cols-3 sm:grid-cols-2  gap-8 p-20 px-10 pt-5 lg:w-11/12 md:w-11/12 justify-items-end mx-auto"
            >
              <div className="our__services-cards relative z-10">
                <Image
                  src="/images/front-end.png"
                  width={50}
                  height={50}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span>Front-end Development</span>
                  <p>
                    Design your first impression exaltedly! What if you get a
                    beautifully designed website that attracts clients in the
                    first blink? We are an excellent Web development company
                    where our experts create enthralling websites for your
                    business.
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image src="/images/backend.png" width={50} height={50}></Image>{" "}
                <div className="our__services-text-content">
                  <span>Back-end Development</span>
                  <p>
                    Design your first impression exaltedly! What if you get a
                    beautifully designed website that attracts clients in the
                    first blink? We are an excellent Web development company
                    where our experts create enthralling websites for your
                    business.
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image src="/images/Cms.png" width={50} height={50}></Image>{" "}
                <div className="our__services-text-content">
                  <span>CMS Development</span>
                  <p>
                    Design your first impression exaltedly! What if you get a
                    beautifully designed website that attracts clients in the
                    first blink? We are an excellent Web development company
                    where our experts create enthralling websites for your
                    business.
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image
                  src="/images/e-commerce.png"
                  width={50}
                  height={50}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span>E-commerse</span>
                  <p>
                    Design your first impression exaltedly! What if you get a
                    beautifully designed website that attracts clients in the
                    first blink? We are an excellent Web development company
                    where our experts create enthralling websites for your
                    business.
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image
                  className="invert"
                  src="/images/ui-ux.png"
                  width={50}
                  height={50}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span>Web Design</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image
                  src="/images/react-js.png"
                  width={50}
                  height={50}
                ></Image>{" "}
                <div className="our__services-text-content">
                  <span>React js Development</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image src="/images/website.png" width={50} height={50}></Image>{" "}
                <div className="our__services-text-content">
                  <span>HTML/CSS/Javascript</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                </div>
              </div>
              <div className="our__services-cards relative z-10">
                <Image src="/images/Node-Js.png" width={50} height={50}></Image>{" "}
                <div className="our__services-text-content">
                  <span>Node js Development</span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis autem eius eveniet libero unde quia deserunt
                    aspernatur modi. Exercitationem, praesentium!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <section className="xl:container mx-auto lg:px-20 md:px-10 sm:px-10 ">
        <div className="section__heading-bold">
          <h1>Complete Website Solutions</h1>
        </div>

        <div className="zic-zac-text">
          <div className="w-full  space-y-4  mr-auto text-start  px-5 ">
            <h1>Responsive Websites</h1>
            <p>
              Responsive Websites The performance of a website determines its
              potential. Our skilled developers prioritize a website development
              process that guarantees users a seamless experience, quick
              functionality, and smooth usage.
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full   space-y-4  ml-auto text-end      px-5 ">
            <h1>Eye-Catching Designs</h1>
            <p>
              In addition to solid backend development, our team at SuperGeeks
              Soft Tech focuses on creating visually appealing websites for your
              visitors. We dedicate time to crafting interactive interfaces that
              align with your business goals, making your website attractive and
              engaging.
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full   space-y-4  mr-auto text-start      px-5 ">
            <h1>Bug free and secure backend</h1>
            <p>
              Our team prioritizes a bug-free and secure backend for your
              website. We implement thorough testing protocols and utilize
              advanced security measures to ensure your website's backend is
              robust and reliable. This guarantees smooth functionality and
              safeguards your data, providing a solid foundation for your online
              operations.
            </p>
            {/* <hr /> */}
          </div>
          <div className="w-full  space-y-4 ml-auto text-end     px-5 ">
            <h1>CMS-Based Websites</h1>
            <p>
              We integrate user experience seamlessly into CMS-based websites,
              enabling you to edit or add content in one go. This simplifies the
              process and saves time when updating your business website.
            </p>
            {/* <hr /> */}
          </div>

          <div className="w-full   space-y-4 mr-auto text-start     px-5 ">
            <h1>Easy to navigate</h1>
            <p>
              Our developers prioritize user convenience by ensuring easy
              navigation during website development. This makes it quick and
              hassle-free for users to find what they're looking for on your
              website.
            </p>
            {/* <hr /> */}
          </div>
        </div>
      </section>

      <section>
        <div className="section__heading-2">
          <h1>Why Choose Us</h1>
          <p>
            SuperGeeks Soft Tech Pvt. Ltd. guarantees top-notch website
            development projects that meet market standards and give you a
            competitive edge.
          </p>
        </div>
        <div className="orange__big-card-container">
          <div className="orange__big-card">
            <h1>Free Consultation</h1>
            <p>
              We prioritize transparency in our work and processes as a leading
              web development company. Schedule your free consultation today to
              discover how our seamless web development services can elevate
              your business to new heights.
            </p>
          </div>
          <div className="orange__big-card">
            <h1>360° Scalability</h1>
            <p>
              For a comprehensive boost to your business, explore our range of
              services including web and app development, digital marketing, PPC
              marketing, content marketing, and design. We offer a complete
              package tailored for your business success.
            </p>
          </div>
          <div className="orange__big-card">
            <h1>On-Time Delivery</h1>
            <p>
              We understand the value of time and guarantee timely project
              delivery. Our development team is prepared to handle urgent needs,
              and our post-delivery maintenance and support services have proven
              invaluable to many of our clients.
            </p>
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
