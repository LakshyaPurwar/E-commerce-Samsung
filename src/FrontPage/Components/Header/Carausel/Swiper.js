// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import './Caraousel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


export default () => {
    SwiperCore.use([Autoplay]);
  return (
    <Swiper
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      speed={200}
      autoplay={{delay:2000}}
      navigation
      pagination={{ clickable: true}}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mySwiper'
    >
      <SwiperSlide><div className='slide slide1'></div></SwiperSlide>
      <SwiperSlide><div className='slide slide2'></div></SwiperSlide>
      <SwiperSlide><div className='slide slide3'></div></SwiperSlide>
      <SwiperSlide><div className='slide slide4'></div></SwiperSlide>
    </Swiper>
  );
};