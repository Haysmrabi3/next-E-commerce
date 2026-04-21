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

  const [tempPrice, setTempPrice] = useState({ from: 0, to: 500 });
  const [tempAvailability, setTempAvailability] = useState({
    inStock: false,
    soldOut: false,
  });

  const [active, setActive] = useState(null);
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

      if (filters.inStock && filters.soldOut) {
        stockMatch = true;
      } else if (filters.inStock) {
        stockMatch = item.stock;
      } else if (filters.soldOut) {
        stockMatch = !item.stock;
      }

      return priceMatch && stockMatch;
    });
  };

  const renderItems = (items) => {
    const filtered = applyFilter(items);

    if (filtered.length === 0) {
      return (
        <div className="text-center text-gray-500 py-10 w-full">
          No products found
        </div>
      );
    }

    return filtered.map((item) => (
      <div key={item.id} className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[18%] group">
        <Link href={`/ProductDetails/` + item.id}>
          <Image
            width={300}
            height={300}
            className="rounded-3xl h-[400px] w-full object-cover group-hover:scale-105 transition"
            src={item.path}
            alt={item.name}
          />
          <h4 className="text-center mt-2">{item.name}</h4>
          <p className="text-center text-gray-500">{item.price} EGP</p>
        </Link>

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
      </div>
    ));
  };

  return (
    <section className="pt-30 text-black bg-white">
      <div className="container mx-auto px-4">

        {/* FILTER */}
        <div className="flex gap-4 mb-6 items-center">
          <span className="text-sm text-gray-500 border-r pr-3">Filter</span>

          <div className="relative" ref={dropdownRef}>

            <div className="flex gap-3">

              {/* Availability */}
              <button
                onClick={() => {
                  setActive(active === "availability" ? null : "availability");
                  setTempAvailability({
                    inStock: filters.inStock,
                    soldOut: filters.soldOut,
                  });
                }}
                className={`px-5 py-2 rounded-full ${
                  active === "availability" ? "bg-black text-white" : "bg-white border"
                }`}
              >
                Availability
              </button>

              {/* Price */}
              <button
                onClick={() => {
                  setActive(active === "price" ? null : "price");
                  setTempPrice({
                    from: filters.from,
                    to: filters.to,
                  });
                }}
                className={`px-5 py-2 rounded-full ${
                  active === "price" ? "bg-black text-white" : "bg-white border"
                }`}
              >
                Price
              </button>

            </div>

            {active === "price" && (
              <div className="absolute top-12 left-0 bg-gray-100 border shadow-xl p-5 rounded-2xl z-50 w-72">

                <h4 className="text-xs text-gray-500 mb-4">PRICE RANGE</h4>

                <div className="flex gap-3 mb-5">
                  <input
                    type="number"
                    value={tempPrice.from}
                    onChange={(e) =>
                      setTempPrice({ ...tempPrice, from: Number(e.target.value) })
                    }
                    className="bg-gray-200 w-1/2 rounded-xl px-3 py-2"
                  />
                  <input
                    type="number"
                    value={tempPrice.to}
                    onChange={(e) =>
                      setTempPrice({ ...tempPrice, to: Number(e.target.value) })
                    }
                    className="bg-gray-200 w-1/2 rounded-xl px-3 py-2"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setFilters({ ...filters, ...tempPrice });
                      setActive(null);
                    }}
                    className="w-1/2 bg-black text-white py-2 rounded-xl"
                  >
                    Apply
                  </button>

                  <button
                    onClick={() => {
                      setTempPrice({ from: 0, to: 500 });
                      setFilters({ ...filters, from: 0, to: 500 });
                    }}
                    className="w-1/2 bg-gray-200 py-2 rounded-xl"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {active === "availability" && (
              <div className="absolute top-12 left-0 bg-gray-100 border shadow-xl p-5 rounded-2xl z-50 w-60">

                <h4 className="text-xs text-gray-500 mb-4">AVAILABILITY</h4>

                <div className="flex flex-col gap-3">

                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={tempAvailability.inStock}
                      onChange={(e) =>
                        setTempAvailability({
                          ...tempAvailability,
                          inStock: e.target.checked,
                        })
                      }
                    />
                    In Stock
                  </label>

                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={tempAvailability.soldOut}
                      onChange={(e) =>
                        setTempAvailability({
                          ...tempAvailability,
                          soldOut: e.target.checked,
                        })
                      }
                    />
                    Sold Out
                  </label>

                </div>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => {
                      setFilters({ ...filters, ...tempAvailability });
                      setActive(null);
                    }}
                    className="w-1/2 bg-black text-white py-2 rounded-xl"
                  >
                    Apply
                  </button>

                  <button
                    onClick={() => {
                      setTempAvailability({ inStock: false, soldOut: false });
                      setFilters({ ...filters, inStock: false, soldOut: false });
                    }}
                    className="w-1/2 bg-gray-200 py-2 rounded-xl"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        <h3 className="text-3xl font-semibold">Pants</h3>
        <div className="flex gap-5 mt-5 flex-wrap">{renderItems(Pants)}</div>

        <h3 className="text-3xl font-semibold mt-10">Shirts</h3>
        <div className="flex gap-5 mt-5 flex-wrap">{renderItems(shirt)}</div>

        <h3 className="text-3xl font-semibold mt-10">Hoodies</h3>
        <div className="flex gap-5 mt-5 flex-wrap">{renderItems(Hoodies)}</div>

        <h3 className="text-3xl font-semibold mt-10">Tee</h3>
        <div className="flex gap-5 mt-5 flex-wrap pb-20">
          {renderItems(Tee)}
        </div>

      </div>
    </section>
  );
}