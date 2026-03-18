"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Users } from "lucide-react";

export default function ProductPreview() {
  return (
    <section className="py-28 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-slate-900 mb-16">
          A dashboard you’ll actually enjoy using
        </h2>

        <div className="relative">

          {/* MAIN IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 w-full max-w-[92%] sm:max-w-[80%] lg:max-w-full mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="Dashboard UI"
              width={1200}
              height={700}
              className="w-full object-cover"
            />
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-10 -left-6  bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
          >
            <div className="bg-green-100 p-2 rounded-full">
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Growth</p>
              <p className="font-bold text-slate-900">+32%</p>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
          >
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="text-blue-600" size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Users</p>
              <p className="font-bold text-slate-900">12.4K</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}