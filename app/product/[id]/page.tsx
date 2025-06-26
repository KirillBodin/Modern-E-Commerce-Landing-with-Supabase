'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ProductPage() {
  const { id } = useParams();
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserAndProduct = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        router.push('/not-found');
        return;
      }

      setProduct(data);
    };

    fetchUserAndProduct();
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isAlreadyInCart = existingCart.some((item: any) => item.id === product.id);
    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    alert('Product added to cart!');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e1f3b] to-[#2c2c54] text-white">
      {/* HEADER */}
      <header className="w-full px-6 py-4 bg-[#151530] shadow-md flex justify-between items-center">
        <div className="text-xl font-bold text-white">BrandName</div>
        <div className="flex gap-4 items-center">
          <a href="/products" className="hover:text-indigo-300 transition text-sm">
            All Products
          </a>
          {user ? (
            <>
              <a href="/dashboard" className="hover:text-indigo-300 transition text-sm">Dashboard</a>
              <a href="/cart" className="hover:text-indigo-300 transition text-sm">Cart</a>
              <button
                onClick={handleLogout}
                className="text-sm hover:text-pink-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
            >
              Sign in
            </a>
          )}
        </div>
      </header>

      {/* PRODUCT SECTION */}
      <main className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl shadow-lg border border-white/10"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-white/80 mb-6 leading-relaxed text-lg">{product.description}</p>

          <div className="text-3xl font-semibold text-indigo-400 mb-6">${product.price}</div>

          <button
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
          >
            Add to Cart
          </button>

          <div className="mt-8 text-sm text-white/60 space-y-1">
            <p>
              <span className="font-semibold text-white">Category:</span>{' '}
              {product.category}
            </p>
            <p>
              <span className="font-semibold text-white">Created at:</span>{' '}
              {new Date(product.created_at).toLocaleDateString()}
            </p>
            <p>
              <span className="text-white/80">Download after purchase</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
