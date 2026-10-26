import Logo from "@/public/images/TextmarkTransparent.avif";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Option from "@/components/home/navoption";
import ContactNav from "../home/contactus";

export default function Navbar() {
  return (
    <nav className="fixed top-3 w-screen lg:px-15 md:px-15 z-400">
      <div className="h-17 w-full bg-white flex lg:justify-between gap-6 md:justify-between items-center px-6 rounded-xl shadow-sm shadow-gray-300">
        <Image
          className="lg:w-40 md:w-20 w-15"
          src={Logo}
          alt="Codefine Technologies Logo"
        />
        <div>
          <ul className="flex items-center lg:gap-7 md:gap-3 gap-5 font-semibold lg:text-sm md:text-md text-[10px]  cursor-pointer ">
            <li className="text-[#4a7dc4] font-bold transition-all ease-in duration-200">
              Home
            </li>
            <Option />
            <li className="hover:text-[#4a7dc4] transition-all ease-in duration-200">
              About Us
            </li>
            <li className="hover:text-[#4a7dc4] transition-all ease-in duration-200">
              Blogs
            </li>
            <li className="hover:text-[#4a7dc4] transition-all ease-in duration-200">
              Careers
            </li>
            <li className="hover:text-[#4a7dc4] transition-all ease-in duration-200">
              Contact Us
            </li>
            <li className="flex lg:gap-1.5  items-center hover:text-[#4a7dc4] transition-all ease-in duration-200">
              Business Audit{" "}
              <div className="bg-[#ebebeb] lg:block hidden text-[#4a7dc4] rounded-sm h-fit w-fit text-[9px] font-bold px-1 ">
                FREE
              </div>
            </li>
          </ul>
        </div>
        <ContactNav />
      </div>
    </nav>
  );
}
