import { Settings, MoveRight } from "lucide-react";
export default function LongDiv() {
  return (
    <div className="h-[35vh] w-full py-5">
      <div
        className="h-full w-full flex bg-white p-10 justify-between items-center rounded-2xl border-t-4 border-text-primary group hover:-translate-y-2 transition-all ease-in duration-200 cursor-pointer
      "
      >
        <div className="flex gap-5">
          <div className="h-13 w-13 rounded-lg bg-text-primary flex justify-center items-center">
            <Settings size={24} color="#ffffff" strokeWidth={3} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold group-hover:text-text-primary">
                Personalized Software Solution
              </span>
              <span className="h-fit w-fit  px-3 bg-bg-primary text-text-primary border border-gray-300 rounded-2xl">
                Core Flagship Service
              </span>
            </div>
            <p className="pr-[40%] text-lg text-text-secondary">
              Business software planned around your workflows, from ERP, CRM,
              POS, and SaaS to LMS and management platforms.
            </p>
          </div>
        </div>
        <div className="mb-20 text-text-primary font-bold flex items-center gap-2">
          Explore
          <MoveRight className="mt-1" size={16} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
