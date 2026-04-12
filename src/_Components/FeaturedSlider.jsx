"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function FeaturedSlider() {
  return (
    <div className="relative">

      {/* NAV BUTTONS (TOP RIGHT) */}
      <div className="absolute top-2 right-2 flex gap-2 z-10">
        <button className="prev-btn bg-black text-white w-9 h-9 rounded-full flex items-center justify-center">
          ←
        </button>

        <button className="next-btn bg-black text-white w-9 h-9 rounded-full flex items-center justify-center">
          →
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <Image
            src="/Home/nc6ayvn8pxai4pwhple9 (1).jpg"
            width={300}
            height={400}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Home/hte6n1h4pcs0tonxfbba (1).jpg"
            width={300}
            height={400}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Home/deszkx7hhtda6dodz9na.jpg"
            width={300}
            height={400}
            alt=""
          />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}