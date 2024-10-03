

// import { Inter } from "next/font/google";
import "@/global-css/global.css";
import Navbar from "@/custom_components/navbar";
import Contact_us_model from "@/custom_components/contact_usmodel";
import { Montserrat } from 'next/font/google';
import WhatsApp from "@/custom_components/whatsApp";

const Montserrat_font = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-font",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"]
})

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Growthify Services",
  description: "Web Development & Digital marketing Company",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`  ${Montserrat_font.variable}`}>
        <div className="relative">
          {/* grid */}
          <div className="fixed pointer-events-none z-[1] w-screen opacity-10 h-dvh" >
            <div className="flex justify-between h-dvh">
              <div className="bg-gray-100 border"></div>
              <div className="bg-gray-100 border"></div>
              <div className="bg-gray-100 border"></div>
              <div className="bg-gray-100 border"></div>
              <div className="bg-gray-100 border"></div>
            </div>
          </div>
          {/* call us button */}

          <Contact_us_model></Contact_us_model>



          <Navbar></Navbar>


          {children}
        </div>

        <WhatsApp></WhatsApp>
      </body>
    </html >
  );
}
