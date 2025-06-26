"use client";

import { Inter } from "next/font/google";
import { Palette, Package, Layers, Brain } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { HowItWorks } from "../components/HowItWorks";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

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

export default function HomePage() {
  // ticker-лого
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx((i) => (i + 1) % logos.length), 2500);
    return () => clearInterval(iv);
  }, []);
  const visible = [...logos, ...logos].slice(idx, idx + 5);

  // параллакс для фоновых карточек
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 300], ["0%", "-10%"]);

  return (
<main
   className={`
     ${inter.className}
     relative overflow-x-hidden  /* allow vertical scroll */
     bg-gradient-to-br from-gray-900 via-indigo-900 to-black
     text-white
   `}
 >
        <Header />
      {/* анимированный градиент */}
      <style jsx global>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        body {
          background: linear-gradient(120deg, #000, #111, #000);
          background-size: 300% 300%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>

<section className="relative flex flex-col items-center justify-center h-screen px-6">
        {/* Hero & buttons */}
        <div className="z-20 text-center space-y-6">
  {/* Заголовок */}
  <motion.h1
    className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
    initial="hidden"
    animate="visible"
    custom={0}
    variants={fadeUp}
  >
    Discover and sell digital products
  </motion.h1>

  {/* Подзаголовок */}
  <motion.p
    className="text-gray-300 text-lg max-w-xl mx-auto"
    initial="hidden"
    animate="visible"
    custom={1}
    variants={fadeUp}
  >
    Templates, tools, designs and more. Pay once. Use forever.
  </motion.p>

  {/* Кнопки */}
  <motion.div
    className="flex gap-6 justify-center"
    initial="hidden"
    animate="visible"
    custom={2}
    variants={fadeUp}
  >
<motion.button
    className="btn-3d-press px-6 py-2 text-white font-medium rounded-xl bg-indigo-600"
    whileTap={{ translateY: 4 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
  >
    Start
  </motion.button>

  {/* Gradient Wave */}
  <motion.button
    className="btn-gradient-wave px-6 py-2 text-white font-medium rounded-xl overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 bg-[length:200%_100%]"
    whileHover={{ backgroundPosition: "200% center" }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    Learn more →
  </motion.button>
{/* --- Новые варианты кнопок Neumorphism --- */}

  </motion.div>
</div>


        {/* Logos ticker */}
        <motion.div
          className="flex gap-8 mt-8 z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {visible.map((name, i) => (
              <motion.div
                key={`${name}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-white text-base font-medium cursor-default hover:scale-110"
              >
                {name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Blob-форма */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[120%] h-[50vh] -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 1 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full opacity-10">
            <path
              fill="#111"
              d="M421,317Q387,384,318,412.5Q249,441,183.5,405.5Q118,370,98.5,300Q79,230,147,187Q215,144,291,117Q367,90,407,156.5Q447,223,421,317Z"
            />
          </svg>
        </motion.div>

        {/* Фоновые карточки с плавающей анимацией */}
       {/* --- Фоновые карточки с плавающей анимацией и 3D-разворотом через style --- */}

{/* Фоновые карточки с плавающей анимацией и 3D-разворотом */}
<motion.div
  className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu"
  style={{ perspective: 1000, y: parallaxY }}
>
  <div className="absolute inset-0 flex items-center justify-center -translate-y-1/6">
    <div
      className="grid grid-cols-2 gap-y-8 gap-x-40 w-[120vw] opacity-25 scale-90 transform"
      style={{
        // 3D-разворот и сдвиг влево на половину лишней ширины
        transform: "rotateX(15deg) rotateZ(-6deg)",
        marginLeft: "-10vw",
      }}
    >
      {[
        { Icon: Palette, title: "UI Kit" },
        { Icon: Package, title: "SaaS Template" },
        { Icon: Layers,  title: "3D Icon Pack" },
        { Icon: Brain,   title: "AI Prompts" },
      ].map(({ Icon, title }, i) => (
        <motion.div
          key={i}
          className="
            bg-white/5 backdrop-blur-xl
            rounded-3xl p-8 h-64
            flex flex-col items-center justify-center
            shadow-[0_15px_30px_rgba(0,0,0,0.4)]
          "
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 25px 45px rgba(0,0,0,0.5)",
          }}
        >
          <Icon className="w-32 h-32 text-white mb-4" />
          <h3 className="text-2xl font-semibold">{title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>


        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-6 z-20 flex flex-col items-center text-white opacity-60 space-y-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="text-2xl">⌄</span>
          <span className="text-sm">Scroll</span>
        </motion.div>
      </section>
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
