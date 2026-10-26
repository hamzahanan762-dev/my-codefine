import LongDiv from "./longdetaildiv";
import MainHightlight from "./MainHighlight";
import Card from "./card";
import { CodeXml } from "lucide-react";
export default function Hero2() {
  return (
    <section>
      <div className="mt-50">
        <MainHightlight
          highlight="CORE SERVICES & IT CONSULTANCY"
          h1="Software Solutions Built Around"
          h2="Your Business, Not Templates"
          detail="Your business is different. Your software should be built around it. We
        engineer business-focused digital systems designed around your
        processes, workflows, and customers to solve real operational
        bottlenecks and drive growth."
        />
      </div>
      <div className="px-10 flex flex-wrap gap-3">
        <LongDiv />
        <Card
          id={4}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={5}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={6}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={7}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={8}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={9}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={10}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={11}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={12}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
        <Card
          id={13}
          highlight=""
          heading="Full-Stack Web Application Development"
          detail="Secure, high-performing web applications built with modern frontend frameworks and robust backend APIs, designed around the specific tasks your business needs to run."
          icon={<CodeXml size={16} strokeWidth={3} />}
        />
      </div>
    </section>
  );
}
