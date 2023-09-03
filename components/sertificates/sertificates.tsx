"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function Sertificates(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free",
    slides: {
      perView: 5,
      spacing: 15,
    },
  });
  return (
    <>
      <div className="sertificate__container">
        <h4 className="sertificate__title">
          НАШИ <span>НАГРАДЫ</span> И <span>СЕРТИФИКАТЫ</span>
        </h4>
        {loaded && instanceRef.current && <Arrow />}

        <div className="keen-slider" ref={sliderRef}>
          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide1"
          >
            <Image
              src="/img/sertificate/1.png"
              width={169}
              height={234}
              alt=""
            />
          </div>

          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide2"
          >
            <Image
              src="/img/sertificate/2.png"
              width={169}
              height={234}
              alt=""
            />
          </div>

          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide3"
          >
            <Image
              src="/img/sertificate/3.png"
              width={169}
              height={234}
              alt=""
            />
          </div>

          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide3"
          >
            <Image
              src="/img/sertificate/3.png"
              width={169}
              height={234}
              alt=""
            />
          </div>

          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide3"
          >
            <Image
              src="/img/sertificate/3.png"
              width={169}
              height={234}
              alt=""
            />
          </div>

          <div
            data-fancybox="sertificate"
            className="keen-slider__slide number-slide3"
          >
            <Image
              src="/img/sertificate/3.png"
              width={169}
              height={234}
              alt=""
            />
          </div>
        </div>

        <div className="sertificate__arrow-right">
          <img src="img/sertificate/arrowRight.svg" alt="" />
        </div>
      </div>
    </>
  );
}

function Arrow() {
  return (
    <>
      <div className="sertificate__arrow-left">
        <img src="img/sertificate/arrow.svg" alt="" />
      </div>
    </>
  );
}
