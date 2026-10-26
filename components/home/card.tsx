"use client";
import { Settings, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
export default function Card(props: any) {
  const [hover, setHover] = useState(false);
  const isMain = props.id === 1;
  const IsSecorTrd = props.id === 2 || props.id === 3;
  const isThird = props.id === 3;
  const threeplus = props.id > 3;

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`w-[30vw] h-[56vh] bg-white p-5 ${isMain ? "border-t-4 border-text-primary" : "border-0 "} ${IsSecorTrd && hover ? "border-t-4 border-text-primary/50" : "border-0"}  rounded-xl flex flex-col gap-5 ${hover ? "-translate-y-3" : "translate-y-0"} $ transition-all ease-in duration-200 cursor-pointer `}
    >
      <div className="w-full flex justify-between items-center ">
        <div
          className={` flex justify-center items-center p-4 rounded-2xl ${isMain ? "bg-text-primary text-white" : "bg-bg-primary text-text-primary"} ${hover ? "bg-text-primary text-white" : "bg-bg-primary text-text-primary"} `}
        >
          {props.icon}
        </div>
        <div
          className={`bg-bg-primary py-1 px-3 rounded-2xl border-[0.5px] ${hover ? "text-text-primary" : "text-text-secondary"} border-text-primary/50  text-xs mt-2 ${threeplus ? "hidden" : "initial"} font-semibold ${isMain ? "text-text-primary" : "text-text-secondary"}`}
        >
          {props.highlight}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h5
          className={`text-2xl font-bold ${hover ? "text-text-primary" : "text-black"}`}
        >
          {props.heading}
        </h5>
        <p
          className={`text-text-secondary pr-7 leading-5.5 ${threeplus ? "text-[0.8rem]" : "text-[1rem]"}`}
        >
          {props.detail}
        </p>
      </div>
      <div
        className={` border-t text-text-primary flex justify-between items-center border-gray-300 pt-3.5 ${isThird || threeplus ? "mt-0" : "mt-12"}`}
      >
        <span className="font-semibold">{props.bottomhead}</span>
        <div>
          <ArrowRight size={16} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
