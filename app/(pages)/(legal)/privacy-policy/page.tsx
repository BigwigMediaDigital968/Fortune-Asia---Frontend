import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Mail } from 'lucide-react';
import PageHero from '@/app/Components/Ui/PageHero';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-300 font-sans border-b">
      <PageHero
        subtitle="Legal Excellence"
        title={
          <>
            Privacy <span className="text-gold-400 font-serif italic">Policy</span>
          </>
        }
        description="Transparent data practices to protect your luxury real estate investments and personal identity."
        backgroundImage="https://images.unsplash.com/photo-1509339022327-1e1e25360a41?q=80&w=1170&auto=format&fit=crop"
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
                <h2 className="text-white font-medium">Compliance Statement</h2>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Effective Date: April 06, 2026</p>
              </div>
            </div>
            <span className="text-xs font-mono text-gold-500/50">REF: PP-2026-FA</span>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            
            {/* 1. Introduction */}
            <div className="space-y-6">
              <h3 className="text-white text-2xl font-light flex items-center gap-3">
                <span className="text-gold-500 font-serif">1.</span> Introduction
              </h3>
              <p className="leading-relaxed font-light text-lg">
                Welcome to <span className="text-white font-medium">Fortune Asia</span>. We are committed to protecting your personal data and your privacy. This policy outlines how we handle the information collected through our website and services. By using our platform, you consent to the data practices described in this statement.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="space-y-8">
              <h3 className="text-white text-2xl font-light flex items-center gap-3">
                <span className="text-gold-500 font-serif">2.</span> Information We Collect
              </h3>
              <p className="leading-relaxed font-light">
                We collect information that identifies, relates to, or could reasonably be linked to you. This includes:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
                  <div className="flex gap-6">
                    <div className="text-gold-500 font-serif text-2xl italic opacity-50">A.</div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Personal Identification</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Name, email address, and phone number provided during property inquiries or VIP registration.</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
                  <div className="flex gap-6">
                    <div className="text-gold-500 font-serif text-2xl italic opacity-50">B.</div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Property Preferences</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Interaction data regarding the types of villas, penthouse collections, or commercial spaces you view.</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
                  <div className="flex gap-6">
                    <div className="text-gold-500 font-serif text-2xl italic opacity-50">C.</div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Technical Data</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">IP address, browser type, and navigation patterns utilized via encrypted cookies for security.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. How We Use Data */}
            <div className="space-y-8">
              <h3 className="text-white text-2xl font-light flex items-center gap-3">
                <span className="text-gold-500 font-serif">3.</span> How We Use Your Data
              </h3>
              <p className="leading-relaxed font-light">
                Your information is used to provide a personalized real estate experience, including but not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gold-400">
                    <FileText size={18} />
                    <h4 className="font-medium tracking-wide uppercase text-xs">Service Delivery</h4>
                  </div>
                  <p className="text-sm leading-relaxed">Arranging private tours, virtual walkthroughs, and managing secure property transactions with global investors.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gold-400">
                    <Lock size={18} />
                    <h4 className="font-medium tracking-wide uppercase text-xs">Legal Compliance</h4>
                  </div>
                  <p className="text-sm leading-relaxed">Ensuring all real estate interactions adhere to local and international property laws and anti-money laundering regulations.</p>
                </div>
              </div>
            </div>

            {/* 4. Contact Us */}
            <div className="pt-16 mt-16 border-t border-white/5 text-center">
              <div className="inline-flex flex-col items-center">
                <div className="p-4 bg-gold-500/10 rounded-full mb-6">
                  <Mail className="text-gold-500" size={32} />
                </div>
                <h3 className="text-white text-2xl font-light mb-4">Contact Our Legal Department</h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                  If you have any questions about this Privacy Policy or our treatment of your information, please reach out to our team.
                </p>
                <Link href={"/contact"} className="px-10 py-4 bg-gold-500 text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Submit Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;