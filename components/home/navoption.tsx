"use client";
import Submenu from "./submenu";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

export default function Option() {
  const [hover, sethover] = useState(false);
  return (
    <>
      <li
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
        className={`flex items-center gap-1 transition-all ease-in duration-200 ${hover ? "text-text-primary" : "text-black"}`}
      >
        Services
        <ChevronDown
          className={`${hover ? "rotate-180" : "rotate-0"} transition-all ease-in duration-200`}
          size={16}
          strokeWidth={1}
        />
      </li>
      <div
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
        className={`h-[85vh] absolute lg:top-10 top-5 left-[10vw] lg:left-[24vw] ${hover ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none"} `}
      >
        <div
          className={`mt-[5vh] lg:w-[25vw] w-[50vw] h-[80vh] bg-white p-4 rounded-2xl ${hover ? "translate-y-0" : "translate-y-2"} transition-all ease-in duration-100 `}
        >
          <h5 className=" pb-3 text-gray-400 text-xs flex flex-col gap-2">
            OUR EXPERTISE{" "}
            <span className="w-full h-[0.5px]  bg-gray-200 "></span>
          </h5>
          <div className="-mt-2">
            <Submenu />
          </div>
        </div>
      </div>
    </>
  );
}
