"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel, { SectionHeading } from "../Ui/SectionLabel";
import { fadeUp, motionContainer } from "@/app/utils/motion";
import { ShieldCheck, Star } from "lucide-react";
import EnquiryForm from "../Ui/EnquiryForm";


export default function LeadForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-400/5 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-navy-900 border border-white/5 rounded-[60px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <SectionHeading subtitle="Contact" title="Connect with Our Experts" centered={false} />
            <p className="text-white/40 text-lg mb-12 font-light leading-relaxed">
              Whether you're looking for an investment or a legacy home, our advisors are here to guide you through Dubai's exclusive market.
            </p>

            <div className="space-y-8">
              {[
                { icon: <ShieldCheck />, title: "Certified Expertise", desc: "RERA registered luxury specialists." },
                { icon: <Star />, title: "Premium Access", desc: "Off-market listings not found elsewhere." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm />

        </div>
      </div>
    </section>
  );
}

