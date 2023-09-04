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
        {loaded && instanceRef.current && (
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />
        )}

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
        {loaded && instanceRef.current && (
          <Arrow
            onClick={(e: any) =>
              e.stopPropagation || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  left?: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
}) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`arrow ${
          props.left
            ? "arrow-left sertificate__arrow-left"
            : "arrow-right sertificate__arrow-right"
        }`}
      >
        <Image
          src={`${
            props.left
              ? "/img/sertificate/arrow.svg"
              : "/img/sertificate/arrowRight.svg"
          }`}
          width={100}
          height={50}
          alt=""
        />
      </div>
    </>
  );
}
