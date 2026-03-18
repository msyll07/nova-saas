"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Client 1",
      role: "Startup Founder",
      initials: "C1",
      text: "Nova completely changed how we manage our business. Everything is faster, cleaner, and more efficient.",
    },
    {
      name: "Client 2",
      role: "Product Manager",
      initials: "C2",
      text: "The interface is beautiful and incredibly intuitive. Our team adopted it instantly.",
    },
    {
      name: "Client 3",
      role: "CEO",
      initials: "C3",
      text: "We tried multiple tools before Nova. Nothing comes close in terms of performance and simplicity.",
    },
  ];

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Loved by modern teams
          </h2>
          <p className="mt-4 text-slate-600">
            Thousands of teams trust Nova every day
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              {/* STARS */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-slate-700 mb-8 leading-relaxed text-sm">
                "{t.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}