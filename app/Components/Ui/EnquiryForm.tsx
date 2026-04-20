"use client";

import { useState } from "react";

export default function EnquiryForm() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        purpose: "Buy Luxury Home",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Add form submission logic here
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white/5 p-10 rounded-[40px] border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-white">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">Full Name</label>
                    <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">Phone Number</label>
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
                    <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">Email</label>
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
                    <label className="text-[10px] uppercase font-bold text-white tracking-widest ml-1">Purpose</label>
                    <select
                        name="purpose"
                        value={form.purpose}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 outline-none transition-all appearance-none cursor-pointer text-white"
                    >
                        <option value="Buy Luxury Home" className="bg-navy-950">Buy Luxury Home</option>
                        <option value="Invest in Off-Plan" className="bg-navy-950">Invest in Off-Plan</option>
                        <option value="Sell Property" className="bg-navy-950">Sell Property</option>
                        <option value="Rent Prestige" className="bg-navy-950">Rent Prestige</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2 mb-8">
                <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest ml-1">Description</label>
                <textarea
                    name="description"
                    value={form.description}
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
