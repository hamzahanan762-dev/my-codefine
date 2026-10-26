import { Check } from "lucide-react";
export default function OrgPoints() {
  return (
    <div className="mt-5 flex justify-center items-center">
      <ul className="flex gap-6 font-semibold text-[0.9rem]">
        <li className="flex items-center gap-2">
          <span className="h-3.5 rounded-lg w-3.5 bg-text-primary flex justify-center items-center">
            <Check size={10} color="#ffffff" strokeWidth={2} />
          </span>
          Web Apps, SaaS & CRM
          <span className="h-1 w-1 bg-gray-400 rounded-lg ml-2"></span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-3.5 rounded-lg w-3.5 bg-text-primary flex justify-center items-center">
            <Check size={10} color="#ffffff" strokeWidth={2} />
          </span>
          POS, LMS & Management Systems
          <span className="h-1 w-1 bg-gray-400 rounded-lg ml-2"></span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-3.5 rounded-lg w-3.5 bg-text-primary flex justify-center items-center">
            <Check size={10} color="#ffffff" strokeWidth={2} />
          </span>
          Serving Pakistan, USA, UK, Canada, KSA & worldwide
        </li>
      </ul>
    </div>
  );
}
