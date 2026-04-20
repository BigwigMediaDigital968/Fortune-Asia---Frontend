"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MoveRight } from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    purpose: "",
    note: "",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 text-navy-950 pb-24 relative overflow-hidden">
      {/* Dark Hero Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[#0A0E17] z-0 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a2440] via-[#0E1424] to-[#0A0E17]" />
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32">
        {/* Page Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-yellow-400 tracking-wider text-xs font-bold uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white"
          >
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Whether you are looking to buy, sell, or invest, our team of experts
            is ready to assist you. Drop us a line and we'll get back to you
            within 24 hours.
          </motion.p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold mb-8 text-navy-950">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1 text-lg">Our Office</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Level 42, Fortune Tower
                      <br />
                      Marina District, Singapore 018956
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1 text-lg">Phone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      +65 6500 8000
                      <br />
                      +65 6500 8001 (Support)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1 text-lg">Email</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      inquiries@fortuneasia.com
                      <br />
                      partnerships@fortuneasia.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 text-white border border-yellow-300 overflow-hidden relative shadow-xl shadow-orange-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 blur-2xl rounded-full" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Working Hours
              </h3>
              <p className="text-white/95 font-medium text-base relative z-10 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-white/95 font-medium text-base relative z-10">
                Saturday: 10:00 AM - 2:00 PM
              </p>
              <p className="text-white font-bold text-sm relative z-10 mt-6 uppercase tracking-wider">
                Sunday Closed
              </p>
            </div>
          </motion.div>

          {/* Right: The Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 md:p-12 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24"
                >
                  <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#10b981"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-navy-950 mb-4">
                    Message Received!
                  </h3>
                  <p className="text-gray-600 text-lg max-w-sm mx-auto">
                    Thank you for reaching out. One of our experts will get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 px-8 py-4 bg-gray-50 border border-gray-200 text-navy-950 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-8">
                  <div>
                     <h3 className="text-3xl font-bold mb-2 text-navy-950">Send us a Message</h3>
                     <p className="text-gray-500 text-sm">Fill out the form below and we'll be in touch shortly.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-5 py-4 text-sm text-navy-950 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-5 py-4 text-sm text-navy-950 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-5 py-4 text-sm text-navy-950 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Singapore"
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        className="w-full px-5 py-4 text-sm text-navy-950 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid gap-8">
                    {/* Purpose */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        Purpose
                      </label>
                      <div className="relative">
                        <select
                          value={form.purpose}
                          onChange={(e) =>
                            setForm({ ...form, purpose: e.target.value })
                          }
                          className="w-full px-5 py-4 text-sm text-navy-950 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300 appearance-none"
                        >
                          <option value="" className="text-gray-500">
                            Select an option
                          </option>
                          <option value="buy" className="text-navy-950">
                            Buy a Property
                          </option>
                          <option value="sell" className="text-navy-950">
                            Sell a Property
                          </option>
                          <option value="rent" className="text-navy-950">
                            Rent
                          </option>
                          <option value="invest" className="text-navy-950">
                            Investment
                          </option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg
                            width="14"
                            height="10"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2.5">
                        Message
                      </label>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        value={form.note}
                        onChange={(e) =>
                          setForm({ ...form, note: e.target.value })
                        }
                        className="w-full px-5 py-4 text-sm text-navy-950 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (form.name && form.phone) setSubmitted(true);
                      else alert("Please fill in the required fields (*).");
                    }}
                    className="w-full mt-2 flex items-center justify-center gap-2 group py-4 px-8 bg-navy-950 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-navy-900 transition-all duration-300 shadow-lg shadow-navy-950/20 focus:ring-4 focus:ring-navy-950/30"
                  >
                    Submit Request
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-400" />
                  </button>

                  <p className="text-center text-xs text-gray-500 font-medium">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
