"use client";

import { api } from "@/app/lib/api";
import { useState } from "react";

export default function EnquiryForm({
  source = "website",
  brochureUrl,
}: {
  source?: string;
  /** If provided, form acts as a brochure gate — triggers download on success */
  brochureUrl?: string | null;
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

  const isBrochureMode = Boolean(brochureUrl);

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
        message: form.message,
        source: form.source,
      };

      const res = await api.post("/leads", payload);
      const data = res.data;

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      // Trigger brochure download immediately after successful submission
      if (brochureUrl) {
        const link = document.createElement("a");
        link.href = brochureUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        purpose: "buy",
        message: "",
        source: source,
      });
      setError(null);

      if (!isBrochureMode) {
        setTimeout(() => setSubmitted(false), 2000);
      }
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

  // ── Success state ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
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

        {isBrochureMode ? (
          <>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Download Started
            </h3>
            <p className="text-white/60 text-sm max-w-[280px]">
              Thank you, <strong className="text-white">{form.name || "there"}</strong>.
              Your brochure download has begun. Our team will also be in touch
              shortly.
            </p>
            {/* Fallback manual link in case auto-download is blocked */}
            <a
              href={brochureUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gold-400 text-xs uppercase tracking-widest font-bold underline underline-offset-4 hover:text-gold-300 transition-colors"
            >
              Click here if download didn't start
            </a>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Inquiry Sent
            </h3>
            <p className="text-white/60 text-sm max-w-[280px]">
              Thank you, <strong className="text-white">{form.name}</strong>.
              Our team will contact you shortly regarding your requirements.
            </p>
          </>
        )}
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 p-4 md:p-6 rounded-xl md:rounded-xl border border-white/10"
    >
      {/* Brochure-mode header banner */}
      {isBrochureMode && (
        <div className="mb-6 rounded-xl overflow-hidden border border-gold-400/30">
          {/* Gold top bar */}
          <div className="bg-gold-400 px-4 py-2 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-navy-950 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-navy-950 text-[10px] uppercase font-black tracking-[0.3em]">
              Brochure Download
            </span>
          </div>
          {/* Body */}
          <div className="bg-gold-400/10 px-4 py-3">
            <p className="text-white text-sm font-medium">
              Fill in your details below to instantly access the full property brochure.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-white">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">
            Full Name
          </label>
          <input
            required
            name="name"
            minLength={4}
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
            <option value="buy" className="bg-navy-950">Buy Property</option>
            <option value="sell" className="bg-navy-950">Sell Property</option>
            <option value="rent" className="bg-navy-950">Rent Property</option>
            <option value="lease" className="bg-navy-950">Lease Property</option>
            <option value="general" className="bg-navy-950">General Inquiry</option>
          </select>
        </div>
      </div>

      {/* Hide message field in brochure mode to keep the gate lean */}
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
        disabled={loading || submitted}
        className={`cursor-pointer w-full py-5 bg-gold-400 hover:bg-gold-500 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-xl transition-all shadow-xl shadow-gold-400/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2`}
        style={
          isBrochureMode && !loading && !submitted
            ? { animation: 'luxuryPulse 3s ease-in-out infinite' }
            : undefined
        }
      >
        {isBrochureMode && !loading && (
          <svg className="inline-block w-4 h-4 mr-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        )}
        {loading
          ? isBrochureMode ? "Preparing Download..." : "Submitting..."
          : isBrochureMode ? "Download Brochure" : "Submit Inquiry"}
      </button>
      {/* Injecting the custom float animation keyframes */}
      <style>{`
        @keyframes luxuryPulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 20px 25px -5px rgba(212, 175, 55, 0.2);
  }
  50% { 
    transform: scale(1.02);
    box-shadow: 0 25px 30px -5px rgba(212, 175, 55, 0.4);
  }
}
      `}</style>

      {error && (
        <p className="text-red-500 text-sm mt-4 text-center">
          <strong>Error: </strong>
          {error}
        </p>
      )}
    </form>
  );
}