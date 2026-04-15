"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  const [filters, setFilters] = useState({
    from: 0,
    to: 500,
    inStock: false,
    soldOut: false,
  });

  const [active, setActive] = useState(null);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(500);
  const [inStock, setInStock] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActive(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Pants = [
    { name: "Jeans", path: "/Collections/1.jpg", stock: true, id: 1, price: 120 },
    { name: "Sweat Pants", path: "/Collections/3.jpg", stock: false, id: 3, price: 80 },
    { name: "Jeans", path: "/Collections/4.jpg", stock: true, id: 4, price: 150 },
    { name: "Sweat Pants", path: "/Collections/6.jpg", stock: false, id: 6, price: 70 },
    { name: "Jeans", path: "/Collections/10.jpg", stock: true, id: 10, price: 200 }
  ];

  const shirt = [
    { name: "Summer Shirt", path: "/Collections/5.jpg", stock: true, id: 5, price: 90 }
  ];

  const Hoodies = [
    { name: "Basic Hoodie", path: "/Collections/7.jpg", stock: true, id: 7, price: 180 },
    { name: "Crew Neck Hoodie", path: "/Collections/9.jpg", stock: false, id: 9, price: 160 },
    { name: "ZIP UP HOODIE", path: "/Collections/12.jpg", stock: true, id: 12, price: 220 }
  ];

  const Tee = [
    { name: "Boxy fit", path: "/Collections/2.jpg", stock: true, id: 2, price: 60 },
    { name: "Old Money T-Shirt", path: "/Collections/8.jpg", stock: false, id: 8, price: 75 },
    { name: "Sport T-Shirt", path: "/Collections/11.jpg", stock: true, id: 11, price: 85 }
  ];

  const applyFilter = (items) => {
    return items.filter((item) => {
      const priceMatch =
        item.price >= filters.from && item.price <= filters.to;

      let stockMatch = true;

      if (filters.inStock && !item.stock) stockMatch = false;
      if (filters.soldOut && item.stock) stockMatch = false;

      return priceMatch && stockMatch;
    });
  };

  const renderItems = (items) => {
    const filtered = applyFilter(items);

    if (filtered.length === 0) {
      return (
        <div className="text-center text-gray-500 py-10 w-full">
          No products found with these filters
        </div>
      );
    }

    return filtered.map((item) => (
      <div
        key={item.id}
        className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[18%] group "
      >
        <Link href="/">
          <Image
            width={300}
            height={300}
            className="rounded-3xl h-[400px] w-full object-cover 
                       transition-transform duration-300 group-hover:scale-105"
            src={item.path}
            alt={item.name}
          />

          <h4 className="text-center mt-2">{item.name}</h4>
          <p className="text-center text-gray-500">{item.price} EGP</p>
        </Link>

        {/* Stock Badge */}
        <div className="absolute top-5 right-5">
          {item.stock ? (
            <span className="border border-green-500 p-2 bg-green-500/10 text-green-600 rounded-2xl">
              In stock
            </span>
          ) : (
            <span className="border border-red-500 p-2 bg-red-500/10 text-red-700 rounded-2xl">
              Sold Out
            </span>
          )}
        </div>

        <div
          className="absolute bottom-0 left-[25%]  p-5 
               opacity-0 -translate-y-8 
               group-hover:opacity-100 group-hover:-translate-y-10
               transition-all duration-300 w-full"
        >
          <Link href={`/`} className="font-semibold text-blcak bg-white/60 px-4 py-2 rounded-xl overflow-hidden">
            View Details
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <section className="pt-30 text-black bg-white">
      <div className="container mx-auto px-4">

        {/* FILTER */}
        <div className="flex flex-wrap justify-start items-center gap-4 mb-6">

          <span className="text-sm font-semibold text-gray-500 border-r pr-3">
            Filter
          </span>

          <div className="relative" ref={dropdownRef}>

            <div className="flex gap-3 flex-wrap">

              <button
                onClick={() =>
                  setActive(active === "availability" ? null : "availability")
                }
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md
                ${active === "availability"
                    ? "bg-black text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Availability
              </button>

              <button
                onClick={() =>
                  setActive(active === "price" ? null : "price")
                }
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md
                ${active === "price"
                    ? "bg-black text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Price
              </button>

            </div>

          </div>
        </div>

        {/* PRODUCTS */}
        <h3 className="text-3xl font-semibold mt-5">Pants</h3>
        <div className="flex gap-5 mt-5 flex-wrap">
          {renderItems(Pants)}
        </div>

        <h3 className="text-3xl font-semibold mt-10">Shirts</h3>
        <div className="flex gap-5 mt-5 flex-wrap">
          {renderItems(shirt)}
        </div>

        <h3 className="text-3xl font-semibold mt-10">Hoodies</h3>
        <div className="flex gap-5 mt-5 flex-wrap">
          {renderItems(Hoodies)}
        </div>

        <h3 className="text-3xl font-semibold mt-10">Tee</h3>
        <div className="flex gap-5 mt-5 flex-wrap pb-20">
          {renderItems(Tee)}
        </div>

      </div>
    </section>
  );
}