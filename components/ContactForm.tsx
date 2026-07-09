"use client";

import { useState, FormEvent } from "react";
import { personal } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mailto fallback — replace with Resend/Formspree API route when ready
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject || "Hey from your portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  const inputClass =
    "w-full bg-transparent border-b border-[var(--border)] py-2 text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--fg)] transition-colors text-base";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="your email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <textarea
          placeholder="your message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="text-base underline underline-offset-4 text-[var(--fg)] hover:text-[var(--muted)] transition-colors"
      >
        send message →
      </button>
    </form>
  );
}
