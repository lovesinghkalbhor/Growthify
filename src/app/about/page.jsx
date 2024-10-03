"use client";
import "@/global-css/about-us.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/custom_components/footer";
import Link from "next/link";

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

        <header className="mx-auto md:max-w-3xl sm:max-w-xl  max-w-lg">
          <div className=" sm:my-44 sm:mt-52 my-28 mt-40 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem]  lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight tracking-wider font-bold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray("ABOUT US").map((char, index) => (
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
                  "We specialize in crafting exceptional digital solutions. From websites to marketing strategies, we help businesses thrive online"
                ).map((char, index) => (
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
                href={"/#portfolio"}
                className="sm:transparent__button-large transparent__button-md "
              >
                Check our Portfolio
              </Link>
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
                  {stringToCharArray("Who We Are").map((char, index) => (
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
                We are one of The Most Effective Software Company in india{" "}
              </h2>
              <p>
                We're a top software company in India specializing in mobile
                apps and website development. A Young Entrepreneur founded this
                company to bridge the gap between business needs and the digital
                world. Our goal is to offer comprehensive digital marketing and
                software solutions to help businesses in all industries improve
                their marketing efforts. We started small but grew big thanks to
                our dedicated team of creative and tech-savvy experts. They
                create apps with passion and websites with care. Our focus is on
                delivering high-quality, user-friendly apps and websites
                worldwide. We have thousands of satisfied clients in Australia,
                Canada, New Zealand, UAE the United Kingdom, and the United
                States who rely on us for their digital success. we're not just
                a software company in India – we're your strategic partner in
                digital transformation. Experience the difference with India's
                premier software experts at Super Geeks Soft Tech.
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

      <div className="mt-20">
        <section className="xl:container mx-auto">
          <div className="section__heading-2">
            <h1>Let's Connect Your Brand with Customers</h1>
            <p>
              The bond between your customers, suppliers, investors, and
              employees shapes your brand. We enhance and strengthen this
              relationship.
            </p>
            {/* <hr /> */}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={card_animation_parent}
            viewport={{ amount: 0.2 }}
            className="relative about__us-card-container grid sm:grid-cols-2 lg:gap-y-16 sm:gap-y-10 gap-5 pt-5 px-0  lg:w-1/2 sm:w-9/12 md:w-2/3 w-11/12 justify-items-center mx-auto"
          >
            <div className="about__us-card">
              <span>20 +</span>
              <span>Completed Projects</span>
            </div>
            <div className="about__us-card">
              <span>1 +</span>
              <span>Years of Experience</span>
            </div>
            <div className="about__us-card">
              <span>20 +</span>
              <span>Happy Costumers </span>
            </div>
            <div className="about__us-card">
              <span>4.5 + </span>
              <span>Rating</span>
            </div>
          </motion.div>
        </section>
      </div>

      <section className="more_about_us relative md:my-40 sm:my-48 xs:my-32 my-28">
        <div className="about__us xl:container  xl:mx-auto flex lg:flex-row-reverse pb-60">
          <div className="about__us-image-container relative">
            <Image
              className="pl-10 w-full ml-auto z-10 absolute"
              src="/images/about-us.png"
              fill={true}
            ></Image>
          </div>
          <div className="lg:w-1/2 z-50 sm:mt-20 mt-16">
            <div>
              <div className="section__heading justify-start lg:pb-28 md:pb-24 sm:pb-20 xs:pb-32 pb-24 md:px-10 px-0 ">
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {stringToCharArray("Our Value").map((char, index) => (
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
              <h2>Turning Digital Dreams into Reality </h2>
              <p>
                At SuperGeeks Soft Tech Pvt. Ltd., we aim to transform the
                digital world globally, and our core value is innovation. We
                push boundaries, use the latest technologies, and nurture a
                culture of creativity. Our team is always looking for new
                solutions, providing services that set new industry standards.
                We prioritize transparency, reliability, and accountability in
                everything we do. Collaboration and diversity are crucial for
                us, bringing fresh ideas and innovative solutions. We value each
                person’s contribution, which leads to collective success and
                growth at SuperGeeks Soft Tech.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT DETAILS  */}

      <div id="our-services" className="mt-28">
        <section className="our__services xl:container mx-auto">
          <div className="section__heading-2">
            <h1>What Our services are</h1>
            <p>
              Our services includes Web development, Digital marketing and Video
              editing we have the best team for your requirement{" "}
            </p>
            {/* <hr /> */}
          </div>

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
              ></Image>{" "}
              <div className="our__services-text-content">
                <span> Web Development</span>
                <p>
                  Design your first impression exaltedly! What if you get a
                  beautifully designed website that attracts clients in the
                  first blink? We are an excellent Web development company where
                  our experts create enthralling websites for your business.
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
              ></Image>{" "}
              <div className="our__services-text-content">
                <span> Digital marketing</span>
                <p>
                  Boost your online presence with precision-targeted campaigns
                  and innovative strategies. Our digital marketing services are
                  designed to engage your audience and drive measurable results
                </p>
              </div>
            </Link>
            <Link href={""} className="our__services-cards relative z-10">
              <Image
                src="/images/video-editing.png"
                width={50}
                height={50}
              ></Image>{" "}
              <div className="our__services-text-content">
                <span> Video Editing</span>
                <p>
                  Transform raw footage into captivating stories with our expert
                  video editing services. We create visually stunning and
                  impactful videos that leave a lasting impression on your
                  audience.
                </p>
              </div>
            </Link>
          </motion.div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}
