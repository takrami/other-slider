import { SliderConfig } from "../types";

import { DefaultNextArrow, DefaultPrevArrow } from "../components/Arrow";

export const defaultConfig: SliderConfig = {
  autoPlay: false,
  showArrows: true,
  maxWidth: "100%",
  dots: true,
  dotsSize: "10px",
  dotsDefaultColor: "#bbb",
  dotsHoverColor: "#ccc",
  dotsActiveColor: "#fff",
  nextArrow: DefaultNextArrow,
  prevArrow: DefaultPrevArrow,
  animationType: "lazy",
  delay: 2000,
  loop: true,
  slidesToShow: 1,
  onSlideChange: () => undefined,
  onSlideStart: () => undefined,
  onSlideEnd: () => undefined,
};
