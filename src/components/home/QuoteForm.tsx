"use client";

import { CheckCircle2, Headphones, ShieldCheck, Ship } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { products } from "@/lib/data";

type FormData = {
  companyName: string;
  contactPerson: string;
  email: string;
  country: string;
  phone: string;
  product: string;
  message: string;
};

const fields = [
  ["companyName", "Company Name", "text"],
  ["contactPerson", "Contact Person", "text"],
  ["email", "Email", "email"],
  ["country", "Country", "text"],
  ["phone", "Phone", "tel"],
] as const;

export default function QuoteForm() {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setServerError("");
    setSuccess(false);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      setServerError(result.error || "Unable to submit your inquiry.");
      return;
    }
    setSuccess(true);
    reset();
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 transition focus:border-accent focus:bg-white";

  return (
    <section id="quote" className="section-space bg-primary text-white">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-green-300">
            Request A Quote
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Tell Us What Your Market Needs
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-green-100">
            Share your product, quantity and destination. Our team will respond
            with availability and the next steps.
          </p>
          <div className="mt-8 space-y-4">
            {[
              [ShieldCheck, "Transparent quality and product details"],
              [Ship, "Export-ready logistics coordination"],
              [Headphones, "Responsive buyer communication"],
            ].map(([Icon, text]) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return (
                <p key={text as string} className="flex items-center gap-3">
                  <FeatureIcon className="size-5 text-accent" />
                  <span className="text-sm font-semibold">{text as string}</span>
                </p>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(([name, label, type]) => (
              <label key={name} className="block text-sm font-bold text-primary">
                {label}
                <input
                  type={type}
                  className={`${inputClass} mt-2`}
                  {...register(name, {
                    required: `${label} is required`,
                    pattern:
                      name === "email"
                        ? {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                          }
                        : undefined,
                  })}
                />
                {errors[name] && (
                  <span className="mt-1 block text-xs text-red-600">
                    {errors[name]?.message}
                  </span>
                )}
              </label>
            ))}
            <label className="block text-sm font-bold text-primary">
              Product
              <select
                className={`${inputClass} mt-2`}
                {...register("product", { required: "Select a product" })}
              >
                <option value="">Select a rice variety</option>
                {products.map((product) => (
                  <option key={product.name}>{product.name}</option>
                ))}
              </select>
              {errors.product && (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.product.message}
                </span>
              )}
            </label>
          </div>
          <label className="mt-5 block text-sm font-bold text-primary">
            Quantity & Message
            <textarea
              rows={4}
              className={`${inputClass} mt-2 resize-none`}
              placeholder="Required quantity, packing, destination port and other details"
              {...register("message", { required: "Please add your requirement" })}
            />
            {errors.message && (
              <span className="mt-1 block text-xs text-red-600">
                {errors.message.message}
              </span>
            )}
          </label>
          <button
            disabled={isSubmitting}
            className="mt-6 w-full rounded-xl bg-accent px-6 py-4 font-extrabold text-white transition hover:bg-green-600 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
          {success && (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-700">
              <CheckCircle2 className="size-5" />
              Inquiry received. Our team will contact you shortly.
            </p>
          )}
          {serverError && (
            <p className="mt-4 text-sm font-semibold text-red-600">
              {serverError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
