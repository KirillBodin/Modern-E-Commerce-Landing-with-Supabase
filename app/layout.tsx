// app/layout.tsx
import "./../styles/globals.css";
import type { ReactNode } from "react";
import { CartProvider } from "../components/CartContext";

export const metadata = {
  title: "Modern E-Commerce",
  description: "Landing + Auth + Orders powered by Supabase",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full bg-black text-white font-inter">
        {/* TODO: Navbar */}
        <CartProvider>{children}</CartProvider>
        {/* TODO: Footer */}
      </body>
    </html>
  );
}
