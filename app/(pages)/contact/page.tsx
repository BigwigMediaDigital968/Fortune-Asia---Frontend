"use client";

import PageHero from "@/app/Components/Ui/PageHero";
import EnquiryForm from "@/app/Components/Ui/EnquiryForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";

const CONTACT_DETAILS = [
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Visit Our Office",
        details: ["Level 28, Marina Plaza,", "Dubai Marina, Dubai, UAE"],
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Us",
        details: ["Main Office: +971 4 123 4567", "Sales Desk: +971 4 765 4321"],
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "WhatsApp",
        details: ["International: +971 50 123 4567"],
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Us",
        details: ["General Inquiry: info@fortuneasia.com", "Sales Desk: sales@fortuneasia.com"],
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Office Hours",
        details: ["Monday - Saturday", "09:00 AM - 06:00 PM"],
    },
];

export default function ContactPage() {
    return (
        <main className="bg-navy-950 min-h-screen text-white">
            {/* Hero Section */}
            <PageHero
                subtitle="Contact Us"
                title={<>Let's Start a <span className="text-gold-400">Conversation</span></>}
                description="Whether you're looking for your next investment or your dream home, our world-class advisors are ready to guide you."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            />

            {/* Contact Content Section */}
            <section className="py-24 px-6 md:px-14">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Contact Details */}
                    <div className="lg:w-1/2 space-y-16">
                        <div>
                            <span className="text-gold-400 font-bold text-xs uppercase tracking-[0.4em] block mb-4">
                                Get in Touch
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                We're Here to <br />
                                <span className="text-gold-400">Assist You</span>
                            </h2>
                            <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                                Our bespoke services are designed for the most discerning clients. Reach out to experience Dubai's real estate at its finest.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {CONTACT_DETAILS.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-5"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-white tracking-wide uppercase text-[10px] tracking-[0.2em] opacity-40">
                                            {item.title}
                                        </h4>
                                        {item.details.map((line, i) => (
                                            <p key={i} className="text-white/80 text-sm font-light">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Enquiry Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <EnquiryForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[500px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.567083437149!2d55.13854611500731!3d25.082697883949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b645b2b2b1b%3A0x1b1b1b1b1b1b1b1b!2sMarina%20Plaza!5e0!3m2!1sen!2sae!4v1628592102751!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
}
