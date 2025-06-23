// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: отправка данных
    alert("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-tr from-gray-900 via-indigo-900 to-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-4xl font-bold"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Have questions? Get in touch.
        </motion.h2>
        <motion.p
          className="text-gray-300"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Fill out the form below and we’ll get back to you within 24 hours.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mt-8 grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <motion.button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-medium shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
