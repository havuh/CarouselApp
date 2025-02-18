import { Autoplay, FreeMode } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export default function ContinuousCarouselConfig() {
  const speed = 8000

  const swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    speed,
    freeMode: true,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    loop: true,
    modules: [Autoplay, FreeMode],
  }

  return {
    swiperConfig,
  }
}
