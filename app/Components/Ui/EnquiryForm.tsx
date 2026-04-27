"use client";

import { api } from "@/app/lib/api";
import { useState } from "react";

export default function EnquiryForm({
  source = "website",
}: {
  source?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "buy",
    message: "",
    source: source,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        purpose: form.purpose,
        message: form.message, // ✅ IMPORTANT FIX
        source: form.source,
      };
      console.log("Submitting Enquiry:", payload);

      const res = await api.post("/leads", payload);

      const data = res.data;
      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
        setError(data.message || "Failed to submit enquiry");
      }

      // ✅ success state
      setSubmitted(true);

      // reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        purpose: "buy",
        message: "",
        source: source,
      });
      setError(null);

      setTimeout(() => setSubmitted(false), 2000);
    } catch (err) {
      console.error("Submit Error:", err);
      setError("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {submitted ? (
        <>
          <div className="">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-gold-400/20 border border-gold-400/50 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-10 h-10 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                Inquiry Sent
              </h3>
              <p className="text-white/60 text-sm max-w-[280px]">
                Thank you, <strong>{form.name}</strong>. Our team will contact
                you shortly regarding your requirements.
              </p>
            </div>
          </div>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-4 md:p-6 rounded-xl md:rounded-xl border border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-white">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">
                Full Name
              </label>
              <input
                required
                name="name"
                min={4}
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">
                Phone Number
              </label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all"
                placeholder="+971 50 ..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">
                Purpose
              </label>
              <select
                name="purpose"
                required
                value={form.purpose}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all appearance-none cursor-pointer text-white"
              >
                <option value="buy" className="bg-navy-950">
                  Buy Property
                </option>
                <option value="sell" className="bg-navy-950">
                  Sell Property
                </option>
                <option value="rent" className="bg-navy-950">
                  Rent Property
                </option>
                <option value="lease" className="bg-navy-950">
                  Lease Property
                </option>
                <option value="general" className="bg-navy-950">
                  General Inquiry
                </option>
              </select>
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-1">
              Description
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="cursor-pointer w-full py-5 bg-gold-400 hover:bg-gold-500 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-xl transition-all shadow-xl shadow-gold-400/20 active:scale-95 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">
              <strong>Error : </strong>
              {error}
            </p>
          )}
        </form>
      )}
    </>
  );
}
