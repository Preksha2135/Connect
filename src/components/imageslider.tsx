import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "src/fruitmap.jpg",
  "src/spicemap.jpg",
  "src/sweetmap.jpg",
  "src/streetfoodmap.jpg",
];

const ImageSlider: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
  src={src}
  alt={`Slide ${index + 1}`}
  className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"/>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
