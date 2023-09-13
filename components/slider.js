"use client";

import styles from "./slider.module.css";
import utils from "./utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleToPrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleToNextSlide = () => {
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className={`${styles.carouselWrapper} ${utils.grid}`}>
      <div id={styles.slider}>
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.imgWrapper} ${utils.flex}`}
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                className={styles.slides}
                src={slide.img.src}
                srcSet={`${slide.img.src}, ${slide.imgMobile.src} 376w`}
                alt={`slide image ${index}`}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.slideControl} ${utils.flex}`}>
          <button
            className={styles.btnPrevSlide}
            onClick={handleToPrevSlide}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className={styles.btnNextSlide}
            onClick={handleToNextSlide}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div id={styles.sliderText}>
        <h1 className={`${utils.fs900} ${utils.fw600}`}>
          {slides[slideIndex].title}
        </h1>
        <p>{slides[slideIndex].content}</p>
        <Link href={""} className={`${styles.shopLink} ${utils.flex}`}>
          Shop now
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fillRule="nonzero"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
