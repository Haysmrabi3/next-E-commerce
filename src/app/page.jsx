import Image from "next/image";
import Link from "next/link";

export default function Home() {



  const products = [
    {
      name: `ZIP UP HOODIE`,
      path: `/Home/hoodie.jpg`,
      stock: true
    }, {
      name: `Jeans`,
      path: `/Collections/frvyqgsh0d6sdcv65pfk (1).jpg`,
      stock: false
    }, {
      name: `Basic Hoodie`,
      path: `/Home/gooo.jpg`,
      stock: true
    }, {
      name: `Sweat Pants`,
      path: `/Home/sweet pants1.jpg`,
      stock: false
    }, {
      name: `Sweat Pants`,
      path: `/Home/sweet pants 2.jpg`,
      stock: true
    }
  ]
















  return (
    <>
      {/* HERO */}
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

              <Link href={`/`}>

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

              <Link href={`/`}>

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

              <Link href={`/`}>

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

              <Link href={`/`}>

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

            {/* TEXT */}
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

      <section id="Featured" className="h-screen bg-white text-black">
        <div className="container mx-auto mt-15 ">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Featured Products</h3>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500">5 items</p>
          <div className="">
            <div className="flex gap-5 mt-10 ">
              <div className="flex gap-5">
                {products.map((item, index) => {
                  return <div key={index} className="relative">
                    <Link href={`/`} >
                      <Image width={400} height={300} className="rounded-3xl h-[400px]" src={item.path}></Image>
                      <h4 className="font-semibold mt-2 text-center  " >{item.name}</h4>
                    </Link>
                    <div className="absolute top-5 right-5">
                      <span>{item.stock ? <span className="border border-green-500 p-2 font-semibold bg-green-500/10 text-green-600 rounded-2xl" >In stock</span>
                        :

                        <span className="border border-red-500 p-2 font-semibold bg-red-500/10 text-red-700  rounded-2xl" >Sold Out</span>}
                      </span>
                    </div>
                  </div>
                })}
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}