"use client";

import { FormEvent, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 550);
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={submit}>
      <h2>Get in touch</h2>
      <p>Fill out the form and we&apos;ll be in touch soon.</p>
      <div className="contact-form-grid">
        <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" autoComplete="tel" inputMode="tel" placeholder="(312) 555-0123" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label>Zip code<input name="zip" autoComplete="postal-code" inputMode="numeric" placeholder="e.g. 60614" required /></label>
        <label className="contact-form-message">What needs clearing?<textarea name="message" placeholder="Tell us a bit about what you need removed..." required /></label>
      </div>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending message..." : status === "sent" ? "Message sent" : "Send message"}
        {status !== "sending" && <IconArrowRight aria-hidden="true" />}
      </button>
      <p className="contact-form-status" aria-live="polite">{status === "sent" ? "Thanks. A Clearway team member will be in touch soon." : ""}</p>
    </form>
  );
}
