'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import Swal from "sweetalert2";
export default function Page() {

    const params = useParams();
    const ID = Number(params?.id);

    const [count, setCount] = useState(1);
    const { addToCart, cart } = useContext(CartContext);
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

    const product = products.find(p => p.id === ID);

    if (!product) {
        return <h1 className="text-center mt-20 text-xl">Product not found</h1>;
    }

    return <>
        <section className='bg-white text-black py-16'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">

                    <div className="flex justify-center">
                        <Image
                            height={500}
                            width={500}
                            src={product.path}
                            className="w-full max-w-lg object-cover rounded-xl"
                            alt={product.name}
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-6 pt-25">

                        <div className="flex justify-between items-center text-sm">
                            <span className=" tracking-widest font-semibold">S t r a t u s</span>
                            <Link href={`/Collections`} className=" font-semibold">
                                Continue shopping
                            </Link>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                            <h3 className="text-xl font-semibold">{product.price} LE</h3>

                            {product.stock ? (
                                <span className="border border-green-500 p-2 bg-green-500/10 text-green-600 rounded-2xl">
                                    In stock
                                </span>
                            ) : (
                                <span className="border border-red-500 p-2 bg-red-500/10 text-red-700 rounded-2xl">
                                    Sold Out
                                </span>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold">{product.name}</h2>

                        <div>
                            <h3 className="font-semibold mb-1">Description</h3>
                            <p className="text-gray-600">Confidence pants</p>
                        </div>

                        {/* Counter */}
                        <div className="flex items-center justify-between w-40 border border-gray-400 rounded-md px-4 py-2">
                            <button
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                className="text-gray-600 text-xl font-bold hover:text-black transition"
                            >
                                -
                            </button>

                            <span className="text-lg font-medium">{count}</span>

                            <button
                                onClick={() => setCount(count + 1)}
                                className="text-gray-600 text-xl font-bold hover:text-black transition"
                            >
                                +
                            </button>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3 pt-2">
                            <button
                                onClick={() => {
                                    addToCart({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        q: count ,
                                        path : product.path
                                    });

                                    Swal.fire({
                                        position: "bottom-end",
                                        icon: "success",
                                        title: "Added to cart",
                                        showConfirmButton: false,
                                        timer: 1200,
                                        toast: true,
                                    });
                                }}
                                className="w-full bg-white border border-black text-black py-3 font-semibold rounded-md hover:bg-black hover:text-white transition"
                            >
                                <i className="fa-solid fa-bolt mr-2"></i>
                                Add to Cart
                            </button>

                            <button className='w-full bg-white border border-black text-black py-3 font-semibold rounded-md hover:bg-black hover:text-white transition'>
                                <i className="fa-solid fa-bolt mr-2"></i>
                                Buy Now
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </>
}