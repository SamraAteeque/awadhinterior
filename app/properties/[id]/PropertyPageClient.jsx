"use client"; // <-- This is the most important line!

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";

// Accept the props from the server component
export default function PropertyPageClient({ property, relatedProperties, keyFeatures }) {

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // All the JSX from the old file is pasted here
  return (
    <>
      <header className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover z-0 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/50 to-black/30 z-10" />
        <motion.h1
          className="relative z-20 text-white text-4xl md:text-7xl font-bricolage text-center px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {property.title}
        </motion.h1>
      </header>

      <main className="bg-[var(--white-color)]">
        <div className="px-[8%] lg:px-[12%] py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] font-bricolage mb-3">
                  {property.title}
                </h2>
                <p className="text-xl text-gray-600 font-jost flex items-center gap-2 mb-8">
                  <i className="ri-map-pin-line text-gray-500"></i>
                  {property.location}
                </p>
                <p className="text-lg text-[var(--text-color)] font-jost leading-relaxed mb-12">
                  {property.overview}
                </p>
              </motion.div>

              {/* Description Section */}
              <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <h3 className="text-3xl font-bricolage font-bold text-[var(--primary-color)] mb-6">
                  Description
                </h3>
                {property.description.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-jost text-lg text-[var(--text-color)] leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Key Features */}
              {keyFeatures.length > 0 && (
                <motion.div
                  className="my-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  <h3 className="text-3xl font-bricolage font-bold text-[var(--primary-color)] mb-10">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    {keyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        variants={fadeIn}
                      >
                        <i className="ri-star-line text-xl text-[var(--primary-color)] flex-shrink-0 mt-1"></i>
                        <span className="font-jost text-lg text-[var(--text-color)]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Amenities */}
              <motion.div
                className="my-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <h3 className="text-3xl font-bricolage font-bold text-[var(--primary-color)] mb-10">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                  {property.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={fadeIn}
                    >
                      <i className="ri-checkbox-circle-line text-2xl text-[var(--primary-color)] flex-shrink-0"></i>
                      <span className="font-jost text-lg text-[var(--text-color)]">
                        {amenity}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 relative mt-12 lg:mt-0">
              <motion.div
                className="lg:sticky top-28 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
              >
                <div>
                  <p className="text-sm font-jost text-gray-500 mb-1">Type</p>
                  <p className="text-xl font-jost font-semibold text-[var(--text-color)]">
                    {property.type}
                  </p>
                </div>
                <Link href="/contact" className="block">
                  <motion.button
                    className="w-full mt-4 !bg-[var(--primary-color)] text-white font-jost font-semibold py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enquire Now
                  </motion.button>
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>

        {/* Related Properties */}
        <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50/80">
          <h2 className="text-4xl font-bold font-bricolage mb-10 text-[var(--primary-color)]">
            Related Properties
          </h2>
          <Swiper
            modules={[Navigation]}
            loop={relatedProperties.length > 3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            className="w-full !py-4 related-properties-swiper"
          >
            {relatedProperties.map((relatedProp) => (
              <SwiperSlide key={relatedProp.id}>
                <Link href={`/properties/${relatedProp.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 block h-[450px]">
                    <Image
                      src={relatedProp.image}
                      alt={relatedProp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                      <span className="inline-block bg-white/20 text-white text-xs font-jost px-2 py-1 rounded mb-2">
                        {relatedProp.type}
                      </span>
                      <h3 className="text-2xl font-bricolage font-semibold">
                        {relatedProp.title}
                      </h3>
                      <p className="font-jost text-base opacity-90 flex items-center gap-1 mt-1">
                        <i className="ri-map-pin-line text-sm"></i>
                        {relatedProp.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}