import { ChevronDown } from "lucide-react";
import Faq from "./faq";
export default function Faqs() {
  return (
    <section className="mt-50 h-full w-full">
      <div
        className="flex justify-center items-center flex-col gap-4
      "
      >
        <div className="text-text-primary font-semibold h-fit w-fit py-1 px-4 bg-[#e0e0e0] border border-text-primary/50 rounded-full">
          COMMON QUESTIONS
        </div>
        <div className="flex text-5xl gap-3">
          <h5 className="font-bold">Frequently Asked</h5>
          <div className="font-bold bg-linear-to-r from-text-primary to-pink-700 bg-clip-text text-transparent">
            Questions
          </div>
        </div>
        <p className="text-text-secondary px-[28%] text-center text-lg">
          Have questions about personalized software development or working with
          Codefine Technologies? Here are answers to some of the questions
          businesses ask us most often.
        </p>
      </div>
      <div className="h-full w-full px-45 mt-15">
        <div className="h-full w-full flex flex-col gap-3">
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
        </div>
      </div>
    </section>
  );
}
