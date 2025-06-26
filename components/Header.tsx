"use client";

import { useSupabaseUser } from "../app/hooks/useSupabaseUser"; // путь подставь свой
import { supabase } from "../lib/supabase"; // путь подставь свой
import { UserCircle, ShoppingCart, LogOut } from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const user = useSupabaseUser();
  const router = useRouter();
  const nav = ["Home", "Products", "How it works", "Testimonials", "Contact"];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh(); // перерисует страницу и уберёт user
  };

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
          {nav.map((item) => {
            const isProducts = item === "Products";
            const href = isProducts
              ? "/products"
              : `#${item.toLowerCase().replace(/ /g, "-")}`;

            return (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-white transition"
              >
                <Link href={href} className="relative">
                  {item}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Sign up, Dashboard, Cart, Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {user ? (
              <>
<Link
  href="/dashboard"
  className="text-white hover:text-indigo-300 transition"
  title="Dashboard"
>
  <UserCircle className="w-6 h-6" />
</Link>

<button
  onClick={handleLogout}
  className="text-white hover:text-red-400 transition"
  title="Logout"
>
  <LogOut className="w-5 h-5" />
</button>


              </>
            ) : (
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg"
              >
                Sign up
              </Link>
            )}
          </div>

          <Link href="/cart" className="relative text-white hover:text-gray-200 transition">
            <ShoppingCart size={24} />
          </Link>
        </div>

        {/* Бургер-меню для мобилки */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
