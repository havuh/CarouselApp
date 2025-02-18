import { Autoplay } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

export default function AppleContinuousCarouselConfig() {
  const speed = 8000

  const swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    speed,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    loop: true,
    modules: [Autoplay],
  }

  return {
    swiperConfig,
  }
}
