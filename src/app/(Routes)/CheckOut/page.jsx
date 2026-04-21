"use client";

import { CartContext } from "@/Context/CartContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);
  const [payment, setPayment] = useState("cod");
  const router = useRouter();

  const isEmpty = !cart || cart.length === 0;

  if (isEmpty) {
    return (
      <div className="py-25 h-screen flex flex-col items-center justify-center text-center text-black bg-white">
        <div className="text-6xl mb-4">🛒</div>

        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything yet.
        </p>

        <button
          onClick={() => router.push("/Collections")}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto p-6 pt-25 text-black">

          <h1 className="text-2xl font-semibold mb-6">
            Checkout
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              setCart([]);

              router.push("/success");
            }}
          >

            <h2 className="text-lg font-semibold mb-2">
              Shipping Information
            </h2>

            <hr className="mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

              <input required placeholder="Full Name" className="border p-2 rounded-lg w-full" />
              <input required type="email" placeholder="Email" className="border p-2 rounded-lg w-full" />
              <input required placeholder="Phone Number" className="border p-2 rounded-lg w-full" />
              <input required placeholder="City" className="border p-2 rounded-lg w-full" />

            </div>

            <input
              required
              placeholder="Shipping Address"
              className="border p-2 rounded-lg w-full mb-6"
            />

            <h2 className="text-lg font-semibold mb-2">
              Payment Method
            </h2>

            <hr className="mb-4" />

            <div className="space-y-3 mb-6">

              <label className="flex items-start gap-3 border p-4 cursor-pointer rounded-lg">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                <div>
                  <p className="font-semibold">Cash on Delivery</p>
                  <p className="text-sm text-gray-500">
                    Pay when you receive your order
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 border p-4 bg-gray-800 text-white relative rounded-lg">
                <input type="radio" disabled />
                <div>
                  <p className="font-semibold">Online Payment</p>
                  <p className="text-sm text-gray-300">
                    Pay securely via Paymob
                  </p>
                </div>

                <span className="absolute right-4 top-4 text-red-500 font-bold">
                  SOON
                </span>
              </label>

            </div>

            <h2 className="text-lg font-semibold mb-2">
              Order Summary
            </h2>

            <hr className="mb-4" />

            {cart.map((item) => (
              <p key={item.id} className="font-medium">
                {item.name} x {item.q}
              </p>
            ))}

            <hr className="my-3" />

            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>
                LE{" "}
                {cart.reduce(
                  (acc, item) => acc + item.price * item.q,
                  0
                )}
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-black text-white py-3 font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Place Order
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}