import React, { useRef } from "react";
import carouselData from "./CarouselData";
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const CarouselNews = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mt-6 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        loop={true}
        grabCursor={true}
      >
        {carouselData.map(carousel => (
          <SwiperSlide key={carousel.id}>
            <a href={carousel.navigateLink} className="cursor-pointer block">
            <div className='bg-white inline-block min-h-[400px] max-w-full transition duration-300 shadow-xl hover:shadow-2xl'>
              <div className='image-wrapper'>
                <img src={carousel.bgImageSrc} alt={carousel.description} />
              </div>
              <div className='card-body'>
                <div className="card-header mb-3">
                  <h1 className='text-[#002844] text-xl'>{carousel.description}</h1>
                </div>
                <div className='card-info-btn flex gap-1 align-middle'>
                  <span className='text-[#575757] text-sm'>weiterlesen</span>
                  <FaArrowRight className='my-auto' />
                </div>
              </div>
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel-navigation-wrapper absolute mx-auto top-0 right-0 md:right-3.5 -translate-y-15 h-full pointer-events-none z-[100]">
        <div className="flex justify-end gap-2 md:justify-between ml-auto max-w-[80px]">
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className="custom-nav-btn cursor-pointer !text-[#002844] !w-full !h-10 !bg-white !rounded-full !shadow-lg pointer-events-auto z-[101] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className="custom-nav-btn cursor-pointer !text-[#002844] !w-full !h-10 !bg-white !rounded-full !shadow-lg pointer-events-auto z-[101] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselNews;
