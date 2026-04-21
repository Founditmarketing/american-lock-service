import { Award, Briefcase, FileCheck, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Briefcase, label: "Certified, Licensed & Insured" },
  { icon: FileCheck, label: "Proud ALOA Member" },
  { icon: ThumbsUp, label: "Free Estimates" }
];

export default function TrustBar() {
  return (
    <div className="bg-navy py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-3 text-white">
            <badge.icon className="w-8 h-8 text-crimson" />
            <span className="font-sans font-black text-sm md:text-base uppercase tracking-widest">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
