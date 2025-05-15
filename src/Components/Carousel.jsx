
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



function Carousel() {

    const carouselBanners = [
      {
        id: 1,
        title: 'Hallo Sommer!',
        titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
        description: '#wirfliegenabhier in Richtung Sommer. Wer is dabei?',
        descriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
        images: {
          default: 'https://www.fmo.de/fileadmin/Content/Home/slider_kreta.jpg',
          xs: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_51a5e073a3.jpg',
          sm: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_2c53e8d36e.jpg',
          md: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_22cd717e85.jpg',
          lg: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_c0f4dd3556.jpg',
          xl: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_7607beed83.jpg',
          xxl: 'https://www.fmo.de/fileadmin/_processed_/f/a/csm_slider_kreta_8c0d8b05a2.jpg'
        },
        alt: 'Image Banner Kreta'
      },
        
        {
            id: 2,
            title: 'Sightseeing in London',
            titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
            description:'Mit Ryanair in die britische Metropole',
            descriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
            images: {
              default: 'https://www.fmo.de/fileadmin/Content/Home/aegypten_reisetyp2.jpg',
              xs: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_8356b376a9.jpg',
              sm: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_469855df37.jpg',
              md: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_5c5bf6ea9f.jpg',
              lg: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_8a17c49f43.jpg',
              xl: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_3c9d088d4c.jpg',
              xxl: 'https://www.fmo.de/fileadmin/_processed_/4/d/csm_aegypten_reisetyp2_3009d3c67a.jpg'
            },
            alt: 'Image Banner aegypten'
          },
          {
            id: 3,
            title: '#wirfliegenabhier',
            titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
            description: 'Mickie Krause auch!',
            descriptionClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-[#002844] font-semibold',
            images: {
              default: 'https://www.fmo.de/fileadmin/Content/Home/MK_Slider.jpg',
              xs: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_c8504fdae1.jpg',
              sm: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_a59c3e7480.jpg',
              md: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_100a3069e1.jpg',
              lg: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_f28d15d591.jpg',
              xl: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_557c6ea713.jpg',
              xxl: 'https://www.fmo.de/fileadmin/_processed_/6/0/csm_MK_Slider_4695fd17bd.jpg'
            },
            alt: 'Image Banner MK'
          },
          {
            id: 4,
            title: 'Volle Kanne Ryanair!',
            titleClass: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[#002844] font-bold',
            description: (
              <>
                Alicante, Korfu, London, Málaga, Palma und Zadar zu
                Schnäppchenpreisen!
              </>
            ),
            descriptionClass: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#212529] font-semibold',
            images: {
              default: 'https://www.fmo.de/fileadmin/Content/Home/ryanair_header.jpg',
              xs: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_0768b36c18.jpg',
              sm: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_7b448c6beb.jpg',
              md: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_603c8a35f3.jpg',
              lg: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_994fc85dc0.jpg',
              xl: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_12cd3d68e1.jpg',
              xxl: 'https://www.fmo.de/fileadmin/_processed_/5/3/csm_ryanair_header_625cfdff06.jpg'
            },
            alt: 'Image Banner Ryanair'
          }

        
      ];

    return(
        <div className="carousel-container relative lg:h-[580px]">
          
  <Swiper
    className="h-full [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white relative"
    
    modules={[Navigation, Pagination, Autoplay, EffectFade]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
  >
    {carouselBanners.map(banner => (
      <SwiperSlide className="h-full" key={banner.id}>
        <picture className="w-full h-full block">
          <source srcSet={banner.images.xxl} media="(min-width: 2560px)" />
          <source srcSet={banner.images.xl} media="(min-width: 1200px)" />
          <source srcSet={banner.images.lg} media="(min-width: 992px)" />
          <source srcSet={banner.images.md} media="(min-width: 769px)" />
          <source srcSet={banner.images.sm} media="(min-width: 576px)" />
          <source srcSet={banner.images.xs}/>
          <img 
            src={banner.images.default} 
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="banner--text px-5 top-[25%] lg:top-[40%] left-[0] sm:left-[5%] md:left-[5%] lg:left-[8%] flex flex-col gap-3 absolute z-50">
  <span className={`banner--title smoke-effect ${banner.titleClass || ''}`}>{banner.title}</span>
  <span className={`banner--gradient smoke-effect ${banner.descriptionClass || ''}`}>{banner.description}</span>
</div>
      </SwiperSlide>
    ))}
    
  </Swiper>
</div>
    );
}

export default Carousel;

