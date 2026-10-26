import Image from "next/image";
import Logo from "@/public/images/TextmarkTransaprentLight.avif";
import { RiInstagramLine, RiLinkedinFill } from "@remixicon/react";
export default function Footer() {
  return (
    <div className="bg-[#191919] h-full w-full rounded-xl ">
      <div className="p-8">
        <Image
          className="w-50"
          src={Logo}
          alt="Secondary Logo of Codefine Technology"
        />
      </div>
      <div className="px-10 flex justify-between mt-10 text-sm border-b border-gray-200/90 pb-10">
        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold">Contact Info</span>
          <span className="text-[#949ca9]">info@codefinetechnologies.com</span>
          <span className="text-[#949ca9]">+92 323-5973947</span>
          <span
            className="
          text-[#949ca9]"
          >
            Headquartered in Pakistan • Serving <br /> USA, UK, Canada &
            Worldwide
          </span>
        </div>
        <div className="text-[#949ca9] flex flex-col gap-2">
          <span className="font-bold text-white">Services</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>Personalized</span>
              <span>Solutions</span>
            </div>
            <div className="h-fit w-fit px-3 py-1 text-xs bg-[#232d3b] text-[#8ec5ff] font-semibold rounded-lg">
              Flagship
            </div>
          </div>
          <span>Web Application Development</span>
          <span>SaaS Development</span>
          <span>Website Development</span>
          <span>Ecommerce Solutions</span>
          <span>View All Services →</span>
        </div>
        <div className="text-[#949ca9] flex flex-col gap-2">
          <span className="font-bold text-white">Services</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>Personalized</span>
              <span>Solutions</span>
            </div>
            <div className="h-fit w-fit px-3 py-1 text-xs bg-[#232d3b] text-[#8ec5ff] font-semibold rounded-lg">
              Flagship
            </div>
          </div>
          <span>Web Application Development</span>
          <span>SaaS Development</span>
          <span>Website Development</span>
          <span>Ecommerce Solutions</span>
          <span>View All Services →</span>
        </div>
        <div className="text-[#949ca9] flex flex-col gap-2">
          <span className="font-bold text-white">Services</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>Personalized</span>
              <span>Solutions</span>
            </div>
            <div className="h-fit w-fit px-3 py-1 text-xs bg-[#232d3b] text-[#8ec5ff] font-semibold rounded-lg">
              Flagship
            </div>
          </div>
          <span>Web Application Development</span>
          <span>SaaS Development</span>
          <span>Website Development</span>
          <span>Ecommerce Solutions</span>
          <span>View All Services →</span>
        </div>
        <div className="text-[#949ca9] flex flex-col gap-2">
          <span className="font-bold text-white">Services</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>Personalized</span>
              <span>Solutions</span>
            </div>
            <div className="h-fit w-fit px-3 py-1 text-xs bg-[#232d3b] text-[#8ec5ff] font-semibold rounded-lg">
              Flagship
            </div>
          </div>
          <span>Web Application Development</span>
          <span>SaaS Development</span>
          <span>Website Development</span>
          <span>Ecommerce Solutions</span>
          <span>View All Services →</span>
        </div>
      </div>
      <div className="h-fit w-full mt-4 text-[#949ca9] flex justify-between items-center px-10">
        <span>© 2026 Codefine Technologies</span>
        <div>Privacy Policy • Sitemap • Customer Support</div>
        <div className="flex gap-2">
          <div className="h-fit w-fit p-2">
            <RiInstagramLine color="white" />
          </div>
          <div className="h-fit w-fit p-2">
            <RiLinkedinFill color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
