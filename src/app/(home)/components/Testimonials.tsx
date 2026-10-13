"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Icon } from "@iconify/react";
import Image from "next/image";
import client5Logo from "@/assets/images/clients/5.svg";
import team1Img from "@/assets/images/team/1.jpg";
import team3Img from "@/assets/images/team/3.jpg";

const testimonials = [
  {
    stars: 5,
    logo: client5Logo,
    text: "We've written better content in less time this AI tool is like hiring 5 extra writers without the cost, or creative burnout and ship faster than ever before.",
    author: "Liam Hart - Head of Content @ StartupX",
    image: team1Img,
  },
  {
    stars: 5,
    logo: client5Logo,
    text: "Creative fatigue is gone. Our team produces more, with higher quality, and without the usual stress. It feels like we finally found our unfair advantage.",
    author: "Daniel Brooks, CEO @ LaunchForge",
    image: team3Img,
  },
];

const Testimonials = () => {
  const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="grid grid-cols-3 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100 relative">
      {/* Testimonial Content Swiper */}
      <div className="md:col-span-2 col-span-3">
        <div className="md:relative">
        <Swiper
          modules={[Controller, Navigation, EffectFade]}
          onSwiper={setTextSwiper}
          controller={{ control: imageSwiper }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          navigation={{
            nextEl: ".testimonial-swiper-next",
            prevEl: ".testimonial-swiper-prev",
          }}
          className="testimonial-content-swiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-default-950 border-y-2 border-default-800 divide-x-2 divide-y-2 divide-default-800">
                <div className="relative flex items-center justify-between divide-x-2 divide-default-800">
                  <div className="p-7.5 grow">
                    <div className="flex gap-1.5 text-primary">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Icon
                          key={i}
                          icon="tabler:star-filled"
                          className="size-4"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-7.5">
                    <Image
                      src={item.logo}
                      loading="lazy"
                      alt="Client Logo"
                      className="size-full"
                    />
                  </div>

                  <div className="decoration">
                    <span className="decoration-top"></span>
                    <span className="decoration-bottom"></span>
                  </div>
                </div>

                <div className="py-15 px-7.5">
                  <p className="text-lg text-white">{item.text}</p>
                </div>

                <div className="relative p-7.5">
                  <div className="text-white">{item.author}</div>
                  <div className="decoration">
                    <span className="decoration-top"></span>
                    <span className="decoration-bottom"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
          <div className="absolute bottom-0 inset-e-0 z-10 mx-auto flex justify-end items-center border-s-2 md:bg-transparent bg-white md:border-default-800 border-default-100 divide-x-2 md:divide-default-800 divide-default-100">
          <button className="testimonial-swiper-prev static! flex justify-center items-center md:size-20! size-10">
            <Icon icon="tabler:arrow-narrow-left" className="text-default-600 size-6" />
          </button>

          <button className="testimonial-swiper-next static! flex justify-center items-center md:size-20! size-10">
            <Icon icon="tabler:arrow-narrow-right" className="text-default-600 size-6" />
          </button>
          </div>
        </div>
      </div>

      {/* Testimonial Image Swiper */}
      <div className="md:col-span-1 col-span-3">
        <Swiper
          modules={[Controller, EffectFade]}
          onSwiper={setImageSwiper}
          controller={{ control: textSwiper }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          allowTouchMove={true}
          className="testimonial-image-swiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={item.image}
                alt="Testimonial Author"
                fill
                className="size-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
