// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex items-center justify-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-extrabold text-white tracking-tight">
          404
        </h1>
        <p className="text-lg text-white/80">
          Oops! The page you're looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full font-medium hover:opacity-90 transition"
        >
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}
