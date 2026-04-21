"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart , Q } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * Q,
    0
  );

  const isDisabled = !cart || cart.length === 0;

  const products = [
    { name: "Jeans", path: "/Collections/1.jpg", stock: true, id: 1, price: 120 },
    { name: "Sweat Pants", path: "/Collections/3.jpg", stock: false, id: 3, price: 80 },
    { name: "Jeans", path: "/Collections/4.jpg", stock: true, id: 4, price: 150 },
    { name: "Sweat Pants", path: "/Collections/6.jpg", stock: false, id: 6, price: 70 },
    { name: "Jeans", path: "/Collections/10.jpg", stock: true, id: 10, price: 200 },
    { name: "Summer Shirt", path: "/Collections/5.jpg", stock: true, id: 5, price: 90 },
    { name: "Basic Hoodie", path: "/Collections/7.jpg", stock: true, id: 7, price: 180 },
    { name: "Crew Neck Hoodie", path: "/Collections/9.jpg", stock: false, id: 9, price: 160 },
    { name: "ZIP UP HOODIE", path: "/Collections/12.jpg", stock: true, id: 12, price: 220 },
    { name: "Boxy fit", path: "/Collections/2.jpg", stock: true, id: 2, price: 60 },
    { name: "Old Money T-Shirt", path: "/Collections/8.jpg", stock: false, id: 8, price: 75 },
    { name: "Sport T-Shirt", path: "/Collections/11.jpg", stock: true, id: 11, price: 85 }
  ];

  return (
    <section className="bg-white min-h-screen py-10 text-black">
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl text-black pt-25 font-semibold">
            Your cart
          </h1>

          <Link href="/Collections" className="text-sm">
            Continue shopping
          </Link>
        </div>

        <div className="hidden md:grid grid-cols-12 text-sm font-semibold text-black border-b pb-3">
          <div className="col-span-6">PRODUCT</div>
          <div className="col-span-3 text-center">QUANTITY</div>
          <div className="col-span-3 text-right">TOTAL</div>
        </div>

        <div className="divide-y">

          {cart.length === 0 && (
            <p className="py-10 text-center text-black">
              Your cart is empty
            </p>
          )}

          {cart.map((item) => {
            const product = products.find(p => p.id === item.id);

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 py-6 items-center gap-4"
              >

                <div className="md:col-span-6 flex items-center gap-4">
                  <Image
                    src={product?.path || "/placeholder.jpg"}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                    alt={item.name}
                  />

                  <div>
                    <h3 className="font-semibold text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-black">
                      {item.price} LE
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 flex justify-center items-center">
                  <div className="flex items-center border rounded-md">
                    <span className="px-4">{Q}</span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-3 text-white bg-red-500 p-2 rounded-md"
                  >
                    🗑
                  </button>
                </div>

                <div className="md:col-span-3 text-right font-semibold">
                  LE {item.price * Q}
                </div>

              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-10">
          <div className="w-full md:w-[350px] border-t pt-6">

            <div className="flex justify-between text-xl font-semibold mb-2">
              <span>Estimated total</span>
              <span>LE {total}</span>
            </div>

            <p className="text-sm text-black mb-5">
              Taxes, discounts and shipping calculated at checkout.
            </p>

            <Link
              href={isDisabled ? "#" : "/CheckOut"}
              className={`w-full block text-center py-3 font-semibold rounded-lg transition
                ${isDisabled
                  ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                  : "bg-black text-white hover:bg-gray-800"}
              `}
            >
              Proceed to Checkout
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}