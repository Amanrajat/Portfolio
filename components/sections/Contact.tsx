"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Phone, AlertCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { contactFormSchema } from "@/lib/validation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

type Status = "idle" | "loading" | "success" | "error";

const initialValues = { name: "", email: "", subject: "", message: "", company: "" };

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a product idea, engineering opportunity or interesting technical challenge? Let's talk."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={profile.emailHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-fg transition-colors hover:border-accent/40"
            >
              <Mail className="h-4 w-4 text-accent" /> {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-fg transition-colors hover:border-accent/40"
            >
              <Phone className="h-4 w-4 text-accent" /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-fg transition-colors hover:border-accent/40"
            >
              <LinkedinIcon className="h-4 w-4 text-accent" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-fg transition-colors hover:border-accent/40"
            >
              <GithubIcon className="h-4 w-4 text-accent" /> GitHub
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8"
          >
            {/* Honeypot — hidden from sighted users and screen readers, catches bots. */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={values.company}
              onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  className="w-full rounded-lg border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-accent"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-1 text-xs text-down">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className="w-full rounded-lg border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-accent"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-1 text-xs text-down">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-fg">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={values.subject}
                onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                className="w-full rounded-lg border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-accent"
                aria-invalid={Boolean(fieldErrors.subject)}
                aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
              />
              {fieldErrors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-down">
                  {fieldErrors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className="w-full resize-none rounded-lg border border-border-strong bg-bg px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-accent"
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
              />
              {fieldErrors.message && (
                <p id="message-error" className="mt-1 text-xs text-down">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p role="status" className="flex items-center gap-2 text-sm text-up">
                <CheckCircle2 className="h-4 w-4" /> Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p role="alert" className="flex items-center gap-2 text-sm text-down">
                <AlertCircle className="h-4 w-4" /> {errorMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
