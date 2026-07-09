"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[var(--border)] py-2 text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--fg)] transition-colors text-base disabled:opacity-50";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="your name"
            required
            disabled={status === "sending"}
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
            disabled={status === "sending"}
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
          disabled={status === "sending"}
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
          disabled={status === "sending"}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-base underline underline-offset-4 text-[var(--fg)] hover:text-[var(--muted)] transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {status === "sending" ? "sending…" : "send message →"}
        </button>
        {status === "success" && (
          <span className="text-sm text-[var(--muted)]">
            message sent, thanks! i&apos;ll get back to you soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-[var(--muted)]">
            something went wrong, try emailing me directly instead.
          </span>
        )}
      </div>
    </form>
  );
}
