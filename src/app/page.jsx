import Image from "next/image";
import Link from "next/link";

export default function Home() {



    const products = [
        { name: "Jeans", path: "/Collections/1.jpg", stock: true, id: 1, price: 120 },
        { name: "Sweat Pants", path: "/Collections/3.jpg", stock: false, id: 3, price: 80 },
        { name: "Jeans", path: "/Collections/4.jpg", stock: true, id: 4, price: 150 },
        { name: "Old Money T-Shirt", path: "/Collections/8.jpg", stock: false, id: 8, price: 75 },
        { name: "Sport T-Shirt", path: "/Collections/11.jpg", stock: true, id: 11, price: 85 }
    ];



  return (
    <>
      <header id="head" className="h-[90vh] pt-24">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col items-center h-full justify-end text-center">

            <p className="text-lg sm:text-2xl mb-5">
              Browse the Collection
            </p>

            <Link
              className="border px-6 sm:px-10 py-3 sm:py-5 rounded-xl mb-40 hover:bg-black hover:text-white transition"
              href={`/Collections`}
            >
              Show All
            </Link>

            <div>

            </div>

          </div>
        </div>
      </header>

      <section className="bg-white text-black py-16" id="Categories">
        <div className="container mx-auto px-4">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Categories
          </h3>

          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500">
            4 categories
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <div className="card border rounded-lg p-5 cursor-pointer relative group overflow-hidden">

              <Link href={`/Collections`}>

                <Image
                  width={400}
                  height={400}
                  className="w-full transition duration-500 group-hover:scale-110"
                  src={`/Home/nc6ayvn8pxai4pwhple9 (1).jpg`}
                  alt="product"
                />

                <div className="absolute w-full h-full bottom-0 left-0 
                  bg-gradient-to-t from-black from-[0%] to-transparent to-[80%]
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 flex items-end">

                  <h5 className="mb-5 ms-5 text-white font-semibold">
                    Explore
                  </h5>

                  <i className="mb-5 ms-2 text-white fa-solid fa-arrow-right text-xl"></i>

                </div>

              </Link>

              <h5 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 group-hover:invisible">
                Pants
              </h5>
            </div>

            <div className="card border rounded-lg p-5 cursor-pointer relative group overflow-hidden">

              <Link href={`/Collections`}>

                <Image
                  width={400}
                  height={400}
                  className="w-full transition duration-500 group-hover:scale-110"
                  src={`/Home/hte6n1h4pcs0tonxfbba (1).jpg`}
                  alt="product"
                />

                <div className="absolute w-full h-full bottom-0 left-0 
                  bg-gradient-to-t from-black from-[0%] to-transparent to-[80%]
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 flex items-end">

                  <h5 className="mb-5 ms-5 text-white font-semibold">
                    Explore
                  </h5>

                  <i className="mb-5 ms-2 text-white fa-solid fa-arrow-right text-xl"></i>

                </div>

              </Link>

              <h5 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 group-hover:invisible">
                Shirt
              </h5>
            </div>

            <div className="card border rounded-lg p-5 cursor-pointer relative group overflow-hidden">

              <Link href={`/Collections`}>

                <Image
                  width={400}
                  height={400}
                  className="w-full transition duration-500 group-hover:scale-110"
                  src={`/Home/deszkx7hhtda6dodz9na.jpg`}
                  alt="product"
                />

                <div className="absolute w-full h-full bottom-0 left-0 
                  bg-gradient-to-t from-black from-[0%] to-transparent to-[80%]
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 flex items-end">

                  <h5 className="mb-5 ms-5 text-white font-semibold">
                    Explore
                  </h5>

                  <i className="mb-5 ms-2 text-white fa-solid fa-arrow-right text-xl"></i>

                </div>

              </Link>

              <h5 className="text-lg sm:text-xl mt-17 lg:text-2xl font-semibold mt-2 group-hover:invisible">
                Hoodie
              </h5>
            </div>

            <div className="card border rounded-lg p-5 cursor-pointer relative group overflow-hidden">

              <Link href={`/Collections`}>

                <Image
                  width={400}
                  height={400}
                  className="w-full transition duration-500 group-hover:scale-110"
                  src={`/Home/nsmrwlfox0pmpedy12xd (1).jpg`}
                  alt="product"
                />

                <div className="absolute w-full h-full bottom-0 left-0 
                  bg-gradient-to-t from-black from-[0%] to-transparent to-[80%]
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 flex items-end">

                  <h5 className="mb-5 ms-5 text-white font-semibold">
                    Explore
                  </h5>

                  <i className="mb-5 ms-2 text-white fa-solid fa-arrow-right text-xl"></i>

                </div>

              </Link>

              <h5 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 group-hover:invisible">
                Tee
              </h5>
            </div>

          </div>
        </div>
      </section>

      <section id="STRATUS" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1 text-center md:text-left">

              <h4 className="text-2xl sm:text-3xl font-bold mb-4 tracking-widest">
                STRATUS
              </h4>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                We provide professional-quality products and a seamless user experience,
                carefully designed to meet your needs and exceed expectations.
              </p>

              <Link
                href={`/`}
                className="inline-block border px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
              >
                Discover More
              </Link>

            </div>

            <div className="flex-1 flex justify-center">

              <Image
                width={600}
                height={600}
                src={`/Home/landing.jpg`}
                alt="STRATUS"
                className="rounded-lg w-full md:w-[500px] lg:w-[600px] object-cover shadow-md"
              />

            </div>

          </div>

        </div>
      </section>

<section id="Featured" className="min-h-screen bg-white text-black">
  <div className="container mx-auto pt-10 px-4">
    
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
      Featured Products
    </h3>
    <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500">
      5 items
    </p>

    <div className="mt-10 grid gap-6 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-5">
      
      {products.map((item) => {
        return (
     <div key={item.id} className="relative group ">

  <Link href={`/ProductDetails/` +  item.id}>
    <Image
      width={400}
      height={300}
      className="rounded-3xl w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
      src={item.path}
      alt={item.name}
    />

    <h4 className="font-semibold mt-3 text-center">
      {item.name}
    </h4>
  </Link>

  <div className="absolute top-5 right-5">
    {item.stock ? (
      <span className="border border-green-500 px-3 py-1 text-sm font-semibold bg-green-500/10 text-green-600 rounded-2xl">
        In stock
      </span>
    ) : (
      <span className="border border-red-500 px-3 py-1 text-sm font-semibold bg-red-500/10 text-red-700 rounded-2xl">
        Sold Out
      </span>
    )}
  </div>

  <div
    className="absolute bottom-0 left-[25%]  p-5 
               opacity-0 -translate-y-4 
               group-hover:opacity-100 group-hover:-translate-y-6 
               transition-all duration-300 w-full"
  >
    <Link href={`/ProductDetails/` + item.id} className="font-semibold text-blcak bg-white/60 px-4 py-2 rounded-xl overflow-hidden">
      View Details
    </Link>
  </div>

</div>
        );
      })}

    </div>
  </div>
</section>
    </>
  );
}