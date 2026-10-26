"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
export default function ContactNav() {
  const [arrowHover, sethover] = useState(false);
  return (
    <div className="flex items-center gap-2 font-bold text-[#5e5e5e] lg:text-sm md:text-[9px] text-[9px]">
      Talk to us
      <div
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => sethover(false)}
      >
        <div
          className={`bg-[#4a7dc4] h-fit w-fit origin-top-right lg:p-1.5 rounded-md relative overflow-hidden  `}
        >
          <ArrowUpRight
            className={`${arrowHover ? "translate-x-10 -translate-y-10" : "translate-y-0 translate-x-0"} transition-all ease-in duration-300`}
            size={16}
            color="#ffffff"
            strokeWidth={2}
          />
        </div>
        <div
          className={`bg-black h-fit w-fit origin-bottom-left  lg:p-1.5 rounded-md absolute lg:top-5 top-6 ${arrowHover ? "scale-100" : "scale-0"} transition-all ease-in duration-200`}
        >
          <ArrowUpRight size={16} color="#ffffff" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
