"use client";
import { Media } from "@/lib/types";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DEFAULT_THUMBNAIL =
  "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png";

const ProductTrailer = ({ media }: { media: Media[] }) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<
    import("swiper").Swiper | null
  >(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handlePlayClick = (resourceValue: string) => {
    setPlayingVideoId(resourceValue);
  };

  return (
    <div className="relative">
      {/* Main Swiper */}
      <div className="relative">
        {/* Navigation Buttons - Centered */}
        <div className="absolute inset-0 z-10 flex items-center justify-between px-8 pointer-events-none">
          <button
            ref={prevRef}
            className="pointer-events-auto bg-white text-black p-1 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            ref={nextRef}
            className="pointer-events-auto bg-white text-black p-1 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowRight size={14} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="mb-4"
        >
          {media.map((item, idx) => {
            const isThisVideoPlaying = playingVideoId === item.resource_value;
            const thumbnailUrl = item.thumbnail_url || DEFAULT_THUMBNAIL;

            return (
              <SwiperSlide key={idx}>
                <div>
                  {item.resource_type === "video" ? (
                    <div className="rounded-lg shadow-lg">
                      <div
                        className="relative w-full rounded-lg overflow-hidden"
                        style={{ paddingBottom: "56.25%" }}
                      >
                        {!isThisVideoPlaying ? (
                          <div
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer group"
                            onClick={() => handlePlayClick(item.resource_value)}
                          >
                            <Image
                              src={thumbnailUrl}
                              alt={`Video Thumbnail for ${item.name}`}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src =
                                  DEFAULT_THUMBNAIL;
                              }}
                            />
                            <svg
                              className="relative z-10 w-20 h-20 text-white transition-transform duration-300 group-hover:scale-110"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                          </div>
                        ) : (
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1&rel=0`}
                            title={`Video Trailer for ${item.name}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={thumbnailUrl}
                      alt={item.name}
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Thumbnails Swiper */}
      <div className="mt-4 ">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={Math.min(media.length, 6)}
          spaceBetween={10}
          watchSlidesProgress
        >
          {media.map((item, idx) => {
            const thumbnailUrl = item.thumbnail_url || DEFAULT_THUMBNAIL;

            return (
              <SwiperSlide key={idx}>
                <div
                  className={`border-2 rounded-md ${
                    idx === activeIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  } transition duration-200`}
                >
                  <Image
                    src={thumbnailUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    width={130}
                    height={60}
                    className="rounded-md cursor-pointer hover:opacity-80"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductTrailer;
