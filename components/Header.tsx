// components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const nav = ["Home", "Products", "How it works", "Testimonials", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Логотип */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:opacity-80 transition"
        >
          BrandName
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-8">
          {nav.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              className="text-white/80 hover:text-white transition"
            >
              <Link
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="relative"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

{/* Sign up и корзина */}       <div className="hidden md:flex items-center space-x-4">
         {/* Sign up */}
         <motion.button
           onClick={() => window.location.href = "#signup"}
           whileHover={{ scale: 1.05 }}
           className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg"
         >
           Sign up
         </motion.button>

         {/* Cart icon */}
         <Link href="/cart" className="relative text-white hover:text-gray-200 transition">
           <ShoppingCart size={24} />
           {/* Можно добавить бейдж с количеством товаров:
           <span className="absolute -top-1 -right-2 bg-red-500 text-xs rounded-full px-1">3</span>
           */}
         </Link>
       </div>

        {/* Бургер-иконка для мобильной навигации */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
