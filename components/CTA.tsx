"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build with Nova?
          </h2>

          {/* TEXT */}
          <p className="text-lg text-indigo-100 mb-10">
            Join thousands of teams already growing faster with Nova.
          </p>

          {/* BUTTON */}
          <Link
            href="#"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Started for Free
          </Link>

          {/* SMALL TEXT */}
          <p className="mt-6 text-sm text-indigo-200">
            No credit card required • 14-day free trial
          </p>
        </motion.div>

      </div>
    </section>
  );
}