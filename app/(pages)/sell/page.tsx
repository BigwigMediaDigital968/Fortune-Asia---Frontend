"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/Components/Ui/PageHero";
import { BASE_URL } from "@/app/lib/api";
import { fadeUp, motionContainer } from "@/app/utils/motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  bedrooms: string;
  size: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

export default function SellPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
    size: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${BASE_URL}/listing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          bedrooms: "",
          size: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-navy-950 min-h-screen">
      {/* Hero Section */}
      <PageHero
        subtitle="Sell with Confidence"
        title={
          <>
            Sell Your Property in{" "}
            <span className="text-gold-400">Record Time</span>
          </>
        }
        description="Get the best value for your Dubai property with our expert team and proven process."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920"
      />

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-white text-center mb-16">
            How It Works
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={motionContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Step 01 */}
            <motion.div
              variants={fadeUp}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="text-gold-400 text-5xl font-display mb-4">01</div>
              <h3 className="text-2xl font-display text-white mb-4">
                PREPARATION
              </h3>
              <p className="text-navy-100 leading-relaxed">
                We meet either online or in our Dubai office, evaluate the
                property, and conclude an agreement.
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              variants={fadeUp}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="text-gold-400 text-5xl font-display mb-4">02</div>
              <h3 className="text-2xl font-display text-white mb-4">
                PROMOTION
              </h3>
              <p className="text-navy-100 leading-relaxed">
                We professionally showcase your property through premium visuals and targeted promotion to generate strong buyer interest.
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              variants={fadeUp}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="text-gold-400 text-5xl font-display mb-4">03</div>
              <h3 className="text-2xl font-display text-white mb-4">
                AGREEMENT
              </h3>
              <p className="text-navy-100 leading-relaxed">
                From finding buyers to handling the process, we ensure a smooth and stress-free experience.
              </p>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              variants={fadeUp}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="text-gold-400 text-5xl font-display mb-4">04</div>
              <h3 className="text-2xl font-display text-white mb-4">PAYMENT</h3>
              <p className="text-navy-100 leading-relaxed">
                Upon the successful completion of the transaction, you will
                receive the payment with the agency commission deducted.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sell Property in Dubai Now Section */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-white text-center mb-6">
            Why Sell Property in{" "}
            <span className="text-gold-400">Dubai Now?</span>
          </h2>
          <p className="text-lg text-navy-100 text-center max-w-4xl mx-auto mb-16">
            The real estate market in Dubai is experiencing a significant surge,
            which is one of the main reasons why selling your property now would
            be a smart decision if you want to sell property in Dubai.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={motionContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Reason 01 */}
            <motion.div
              variants={fadeUp}
              className="border border-white/20 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-gold-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-white leading-relaxed">
                Strong buyer interest makes properties get serious offers
                quickly.
              </p>
            </motion.div>

            {/* Reason 02 */}
            <motion.div
              variants={fadeUp}
              className="border border-white/20 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-gold-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white leading-relaxed">
                Globally, investors are rushing to Dubai for highest ROI.
              </p>
            </motion.div>

            {/* Reason 03 */}
            <motion.div
              variants={fadeUp}
              className="border border-white/20 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-gold-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white leading-relaxed">
                Tax-free property market with high profits and simple deals.
              </p>
            </motion.div>

            {/* Reason 04 */}
            <motion.div
              variants={fadeUp}
              className="border border-white/20 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-gold-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-white leading-relaxed">
                Make profits from present high market prices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                  Ready to{" "}
                  <span className="text-gold-400">Sell Your Property?</span>
                </h2>
                <p className="text-lg text-navy-100 leading-relaxed">
                  Fill out the form and our expert team will contact you within
                  24 hours to discuss your property and provide a free
                  valuation.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Dubai Office
                    </h3>
                    <p className="text-navy-100 max-w-md">
                      Office#226, 2nd Floor | Smartplace Business Center | The Iridium Building – Umm Suqeim Street Al Barsha 1 – Dubai
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <a
                      href="mailto:sell@mondus.ae"
                      className="text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      contact@fortuneasia.ae
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <a
                      href="tel:+97150000000"
                      className="text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      +971 50 2878765
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Working Hours
                    </h3>
                    <p className="text-navy-100">
                      Monday - Saturday
                      <br />
                      09:00 AM - 06:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-navy-800">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-display text-gold-400 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-navy-100">Properties Sold</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display text-gold-400 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-navy-100">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display text-gold-400 mb-1">
                      24h
                    </div>
                    <div className="text-sm text-navy-100">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-navy-900 rounded-2xl p-8 border border-navy-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 ..."
                      required
                      className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Downtown Dubai, Building Name, Unit #"
                    required
                    className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                {/* Bedrooms & Size Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                    >
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="Studio">Studio</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                    >
                      Size (sqft)
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="e.g., 1200"
                      required
                      className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2 uppercase tracking-wider"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property requirements..."
                    rows={4}
                    className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder:text-navy-100/50 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display text-gold-400 mb-6">
            Get Your Free Property Valuation Today
          </h2>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Our expert team will provide you with an accurate market valuation
            and a comprehensive selling strategy tailored to your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971502878765"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium py-4 px-8 rounded-lg transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/+971502878765?text=Hey!%20I%E2%80%99d%20like%20to%20connect%20regarding%20selling%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gold-100 text-navy-950 font-medium py-4 px-8 rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
