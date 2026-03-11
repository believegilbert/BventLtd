"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePgHeroSec = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 h-full"
      >
        {/* Slides */}
        <SwiperSlide className="relative">
          <Image
            src="/hero1.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src="/hero2.jpg"
            alt="Hero"
            fill
            className="object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src="/hero3.jpg"
            alt="Hero"
            fill
            className="object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>

      {/* Centered Text with slight blur */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="bg-black/30 rounded-lg px-15 py-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Expertise that inspire confidence. <br/> <span className="md:text-5xl">Buildings that stand the test of time.</span>
          </h1>

          <p className="mt-4 text-lg md:text-[2rem] text-white">
            With a legacy of excellence in construction,
            <br />
            Bvent is committed to our customers satisfaction.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HomePgHeroSec;