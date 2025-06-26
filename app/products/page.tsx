import { supabase } from '../../lib/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function ProductsPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: products, error } = await supabase.from('products').select('*');
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (error) {
    return (
      <div className="text-red-500 text-center mt-20">
        Failed to load products: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1F3B] to-[#2C2C54] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold text-white hover:text-indigo-400">
          ← Back to Home
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="text-white hover:text-indigo-400 transition font-medium"
          >
            🛒 Cart
          </Link>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-white hover:text-indigo-400 transition font-medium"
              >
                Dashboard
              </Link>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="text-red-400 hover:text-red-600 font-medium transition"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-full text-white font-medium hover:opacity-90"
            >
              Sign in
            </Link>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Explore Digital Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-sm text-white/80 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-400">
                    ${product.price}
                  </span>
                  <Link
                    href={`/product/${product.id}`}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
