"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  "OpenAI",
  "Vercel",
  "Cash App",
  "Boom",
  "Notion",
  "Figma",
  "Stripe",
  "Ramp",
  "Framer",
  "Linear",
];

export function BrandsSection() {
  const [index, setIndex] = useState(0);
  const visibleLogos = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    const start = index;
    const end = index + visibleLogos;
    return [...logos, ...logos].slice(start, end);
  };

  return (
    <section className="py-24 px-6 text-center bg-black">
      <h2 className="text-lg text-gray-400 font-medium mb-2">
        Trusted by top creators
      </h2>
      <p className="text-2xl md:text-3xl font-semibold text-white mb-10">
        Powering the future of digital commerce
      </p>

      <div className="flex items-center justify-center gap-10 h-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {getVisible().map((name, i) => (
            <motion.div
              key={`${name}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-white text-sm md:text-base font-medium text-opacity-80"
            >
              {name}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
