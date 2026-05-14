import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Mail } from 'lucide-react';
import PageHero from '@/app/Components/Ui/PageHero';
import Link from 'next/link';

const CookiePolicy = () => {
    return (
        <div className="bg-navy-950 min-h-screen text-slate-300 font-sans border-b">
  <PageHero
    subtitle="Legal Framework"
    title={
      <>
        Terms of <span className="text-gold-400 font-serif italic">Use</span>
      </>
    }
    description="Please review the terms governing your access to and use of our Dubai luxury real estate platform and services."
    backgroundImage="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1331&auto=format&fit=crop"
  />

  <section className="py-24 px-6 lg:px-14">
    <div className="max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-white/5">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="p-3 bg-gold-500/10 rounded-xl">
            <Shield className="text-gold-400" size={24} />
          </div>
          <div>
            <h2 className="text-white font-medium">Terms & Conditions</h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              Effective Date: April 06, 2026
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-gold-500/50">
          REF: TOU-2026-DXB
        </span>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">

        {/* 1. Acceptance */}
        <div className="space-y-6">
          <h3 className="text-white text-2xl font-light flex items-center gap-3">
            <span className="text-gold-500 font-serif">1.</span> Acceptance of Terms
          </h3>

          <p className="leading-relaxed font-light text-lg">
            By accessing and using{" "}
            <span className="text-white font-medium">
              Fortune Asia Realty
            </span>
            , you acknowledge that you have read, understood, and agreed to
            comply with these Terms of Use. These terms govern your interaction
            with our Dubai real estate platform, property listings, investment
            services, and digital content.
          </p>
        </div>

        {/* 2. Platform Usage */}
        <div className="space-y-8">
          <h3 className="text-white text-2xl font-light flex items-center gap-3">
            <span className="text-gold-500 font-serif">2.</span> Permitted Use of the Platform
          </h3>

          <p className="leading-relaxed font-light">
            Users are expected to access and use this platform responsibly,
            lawfully, and in accordance with all applicable regulations within
            the United Arab Emirates.
          </p>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
              <div className="flex gap-6">
                <div className="text-gold-500 font-serif text-2xl italic opacity-50">
                  A.
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">
                    Personal & Investment Use
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Property information, investment insights, and digital
                    resources available on this website are intended solely for
                    personal, informational, and legitimate investment
                    purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
              <div className="flex gap-6">
                <div className="text-gold-500 font-serif text-2xl italic opacity-50">
                  B.
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">
                    Restricted Activities
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Users may not misuse the platform through unauthorized data
                    extraction, fraudulent inquiries, disruption of services,
                    or any activity that compromises website integrity or user
                    security.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
              <div className="flex gap-6">
                <div className="text-gold-500 font-serif text-2xl italic opacity-50">
                  C.
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">
                    Listing Accuracy
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    While we strive to maintain accurate and up-to-date
                    property information, availability, pricing, floor plans,
                    and investment projections may change without prior notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Intellectual Property */}
        <div className="space-y-8">
          <h3 className="text-white text-2xl font-light flex items-center gap-3">
            <span className="text-gold-500 font-serif">3.</span> Intellectual Property Rights
          </h3>

          <p className="leading-relaxed font-light">
            All branding, content, visual assets, market insights, and digital
            materials displayed on this website remain the exclusive property
            of Fortune Asia Realty unless otherwise stated.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold-400">
                <FileText size={18} />

                <h4 className="font-medium tracking-wide uppercase text-xs">
                  Protected Content
                </h4>
              </div>

              <p className="text-sm leading-relaxed">
                Users may not reproduce, distribute, modify, or commercially
                exploit any website content, branding, or media assets without
                prior written authorization.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold-400">
                <Lock size={18} />

                <h4 className="font-medium tracking-wide uppercase text-xs">
                  Legal Compliance
                </h4>
              </div>

              <p className="text-sm leading-relaxed">
                All use of this platform must comply with UAE laws, digital
                regulations, and applicable real estate compliance standards
                governing luxury property transactions in Dubai.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Contact */}
        <div className="pt-16 mt-16 border-t border-white/5 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="p-4 bg-gold-500/10 rounded-full mb-6">
              <Mail className="text-gold-500" size={32} />
            </div>

            <h3 className="text-white text-2xl font-light mb-4">
              Questions Regarding These Terms
            </h3>

            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              If you require clarification regarding these Terms of Use or our
              platform policies, our legal and compliance team is available to
              assist you.
            </p>

            <Link
              href={"/contact"}
              className="px-10 py-4 bg-gold-500 text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    );
};

export default CookiePolicy;