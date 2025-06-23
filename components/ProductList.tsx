// components/ProductList.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";
const { addItem } = useCart();
interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    supabase
      .from<Product>("products")
      .select("*")
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setProducts(data!);
      });
  }, []);

  return (
    <section id="products" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Digital Products
      </h2>
      <div className="grid gap-8 auto-fit min-w-[240px]">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={p.image_url}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="mt-auto text-2xl font-bold">${p.price}</p>
            <button
  onClick={() =>
    addItem({ productId: p.id, name: p.name, price: p.price, quantity: 1 })
  }
  className="mt-4 bg-indigo-600 py-2 rounded-lg text-white"
>
  Add to cart
</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
