"use client";
import "@/global-css/about-us.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/custom_components/footer";
import Link from "next/link";
import PricingCard from "@/custom_components/pricingCards";

export default function Pricing() {
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
          <div className=" sm:my-44 sm:mt-52 my-28 mt-64 md:mx-16 text-center sm:mx-auto  mx-6 ">
            {/* <div className="grid-cols-3 my-44 mx-20 max-w-2xl"> */}
            <div className="hero__text__container  sm:mt-0 mt-40">
              <motion.h1
                className="xl:text-[2.9rem]  lg:text-[2.9rem] md:text-3xl sm:text-4xl xs:3xl text-2xl  lg:leading-tight tracking-wider font-bold"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 0.02 }}
              >
                {stringToCharArray("OUR PRICING").map((char, index) => (
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
                  "Flexible pricing to suit your needs. Whether it's a website or a full marketing strategy, our packages offer great value for any budget."
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

      <section className="xl:container mx-auto lg:px-10 md:px-10 sm:px-10 ">
        <div className="section__heading-2">
          <h1>Our Most Affordable Digital Marketing Pricing</h1>
          <p>
            Discover our most affordable digital marketing packages, designed to
            deliver high-impact results without breaking your budget. Get expert
            services tailored to your business needs at competitive prices
          </p>
          {/* <hr /> */}
        </div>

        <div className="grid justify-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap-y-16 place-items-center">
          <PricingCard
            title={"Basic"}
            pricing={"3,449"}
            features={[
              "8 Post",
              "2 Reels",
              "Facebook Handling",
              "Instagram Handling",
              "Contnet Writing",
            ]}
          ></PricingCard>
          <PricingCard
            title={" Silver"}
            pricing={"5,799"}
            features={[
              "10 Post",
              "3 Reels",
              "Facebook Handling",
              "Instagram Handling",
              "Contnet Writing",
              "7 instagram Ads",
            ]}
          ></PricingCard>
          <PricingCard
            title={"Golden"}
            pricing={"8,999"}
            features={[
              "13 Post",
              "4 Reels",
              "Facebook Handling",
              "Instagram Handling",
              "Contnet Writing",
              "12 instagram Ads",
            ]}
          ></PricingCard>
          <PricingCard
            title={"Platinum"}
            pricing={"13,999"}
            features={[
              "16 Post",
              "6 Reels",
              "Facebook Handling",
              "Instagram Handling",
              "Contnet Writing",
              "16 instagram Ads",
            ]}
          ></PricingCard>
        </div>
      </section>

      <section className="xl:container mx-auto lg:px-10 md:px-10 sm:px-10 sm:mt-20">
        <div className="section__heading-2">
          <h1>Our Most Affordable Web devlopment Pricing</h1>
          <p>
            Get top-quality web development at unbeatable prices. Our affordable
            packages offer tailored solutions to help your business thrive
            online, plus enjoy an exclusive 25% discount on HeroXHost hosting
          </p>
          {/* <hr /> */}
        </div>

        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap-y-16 place-items-center">
          <PricingCard
            title={
              <span>
                Single page <br /> Website
              </span>
            }
            pricing={"4,920"}
            features={[
              "1 Year Hosting + Domain + SSL  Certificate Free",
              "25% OFF on hosting ",
              "1 Business Email",
              "1 Year Free Maintanance",
              "Basic SEO",
              "Performance Optimization",
              "Custom Design & Development",
              "Content Writing",
            ]}
          ></PricingCard>
          <PricingCard
            title={
              <span>
                {" "}
                4 page <br /> Website
              </span>
            }
            pricing={"6,599"}
            features={[
              "1 Year Hosting + Domain + SSL  Certificate Free",
              "25% OFF on hosting ",
              "3 Business Email",
              "1 Year Free Maintanance",
              "Basic SEO",
              "Performance Optimization",
              "Custom Design & Development",
              "Content Writing",
              "Free Google listing",
            ]}
          ></PricingCard>
          <PricingCard
            title={" Website Up to 10 pages"}
            pricing={"8,999"}
            features={[
              "1 Year Hosting + Domain + SSL  Certificate Free",
              "25% OFF on hosting ",
              "3 Business Email",
              "1 Year Free Maintanance",
              "Basic SEO",
              "Performance Optimization",
              "Custom Design & Development",
              "Content Writing",
              "Free Google listing",
              "24/7 Support",
              "Rs 500 Per Page for extra pages",
            ]}
          ></PricingCard>
          <PricingCard
            title={"E-commerce Website"}
            pricing={"11,999"}
            features={[
              "1 Year Hosting + Domain + SSL  Certificate Free",
              "25% OFF on hosting ",
              "5 Business Email",
              "1 Year Free Maintanance",
              "Basic SEO",
              "Performance Optimization",
              "Custom Design & Development",
              "Content Writing",
              "Free Google listing",
              "24/7 Support",
              "Payment integration",
              "20 GB Storage for Products images",
            ]}
          ></PricingCard>
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
