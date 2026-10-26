import Image from "next/image";
import Navbar from "@/components/common/navbar";
import Hero1 from "@/components/home/hero1";
import HeroBackground from "@/components/home/heroBackground";
import Hero2 from "@/components/home/hero2";
import WhyUs from "@/components/home/ChooseUs";
import Technologies from "@/components/home/ourtech";
import Faqs from "@/components/home/faqs";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBackground />
        <Hero1 />
        <Hero2 />
        <WhyUs />
        <Technologies />
        <Faqs />
      </main>
      <footer className="h-[95vh] mt-30 w-full bg-[#262626] p-10">
        <Footer />
      </footer>
    </>
  );
}
