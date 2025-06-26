// components/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, CreditCard, DownloadCloud } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    title: "Discover",
    desc: "Browse a curated selection of premium digital products.",
  },
  {
    icon: CreditCard,
    title: "Purchase",
    desc: "Pay once. No subscriptions. Secure checkout included.",
  },
  {
    icon: DownloadCloud,
    title: "Download",
    desc: "Instant access to your files. Use them forever.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#15162c] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-16">
          How It Works
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 w-full md:w-1/3 text-center shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-white/80">{step.desc}</p>
            </motion.div>
          ))}

          {/* Линия между блоками на десктопе */}
          <div className="hidden md:block absolute top-1/2 w-full h-px bg-white/10 z-0" />
        </div>
      </div>
    </section>
  );
}
