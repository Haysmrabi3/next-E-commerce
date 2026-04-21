import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return <>
  
 <section id="About" className="bg-white py-16 text-black">
  <div className="container mx-auto px-6 my-20">

    <div className="text-center  mx-auto pb-12 bg-gray-200 p-25  rounded-2xl">
      <h4 className="text-3xl font-bold mb-4">
        Our Story: Where Comfort Meets Elegance
      </h4>
      <p className="text-gray-600 leading-relaxed font-semibold">
        We started S T R A T U S Fashion with one simple goal –
        to create clothes that make men feel confident, <br /> comfortable,
        and stylish in every moment of their lives.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 my-25">
      
      <div className="lg:w-1/2 ">
        <h4 className="text-2xl font-semibold mb-4">Our Journey</h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          From university days to busy work schedules, we believe every man
          deserves clothes that combine elegance with true comfort.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Every piece is thoughtfully crafted with high-quality fabrics
          to ensure long-lasting wear.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <Image
          width={400}
          height={400}
          alt="logo"
          src="/stratus-icon.png"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>

    <div className="mb-16 text-center bg-gray-200 p-15 rounded-2xl">
      <h5 className="text-2xl font-bold mb-8">Our Values</h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 border rounded-xl hover:shadow-md transition">
          <h5 className="font-semibold text-2xl mb-2  ">Quality</h5>
          <p className="text-gray-600 text-sm font-semibold ">
            Premium fabrics that last and feel amazing.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-md transition">
          <h5 className="font-semibold text-2xl mb-2  ">Comfort</h5>
          <p className="text-gray-600 text-sm font-semibold ">
            Designed for all-day wear without sacrifice.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-md transition">
          <h5 className="font-semibold text-2xl mb-2  ">Confidence</h5>
          <p className="text-gray-600 text-sm font-semibold ">
            Styles that empower men to feel their best.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow-md transition">
          <h5 className="font-semibold text-2xl mb-2  ">Style</h5>
          <p className="text-gray-600 text-sm font-semibold ">
            Trendy and timeless pieces for every occasion.
          </p>
        </div>

      </div>
    </div>

    <div className="text-center max-w-3xl mx-auto mb-12">
      <h4 className="text-2xl font-semibold mb-4">Who We Are</h4>
      <p className="text-gray-600 leading-relaxed">
        We’re a small but passionate team that believes fashion should be
        about more than just looks – it should make you feel good inside
        and out.
      </p>
    </div>

    <div className="text-center bg-gray-200 p-15 rounded-2xl">
      <h4 className="text-2xl font-semibold mb-4">
        Discover Our Collection
      </h4>
      <p className="text-gray-600 mb-6">
        Step into comfort and style today with our exclusive range.
      </p>

      <Link
        href="/shop"
        className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Shop Now
      </Link>
    </div>

  </div>
</section>
  

  </>
}
