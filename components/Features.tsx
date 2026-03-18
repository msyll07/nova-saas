"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Users, Cloud, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience ultra-fast performance with optimized infrastructure.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption keeps your data safe at all times.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with real-time insights and reports.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly across your entire organization.",
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Access your data anywhere with secure cloud syncing.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We’re here anytime you need help, day or night.",
    },
  ];

  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful tools designed to help your business grow faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-white" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}