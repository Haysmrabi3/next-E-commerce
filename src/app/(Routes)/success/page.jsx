'use client'
import React from 'react'

export default function page() {
  return <>
  
<div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
  <div className="max-w-md w-full text-center p-8  rounded-2xl shadow-sm">

    <div className="text-5xl mb-4">✅</div>

    <h2 className="text-2xl font-semibold mb-2">
      Order Placed Successfully!
    </h2>

    <p className="text-gray-500 mb-6">
      Thank you for your purchase. Your order is being processed and will be delivered soon.
    </p>

    <div className="flex flex-col gap-3">

      <button
        onClick={() => window.location.href = "/Collections"}
        className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Continue Shopping
      </button>

      <button
        onClick={() => window.location.href = "/"}
        className="border py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Go to Home
      </button>

    </div>

  </div>
</div>
  
  
  </>
}
