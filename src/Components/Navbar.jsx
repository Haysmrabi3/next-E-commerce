"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/Collections" },
    { name: "About", href: "/About" },
    { name: "Contact Us", href: "/Contact" },
  ];

  return (
    <nav className="bg-white py-5 text-black w-full">
      <div className="flex justify-between items-center px-10">

        {/* Logo */}
        <Link className="text-xl tracking-widest" href="/">
          S T R A T U S
        </Link>

        {/* Links */}
        <ul className="flex gap-10">
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
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
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
          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">
            <i className="fas fa-search"></i>
          </div>

          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">
            <i className="fas fa-shopping-cart"></i>
          </div>

          <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">
            <i className="fas fa-user"></i>
          </div>
        </div>

      </div>
    </nav>
  );
}