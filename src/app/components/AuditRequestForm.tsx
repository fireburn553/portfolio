"use client";

// src/app/components/AuditRequestForm.tsx
import { useState } from "react";
import { track } from "@vercel/analytics";

type Status = "idle" | "submitting" | "success";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";
const fieldClasses = `w-full rounded-lg bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2.5 placeholder:text-gray-500 ${focusRing}`;
const labelClasses = "block text-sm font-medium text-gray-300 mb-1.5";

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $2,000",
  "$2,000–5,000",
  "$5,000–15,000",
  "$15,000+",
];

export default function AuditRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: only a bot fills a hidden field. Accept and drop silently.
    if ((data.get("botcheck") as string | null)?.trim()) {
      setStatus("success");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

    if (!endpoint) {
      setError(
        "This form isn’t connected yet — NEXT_PUBLIC_FORM_ENDPOINT is not set. " +
          "Please email jamescharliesalva@hotmail.com instead and I’ll pick it up from there."
      );
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          website: data.get("website"),
          name: data.get("name"),
          email: data.get("email"),
          context: data.get("context"),
          budget: data.get("budget"),
        }),
      });

      if (!response.ok) {
        throw new Error(`The form service returned ${response.status}.`);
      }

      track("audit_request_submitted");
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(
        `${
          err instanceof Error ? err.message : "Something went wrong."
        } Please try again, or email jamescharliesalva@hotmail.com directly.`
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-gray-600 bg-gray-800 p-6 text-gray-100"
      >
        <p>Thanks — I&apos;ll come back to you within three working days.</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <>
      {error && (
        <p
          role="alert"
          className="mb-6 rounded-lg border border-red-500/50 bg-red-950/40 px-4 py-3 text-sm text-red-200"
        >
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
        <div>
          <label htmlFor="website" className={labelClasses}>
            Website URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            required
            placeholder="https://example.com"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="context" className={labelClasses}>
            What made you start looking for help?
          </label>
          <textarea
            id="context"
            name="context"
            rows={4}
            required
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="budget" className={labelClasses}>
            Rough budget range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue={BUDGET_OPTIONS[0]}
            className={fieldClasses}
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Honeypot — hidden from humans, catches naive bots. */}
        <div style={{ display: "none" }}>
          <label htmlFor="botcheck">Leave this field empty</label>
          <input
            id="botcheck"
            name="botcheck"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`rounded-lg bg-blue-600 px-7 py-3.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-blue-600 ${focusRing}`}
        >
          {submitting ? "Sending…" : "Request my free audit"}
        </button>
      </form>
    </>
  );
}
