"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
export default function Sertificates(): JSX.Element {
  const [keenref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
    },
  });
  return (
    <>
      <div className="sertificate__container">
        <h4 className="sertificate__title">
          НАШИ <span>НАГРАДЫ</span> И <span>СЕРТИФИКАТЫ</span>
        </h4>
        <div className="sertificate__body">
          <div className="sertificate__arrow-left">
            <img src="img/sertificate/arrow.svg" alt="" />
          </div>
          <div className="sertificate__swiper swiper">
            <div className="keen-slider" ref={keenref}>
              <a
                href="img/sertificate/1.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/1.png" alt="" />
              </a>
              <a
                href="img/sertificate/2.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/2.png" alt="" />
              </a>
              <a
                href="img/sertificate/3.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/3.png" alt="" />
              </a>
              <a
                href="img/sertificate/4.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/4.png" alt="" />
              </a>
              <a
                href="img/sertificate/5.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/5.png" alt="" />
              </a>
              <a
                href="img/sertificate/3.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/3.png" alt="" />
              </a>
              <a
                href="img/sertificate/4.png"
                data-fancybox="sertificate"
                className="keen-slider-slide"
              >
                <img src="img/sertificate/4.png" alt="" />
              </a>
            </div>
          </div>
          <div className="sertificate__arrow-right">
            <img src="img/sertificate/arrowRight.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
