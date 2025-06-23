// components/Pricing.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    title: "Basic",
    price: "$29",
    features: ["UI Kit", "Regular updates", "Community support"],
  },
  {
    title: "Pro",
    price: "$59",
    features: ["Everything in Basic", "Responsive components", "Email support"],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "$129",
    features: ["Everything in Pro", "Unlimited team seats", "Dedicated support"],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={`relative flex flex-col p-8 rounded-2xl ${
                plan.popular ? "bg-indigo-600 shadow-2xl" : "bg-gray-700"
              }`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {plan.popular && (
                <span className="absolute top-[-0.75rem] right-[-0.75rem] bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-5xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                className={`mt-auto py-3 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-500 hover:bg-indigo-400"
                }`}
                whileHover={{ scale: 1.03 }}
              >
                {plan.popular ? "Get Pro" : `Get ${plan.title}`}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
