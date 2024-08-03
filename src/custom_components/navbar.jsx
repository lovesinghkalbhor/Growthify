import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="w-full absolute  z-[1000] overflow-visible">
        <nav className="flex justify-between items-center w-full z-20 bg-black/30 sm:px-12 px-4">
          {/* button for mobile menu */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden group py-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <div className="  group-hover:translate-x-0 -translate-x-full transition-all duration-300 text-left w-64 h-dvh   text-black text-lg  font-semibold bg-white fixed z-30 top-0 left-0 py-8 px-6">
              <button className="ml-auto block mb-7 group-hover:-translate-x-full">
                <Image src={"/images/close.png"} width={12} height={12}></Image>
              </button>
              <ul className="space-y-6">
                <li>
                  <Link href="/home">HOME</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/digital-marketing" className="block">
                    DIGITAL MARKETING
                  </Link>
                </li>
                <li>
                  <Link href="/web-dev" className="block">
                    WEB DEVELOPMENT{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* company name  */}
          <a className="btn btn-ghost text:lg tracking-widest font-bold sm:text-xl">
            GROWTHIFY
          </a>
          {/* nav for big devices starts from here  */}
          <div className=" hidden lg:flex  ">
            <ul className="leading-[3rem] text-sm font-medium flex gap-12 py-1 ">
              <li>
                <Link href="/home">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li className="relative group">
                <h1>OUR SERVICES </h1>
                <ul className="rounded-md font-normal text-base left-[-1rem] leading-4 text-nowrap space-y-4 group absolute px-5 py-6  text-black hidden group-hover:block   bg-white shadow-md">
                  <Link href="/digital-marketing" className="block">
                    Digital Marketing
                  </Link>
                  <Link href="/web-dev" className="block">
                    Web Development
                  </Link>
                  <Link href="/web-dev" className="block">
                    SEO Service
                  </Link>
                </ul>
              </li>

              <li>
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <a className="orange__button-small">Call us</a>
          </div> */}
        </nav>
        <div className="h-7 z-10 flex items-center bg-white w-fit sm:px-6 rounded-e-full sticky top-0">
          <div className=" text-black flex sm:text-xs text-xs py-1 font-semibold space-x-7 px-5">
            <a
              href={"tel:+91-9340233410"}
              className="flex justify-center items-center hover:text-orange-600 "
            >
              {" "}
              <i>
                <Image
                  src={"/images/flat-phone.png"}
                  width={18}
                  height={18}
                  className="mr-1"
                ></Image>
              </i>{" "}
              +91 9340233410
            </a>
            <a
              href="tel:+91-8815152801"
              className="flex justify-center items-center  hover:text-orange-600 "
            >
              {" "}
              <i>
                <Image
                  src={"/images/flat-phone.png"}
                  width={18}
                  height={18}
                  className="mr-1"
                ></Image>
              </i>{" "}
              +91 8815152801
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
