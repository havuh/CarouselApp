import { Autoplay, EffectCoverflow } from 'swiper/modules'
import {
  AutoplayOptions,
  CoverflowEffectOptions,
  type SwiperOptions,
} from 'swiper/types'

export default function CoverflowCarouselConfig() {
  const breakpoints: BreakpointsOptions = {
    320: { slidesPerView: 1, spaceBetween: -20 },
    640: { slidesPerView: 3, spaceBetween: -12 },
    1440: { slidesPerView: 5, spaceBetween: -12 },
  }

  const coverflowEffect: CoverflowEffectOptions = {
    rotate: 0,
    stretch: -100,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }

  const autoplayEffect: AutoplayOptions = {
    delay: 5000,
    disableOnInteraction: false,
  }

  const swiperConfig: SwiperOptions = {
    breakpoints: breakpoints,
    effect: 'coverflow',
    speed: 2000,
    autoplay: autoplayEffect,
    coverflowEffect: coverflowEffect,
    modules: [EffectCoverflow, Autoplay],
    centeredSlides: true,
    loop: true,
  }

  return {
    swiperConfig,
  }
}
