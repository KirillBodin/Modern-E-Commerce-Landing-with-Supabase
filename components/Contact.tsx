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
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: отправка данных (API или Supabase)
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-tr from-gray-900 via-indigo-900 to-gray-800 text-white"
    >
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
          className="mt-8 grid grid-cols-1 gap-6 text-left"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="text-sm text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-sm text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.message && (
              <p className="text-sm text-red-400 mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Уведомление об успешной отправке */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 bg-green-600/80 rounded-lg px-6 py-4 text-white shadow-lg"
          >
            ✅ Message sent successfully! We'll be in touch soon.
          </motion.div>
        )}
      </div>
    </section>
  );
}
