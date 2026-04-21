"use client";

import { useState, useRef, useEffect } from "react";

export default function Filters() {
  const [active, setActive] = useState(null);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(500);

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

  const handleApply = () => {
    if (from > to) {
      alert("From price cannot be greater than To price");
      return;
    }
    console.log({ from, to });
    setActive(null);
  };

  return <>
    <div className="flex justify-start items-center">
      <span className=' pe-2 border-e-1 border-gray-500 inline-block mb-5 ' >Fillter</span>
      <div className="relative p-6" ref={dropdownRef}>

        {/* Buttons */}
        <div className="flex gap-3 mb-4">
          {/* Availability */}
          <button
            onClick={() =>
              setActive(active === "availability" ? null : "availability")
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${active === "availability"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
              }`}
          >
            Availability
            <span
              className={`text-xs transition-transform ${active === "availability" ? "rotate-180" : ""
                }`}
            >
              ▼
            </span>
          </button>

          <button
            onClick={() =>
              setActive(active === "price" ? null : "price")
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${active === "price"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
              }`}
          >
            Price
            <span
              className={`text-xs transition-transform ${active === "price" ? "rotate-180" : ""
                }`}
            >
              ▼
            </span>
          </button>
        </div>

        {active === "availability" && (
          <div className="absolute top-16 left-0 w-64 bg-white rounded-xl shadow-md border p-4 z-50">
            <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Availability
            </p>

            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">In Stock</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-black"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Sold Out</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-black"
                />
              </label>
            </div>
          </div>
        )}

        {active === "price" && (
          <div className="absolute top-16 left-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 z-50">
            <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wide">
              Price Range
            </p>

            {/* Inputs */}
            <div className="flex gap-3 mb-4">
              <div className="flex flex-col w-full">
                <label className="text-xs text-gray-400 mb-1">From</label>
                <input
                  type="number"
                  value={from}
                  onChange={(e) => setFrom(Number(e.target.value))}
                  className="bg-gray-100 rounded-lg px-3 py-2 outline-none w-full
                           appearance-none
                           [::-webkit-outer-spin-button]:appearance-none
                           [::-webkit-inner-spin-button]:appearance-none
                           focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-xs text-gray-400 mb-1">To</label>
                <input
                  type="number"
                  value={to}
                  onChange={(e) => setTo(Number(e.target.value))}
                  className="bg-gray-100 rounded-lg px-3 py-2 outline-none w-full
                           appearance-none
                           [::-webkit-outer-spin-button]:appearance-none
                           [::-webkit-inner-spin-button]:appearance-none
                           focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleApply}
                className="flex-1 bg-gray-900 text-white py-2 rounded-lg font-medium hover:opacity-90"
              >
                Apply
              </button>

              <button
                onClick={() => {
                  setFrom(0);
                  setTo(500);
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium border hover:bg-gray-200"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div></div>
  </>
}