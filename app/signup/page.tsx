"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white px-6">
      <div className="w-full max-w-md space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur border border-white/10 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Create account
          </button>
        </form>

        <p className="text-sm text-center text-white/70">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
