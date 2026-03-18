"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[60%] w-[500px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium bg-indigo-50 text-[var(--color-primary)] rounded-full">
            
            Trusted by modern teams
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Build smarter. <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-transparent bg-clip-text">
              Grow faster.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Nova helps teams streamline workflows, track performance, and scale
            faster with powerful tools designed for modern businesses.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[var(--color-primary-hover)] transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <button className="inline-flex items-center justify-center border border-slate-200 px-8 py-4 rounded-xl font-semibold bg-white hover:bg-slate-50 transition-all shadow-sm">
              <Play className="mr-2 h-5 w-5 text-slate-500" />
              Live Demo
            </button>
          </div>

          {/* Small stats */}
          <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
            <span>✔️ No credit card</span>
            <span>✔️ Free trial</span>
            <span>✔️ Cancel anytime</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Nova Dashboard"
              width={900}
              height={600}
              className="object-cover w-full"
              priority
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
            <p className="text-sm text-slate-500">Revenue</p>
            <p className="text-xl font-bold text-slate-900">+$12,450</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}