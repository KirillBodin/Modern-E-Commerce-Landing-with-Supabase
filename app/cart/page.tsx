// app/cart/page.tsx
"use client";

import { useCart } from "../../components/CartContext";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, clear } = useCart();
  const router = useRouter();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = async () => {
    const user = supabase.auth.user();
    if (!user) return router.push("/login");
    // Запись заказа в Supabase
    const { data, error } = await supabase.from("orders").insert({
      user_id: user.id,
      total_price: total,
    });
    if (error) return alert(error.message);
    const orderId = data![0].id;
    // Добавить items в order_items
    await Promise.all(
      items.map((i) =>
        supabase.from("order_items").insert({
          order_id: orderId,
          product_id: i.productId,
          quantity: i.quantity,
          unit_price: i.price,
        })
      )
    );
    clear();
    router.push("/dashboard");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 && <p>Cart is empty.</p>}
      {items.map((i) => (
        <div key={i.productId} className="flex justify-between mb-2">
          <span>
            {i.name} x{i.quantity}
          </span>
          <span>${i.price * i.quantity}</span>
          <button onClick={() => removeItem(i.productId)}>×</button>
        </div>
      ))}
      {items.length > 0 && (
        <>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold mb-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
