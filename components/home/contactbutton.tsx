import { ArrowRight, ArrowUpRight } from "lucide-react";
export default function ContactBtns() {
  return (
    <div className="mt-5 flex justify-center items-center gap-4">
      <button className="h-fit w-fit px-7 py-4 text-white rounded-xl font-semibold gap-1 flex items-center bg-text-primary border-none hover:bg-bg-secondary hover:-translate-y-0.5 group outline-none transition-all ease-in duration-150 cursor-pointer">
        Discuss Your Requirements
        <ArrowRight
          className="group-hover:translate-x-2 transition-all ease-in duration-150"
          size={16}
          color="#ffffff"
          strokeWidth={2}
        />
      </button>
      <button className="h-fit w-fit px-7 py-4 text-black rounded-xl font-semibold gap-1 flex items-center bg-white border-none outline-none cursor-pointer">
        Explore Our Services
        <ArrowUpRight size={16} color="black" strokeWidth={2} />
      </button>
    </div>
  );
}
