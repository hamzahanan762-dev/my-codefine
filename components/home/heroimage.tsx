import Image from "next/image";
import HeroImage from "@/public/images/hero-showcase.avif";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { ArrowUpRight } from "lucide-react";
export default function HeroImg() {
  return (
    <div className="h-[130vh] px-10 mt-13 group relative z-500">
      <div className="h-full w-full bg-white rounded-3xl p-3">
        <div className="h-full w-full rounded-2xl overflow-hidden grid">
          <Image
            className="h-full w-full object-cover col-start-1 row-start-1 "
            src={HeroImage}
            priority
            sizes="100vw"
            alt="An interior office lobby with a white wall featuring a blue circular corporate logo in the center. Flanking the logo are two flags on gold stands: a white flag with blue branding text on the left and the green and white flag of Pakistan on the right. A potted green plant stands near a large glass window on the left, and the ceiling is fitted with track lighting."
          />
          <div className="h-full w-full opacity-0 -translate-y-3 row-start-1 col-start-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in duration-150 cursor-pointer">
            <div className="h-10 w-fit bg-text-primary flex justify-center items-center relative top-5 left-[80%] rounded-3xl gap-2 px-4">
              <RiLinkedinBoxFill color="white" />
              <span className="text-white font-bold">Visit on LinkedIn</span>
              <ArrowUpRight size={16} color="#ffffff" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
