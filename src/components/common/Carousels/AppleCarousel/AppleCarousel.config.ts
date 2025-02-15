import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

export default function AppleCarouselConfig() {
  const swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 4000,
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
