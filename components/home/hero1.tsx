import Card from "./card";
import ContactBtns from "./contactbutton";
import Glow from "./glowingdot";
import HeroImg from "./heroimage";
import OrgPoints from "./orgpoints";
import { Settings, CodeXml, ChartLine } from "lucide-react";
export default function Hero1() {
  return (
    <section className="mt-[30vh] h-full w-full ">
      <div className=" flex justify-center items-center">
        <h4 className="bg-white flex items-center text-text-primary font-bold py-2 px-4 rounded-3xl gap-2 text-[0.9rem]">
          <Glow />
          PERSONALIZED SOFTWARE SOLUTIONS
        </h4>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <h1 className="text-[6vw] font-bold tracking-tight bg-gradient-to-r from-text-primary to-pink-600 bg-clip-text text-transparent leading-20">
          Best Software House in Pakistan
        </h1>
        <h1 className="text-[6vw] text-center px-[10%] py-0 font-bold leading-18 ">
          For Personalized Software Solutions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center px-[20%] mt-7">
        <p className="text-center text-xl text-[#464646]">
          <span className="font-semibold text-black">
            Your business is different. Your software should be built around it.
          </span>
          Codefine Technologies is a software development company and IT
          consultancy helping startups, founders, business owners, SMEs, and
          enterprises turn ideas, challenges, and requirements into practical
          software solutions.
        </p>
      </div>
      <ContactBtns />
      <OrgPoints />
      <HeroImg />
      <div className=" mt-10 h-full w-full px-10">
        <div className="h-full w-full flex flex-wrap gap-4">
          <Card
            icon={<Settings size={16} strokeWidth={3} />}
            id={1}
            highlight="Flagship Service"
            heading="Personalized Solutions"
            detail="Software built around your business goals, processes, customers, and
          growth plans — not a one-size-fits-all template."
            bottomhead="Explore Personalized Solutions"
          />
          <Card
            id={2}
            icon={<CodeXml size={16} strokeWidth={3} />}
            highlight="Tailored Engineering"
            heading="Build Around Your Workflows"
            detail="We understand your daily operational workflows first, then engineer software that fits the exact way your business runs."
            bottomhead="How We Work"
          />
          <Card
            id={3}
            icon={<ChartLine size={16} strokeWidth={3} />}
            highlight="Product Engineering"
            heading="From Idea to Complete Solution"
            detail="Have a software idea, manual bottleneck, or complex requirements? We help founders and businesses turn goals into reliable digital systems."
            bottomhead="Discuss Your Requirements"
          />
        </div>
      </div>
    </section>
  );
}
