// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Palette, Layers, Package, Brain } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-12 h-12 text-indigo-400" />,
    title: "Customizable UI Kits",
    subtitle: "Prebuilt design templates for any workflow",
  },
  {
    icon: <Layers className="w-12 h-12 text-green-400" />,
    title: "Modular Architecture",
    subtitle: "Build pages from independent, reusable blocks",
  },
  {
    icon: <Package className="w-12 h-12 text-yellow-400" />,
    title: "One-Time Purchase",
    subtitle: "Pay once—use forever, no subscriptions",
  },
  {
    icon: <Brain className="w-12 h-12 text-pink-400" />,
    title: "AI-Powered Prompts",
    subtitle: "Generate ideas and copy on the fly",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black/30 to-black/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-black/40 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
