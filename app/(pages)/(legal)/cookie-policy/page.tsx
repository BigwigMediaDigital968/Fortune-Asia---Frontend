import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Mail } from 'lucide-react';
import PageHero from '@/app/Components/Ui/PageHero';
import Link from 'next/link';

const CookiePolicy = () => {
    return (
        <div className="bg-navy-950 min-h-screen text-slate-300 font-sans border-b">
            <PageHero
                subtitle="Digital Transparency"
                title={
                    <>
                        Cookie <span className="text-gold-400 font-serif italic">Policy</span>
                    </>
                }
                description="Understanding how cookies enhance your Dubai luxury real estate browsing experience while protecting your privacy and preferences."
                backgroundImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070"
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
                                <h2 className="text-white font-medium">Cookie Usage Statement</h2>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">
                                    Effective Date: April 06, 2026
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-mono text-gold-500/50">
                            REF: CP-2026-DXB
                        </span>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">

                        {/* 1. Introduction */}
                        <div className="space-y-6">
                            <h3 className="text-white text-2xl font-light flex items-center gap-3">
                                <span className="text-gold-500 font-serif">1.</span> Introduction
                            </h3>
                            <p className="leading-relaxed font-light text-lg">
                                Welcome to{" "}
                                <span className="text-white font-medium">
                                    Fortune Asia Realty
                                </span>
                                . This Cookie Policy explains how cookies and similar tracking
                                technologies are used across our Dubai real estate platform. By
                                continuing to browse our website, you agree to the use of cookies
                                that help us deliver a personalized, secure, and seamless luxury
                                property experience.
                            </p>
                        </div>

                        {/* 2. Types of Cookies */}
                        <div className="space-y-8">
                            <h3 className="text-white text-2xl font-light flex items-center gap-3">
                                <span className="text-gold-500 font-serif">2.</span> Types of
                                Cookies We Use
                            </h3>

                            <p className="leading-relaxed font-light">
                                We utilize cookies and related technologies to improve website
                                functionality, optimize performance, and personalize your Dubai
                                property discovery journey.
                            </p>

                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-gold-500/30 transition-all">
                                    <div className="flex gap-6">
                                        <div className="text-gold-500 font-serif text-2xl italic opacity-50">
                                            A.
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">
                                                Essential Cookies
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                These cookies are necessary for secure website
                                                functionality, inquiry forms, account access, and property
                                                viewing requests across our Dubai real estate platform.
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
                                                Preference & Analytics Cookies
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                These cookies help us understand user interactions,
                                                preferred Dubai communities, luxury property interests, and
                                                browsing behavior to enhance your experience.
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
                                                Marketing Cookies
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                Marketing cookies allow us to present personalized property
                                                recommendations, investment opportunities, and premium
                                                Dubai developments relevant to your interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. How Cookies Improve Experience */}
                        <div className="space-y-8">
                            <h3 className="text-white text-2xl font-light flex items-center gap-3">
                                <span className="text-gold-500 font-serif">3.</span> How Cookies
                                Improve Your Experience
                            </h3>

                            <p className="leading-relaxed font-light">
                                Cookies help us create a smoother and more personalized digital
                                experience for luxury real estate buyers, investors, and residents
                                in Dubai.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gold-400">
                                        <FileText size={18} />
                                        <h4 className="font-medium tracking-wide uppercase text-xs">
                                            Personalized Browsing
                                        </h4>
                                    </div>
                                    <p className="text-sm leading-relaxed">
                                        Cookies remember your preferred property categories, locations,
                                        and saved listings to provide tailored recommendations across
                                        Dubai’s premium real estate market.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gold-400">
                                        <Lock size={18} />
                                        <h4 className="font-medium tracking-wide uppercase text-xs">
                                            Website Security & Performance
                                        </h4>
                                    </div>
                                    <p className="text-sm leading-relaxed">
                                        We use cookies to maintain secure sessions, detect unusual
                                        activity, optimize website performance, and ensure reliable
                                        access to luxury property listings and investor resources.
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
                                    Manage Your Cookie Preferences
                                </h3>

                                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                    You can manage or disable cookies through your browser settings
                                    at any time. Please note that restricting certain cookies may
                                    impact the functionality and personalized features of our Dubai
                                    real estate platform.
                                </p>

                                <Link
                                    href={"/contact"}
                                    className="px-10 py-4 bg-gold-500 text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
                                >
                                    Contact Support
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