'use client';

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase"; // путь подставь свой
import { User } from "@supabase/supabase-js";
import { ShoppingCart, Settings, TrendingUp, PackageCheck } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };
    getUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto space-y-12">
        {/* 👤 Приветствие и профиль */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome back,</h1>
          <p className="text-2xl text-indigo-300">Kyrylo</p>
          <img
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.email}`}
            alt="avatar"
            className="mt-6 mx-auto w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* 📈 Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<TrendingUp className="w-6 h-6" />}
            title="Total Spent"
            value="$1,250.00"
          />
          <Card
            icon={<PackageCheck className="w-6 h-6" />}
            title="Products Bought"
            value="14 items"
          />
          <Card
            icon={<ShoppingCart className="w-6 h-6" />}
            title="Items in Cart"
            value="3"
          />
        </div>

        {/* 📦 Последние покупки */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Purchases</h2>
          <ul className="space-y-4">
            {[
              { name: "3D Icon Pack", price: "$24", date: "2 days ago" },
              { name: "AI Prompt Bundle", price: "$19", date: "5 days ago" },
              { name: "UI Kit Deluxe", price: "$49", date: "Last week" },
            ].map((item, idx) => (
              <li key={idx} className="bg-white/10 p-4 rounded-lg backdrop-blur shadow">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-indigo-300">{item.price}</span>
                </div>
                <div className="text-sm text-gray-300 mt-1">Purchased: {item.date}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* ⚙️ Настройки аккаунта */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Display Name"
              className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition font-semibold"
            >
              Update Settings
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur p-6 rounded-xl shadow flex items-center space-x-4">
      <div className="p-3 bg-indigo-600 rounded-full">{icon}</div>
      <div>
        <div className="text-sm uppercase tracking-wide text-gray-300">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
}
