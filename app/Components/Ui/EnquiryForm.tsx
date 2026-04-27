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

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        purpose: form.purpose,
        message: form.message, // ✅ IMPORTANT FIX
        source: form.source,
      };

      const res = await api.post("/leads", payload);

      const data = res.data;
      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
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

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Failed to submit enquiry");
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
        {submitted ? "Inquiry Sent" : "Submit Inquiry"}
      </button>
    </form>
  );
}
