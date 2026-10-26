"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export default function Faq() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div
        className={`h-20 ${clicked ? "rounded-tr-2xl rounded-tl-2xl" : "rounded-2xl"} border flex gap-4 items-center justify-between px-5 border-gray-300 w-full bg-white`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`h-6 flex justify-center items-center rounded-full text-white  w-6 font-semibold ${clicked ? "bg-text-primary" : "bg-[#745b5b]/50"}`}
          >
            ?
          </div>
          <p className="text-xl font-bold">
            What are Personalized Software Solutions?
          </p>
        </div>
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
          className={`flex justify-center items-center p-2 rounded-lg  ${clicked ? "rotate-180 bg-text-primary text-white" : "rotate-0 bg-bg-primary text-text-secondary"} transition-all ease-in duration-200 cursor-pointer`}
        >
          <ChevronDown size={16} strokeWidth={3} />
        </div>
      </div>
      <div
        className={`h-full w-full rounded-bl-2xl rounded-br-2xl bg-white px-8 pb-8 pt-2 text-text-secondary ${clicked ? "initial" : "hidden"}`}
      >
        <p>
          Personalized Software Solutions are digital systems designed
          specifically around your business requirements, workflows, customers,
          and goals. Instead of adapting your business to generic software, the
          solution is created around the way your business works.
        </p>
      </div>
    </div>
  );
}
