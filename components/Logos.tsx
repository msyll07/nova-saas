"use client";

import { motion } from "framer-motion";

export default function Logos() {
  const companies = ["Acme", "Vercel", "Stripe", "Notion", "Linear"];

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TEXT */}
        <p className="text-sm text-slate-500 uppercase tracking-widest mb-8">
          Trusted by modern teams
        </p>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 grayscale">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg md:text-xl font-semibold tracking-tight text-slate-800"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}