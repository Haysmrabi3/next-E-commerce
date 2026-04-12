import React from 'react'

export default function Contact() {
    return <>
        <section id="Contact" className="bg-gray-50 py-16 text-black font-semibold "  >
            <div className="container mx-auto px-6 max-w-3xl">

                {/* Title */}
                <div className="text-center mb-10">
                    <h4 className="text-3xl font-bold mb-3">Contact Us</h4>
                    <p className="text-gray-600">
                        Have a question, issue, or feedback? We'd love to hear from you.
                    </p>
                </div>

                {/* Form */}
                <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block mb-2 font-semibold">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 font-semibold">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block mb-2 font-semibold">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Optional"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block mb-2 font-semibold">
                            Message
                        </label>
                        <textarea
                            required
                            id="message"
                            rows="5"
                            placeholder="Write Your Message Here..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </section>





    </>
}
