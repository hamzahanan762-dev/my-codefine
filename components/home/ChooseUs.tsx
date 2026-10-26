import MainHightlight from "./MainHighlight";
import { X, Check } from "lucide-react";
export default function WhyUs() {
  return (
    <section className="mt-50 px-15">
      <MainHightlight
        highlight="Why Choose Us"
        h1="See Why Codefine Technologies"
        h2="Is the Right Choice"
        detail="The right software should make your operations smoother, not force your team into rigid templates. We align engineering directly with how your business operates."
      />
      <div className="h-full w-full flex mt-15 gap-10">
        <div className="h-screen w-1/2 bg-[#f3f3f3] border border-gray-300 rounded-2xl p-10">
          <div className="flex justify-between items-center border-b border-gray-300 pb-3">
            <div className="flex flex-col">
              <h6 className="font-bold text-xl text-[#313031]">
                Common Fit Challenges
              </h6>
              <span className="text-gray-500 text-lg">
                Standard development approach
              </span>
            </div>
            <div className="h-fit w-fit py-1 px-2 rounded-md bg-bg-primary text-text-secondary text-xs font-semibold">
              <span>Conventional</span>
            </div>
          </div>
          <div className="h-full w-full  mt-5 flex flex-col gap-3">
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Disconnected tools can make information harder to follow
              </p>
            </div>
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-white rounded-xl flex gap-2 items-center px-3 border border-gray-200">
              <div className="h-fit w-fit p-1 bg-bg-primary rounded-md">
                <X size={16} color="#676767" strokeWidth={3} />
              </div>
              <p className="font-semibold text-[#676767] text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2 bg-white rounded-2xl p-10 border-3 border-text-primary/50">
          <div className="relative left-[70%] -top-13 inline-block h-fit w-fit text-sm py-1 px-2 bg-text-primary text-white font-bold rounded-full">
            Recommended Partner
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-3 -mt-7">
            <div className="flex flex-col">
              <h6 className="font-bold text-xl text-black">
                Codefine Technologies
              </h6>
              <span className="text-text-primary font-semibold text-lg">
                Personalized software development
              </span>
            </div>
            <div>
              <div className="h-fit w-fit py-1 px-2 rounded-md bg-bg-primary text-text-secondary text-xs font-semibold">
                <span className="font-bold text-text-primary ">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
          <div className="h-full w-full  mt-5 flex flex-col gap-3">
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Disconnected tools can make information harder to follow
              </p>
            </div>
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
            <div className="h-13 w-full bg-[#f4f5fa] rounded-xl flex gap-2 items-center px-3 border border-text-primary/30">
              <div className="h-fit w-fit p-1 bg-text-primary rounded-md">
                <Check size={16} color="#ffffff" strokeWidth={3} />
              </div>
              <p className="font-semibold text-black text-sm">
                Generic tools may not fit a business's specific workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
