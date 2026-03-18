"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      desc: "Perfect for small teams",
      features: ["5 users", "Basic analytics", "Email support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      desc: "Best for growing teams",
      features: ["20 users", "Advanced analytics", "Priority support", "API access"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large organizations",
      features: ["Unlimited users", "Custom features", "Dedicated manager"],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a plan that fits your needs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-purple-500 shadow-2xl scale-105 bg-white"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-sm text-slate-500 mt-2">{plan.desc}</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-slate-500"> /mo</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <Check className="text-purple-600 mr-2" size={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}