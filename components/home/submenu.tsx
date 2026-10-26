"use client";
import { Settings, MessageSquareCode, Globe } from "lucide-react";
import {
  RiCloudFill,
  RiShoppingCart2Fill,
  RiKeyboardBoxFill,
} from "@remixicon/react";
import { useState } from "react";
import Link from "next/link";

export default function Submenu() {
  const [hover, sethover] = useState(0);
  return (
    <div>
      <div
        onMouseEnter={() => {
          sethover(1);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 1 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 1 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <Settings size={16} strokeWidth={2} />
        </div>
        <Link href={`/categories/1`}>
          <div>
            <h5
              className={`font-semibold ${hover === 1 ? "text-[#4a7dc4]" : "text-black"}`}
            >
              Personalized Solution
            </h5>

            <p className="text-gray-400 font-normal text-xs">
              100% Custom Software Build...
            </p>
          </div>
        </Link>
      </div>
      {/* second option */}
      <div
        onMouseEnter={() => {
          sethover(2);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 2 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 2 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <MessageSquareCode size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 2 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            Web App Development
          </h5>
          <p className="text-gray-400 text-xs">Custom Web Applicatons And...</p>
        </div>
      </div>
      {/* third */}
      <div
        onMouseEnter={() => {
          sethover(3);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 3 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 3 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <RiCloudFill size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 3 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            SaaS Development
          </h5>
          <p className="text-gray-400 font-normal text-xs">
            Multi Tenant Cloud Platforms...
          </p>
        </div>
      </div>
      {/* fourth */}
      <div
        onMouseEnter={() => {
          sethover(4);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 4 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 4 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <MessageSquareCode size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 4 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            CRM Development
          </h5>
          <p className="text-gray-400 text-xs font-normal">
            Lead Pipelines,Customer History..
          </p>
        </div>
      </div>
      {/* fifth */}
      <div
        onMouseEnter={() => {
          sethover(5);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 5 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 5 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <RiShoppingCart2Fill size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 5 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            ECommerce Solutions
          </h5>
          <p className="text-gray-400 font-normal text-xs">
            Online stores,Customer Sync...
          </p>
        </div>
      </div>
      {/* sixth */}
      <div
        onMouseEnter={() => {
          sethover(6);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 6 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 6 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <RiKeyboardBoxFill size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 6 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            POS Development
          </h5>
          <p className="text-gray-400 font-normal text-xs">
            100% Custom Software Build...
          </p>
        </div>
      </div>
      {/* seventh */}
      <div
        onMouseEnter={() => {
          sethover(7);
        }}
        onMouseLeave={() => {
          sethover(0);
        }}
        className={`h-[10vh] p-3 rounded-xl w-full flex items-center gap-3 ${hover === 7 ? "bg-gray-100" : "bg-none"} transition-all ease-in duration-100`}
      >
        <div
          className={`h-full ${hover === 7 ? "bg-[#4a7dc4] text-white" : "bg-[#f4f4f4] text-[#4a7dc4]"}  w-9 flex justify-center items-center rounded-xl transition-all ease-in duration-100`}
        >
          <Globe size={16} strokeWidth={2} />
        </div>
        <div>
          <h5
            className={`font-semibold ${hover === 7 ? "text-[#4a7dc4]" : "text-black"}`}
          >
            Website Development
          </h5>
          <p className="text-gray-400 font-normal text-xs">
            100% Custom Software Build...
          </p>
        </div>
      </div>
    </div>
  );
}
