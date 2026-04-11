"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/Collections" },
    { name: "About", href: "/About" },
    { name: "Contact Us", href: "/Contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md py-5 text-black w-full fixed top-0 left-0 z-50 shadow-sm border-b border-gray-100">
      <div className="flex justify-between items-center px-6 md:px-10">

        {/* Logo */}
        <Link className="text-xl tracking-widest font-semibold" href="/">
          S T R A T U S
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition-all duration-300
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                    after:-bottom-1 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Icons */}
        <div className="flex gap-3">

          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer transition">
            <i className="fas fa-search"></i>
          </div>

          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer transition">
            <i className="fas fa-shopping-cart"></i>
          </div>

          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer transition">
            <i className="fas fa-user"></i>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <i className={`fas ${open ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-5">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block transition ${
                      isActive ? "font-bold" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}