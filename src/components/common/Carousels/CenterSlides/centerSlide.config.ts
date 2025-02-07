export default function CenterSlideConfig() {
  const coverflowEffect = {
    rotate: 0,
    stretch: -100,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }

  const autoplayEffect = {
    delay: 5000,
    disableOnInteraction: false,
  }

  return {
    coverflowEffect,
    autoplayEffect,
  }
}
