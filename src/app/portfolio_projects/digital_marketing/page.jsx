import React from "react";
import Image from "next/image";
import "@/global-css/home.css";

export default function Digital_marketing_website() {
  return (
    <div className="sm:w-1/2 w-4/5 h-fit">
      <Image
        src="/images/portfolio/digital_agency_short.png"
        width={1999}
        height={1000}
        quality={100}
        className="py-24 sm:translate-x-1/2 translate-x-8  xs:translate-x-14 "
      ></Image>
    </div>
  );
}
