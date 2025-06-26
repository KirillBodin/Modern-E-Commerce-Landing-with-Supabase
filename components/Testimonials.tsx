// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
      avatar: "/avatars/Kate.png",
      name: "Alice Johnson",
      role: "Product Designer",
      text: "Using these UI kits saved me hours of work — they’re super easy to customize and look absolutely stunning!",
    },
    {
      avatar: "/avatars/Nek.png",
      name: "Bob Smith",
      role: "Frontend Developer",
      text: "This component library is outstanding; everything works flawlessly. I highly recommend it to every team.",
    },
    {
      avatar: "/avatars/Tol.png",
      name: "Jason Malon",
      role: "Startup Founder",
      text: "I bought the template and launched our landing page in no time — it fit our needs perfectly.",
    },
  ];
  

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.h2
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What our customers say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4 ring-2 ring-indigo-500"
              />
              <p className="italic mb-4">“{item.text}”</p>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-300">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
