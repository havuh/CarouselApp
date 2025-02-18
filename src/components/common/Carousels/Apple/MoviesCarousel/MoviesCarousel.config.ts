import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function MoviesCarouselConfig() {
  const swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.apple-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.apple-next',
      prevEl: '.apple-prev',
    },
    modules: [Pagination, Navigation, Autoplay],
  }

  return {
    swiperConfig,
  }
}
