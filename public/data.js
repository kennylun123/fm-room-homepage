import slideImg1 from "./images/desktop-image-hero-1.jpg";
import slideImg2 from "./images/desktop-image-hero-2.jpg";
import slideImg3 from "./images/desktop-image-hero-3.jpg";

import slideImgMobile1 from "./images/mobile-image-hero-1.jpg";
import slideImgMobile2 from "./images/mobile-image-hero-2.jpg";
import slideImgMobile3 from "./images/mobile-image-hero-3.jpg";

import aboutImgLight from "./images/image-about-light.jpg";
import aboutImgDark from "./images/image-about-dark.jpg";

export const data = {
  slides: [
    {
      title: "Discover innovative ways to decorate",
      content:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      img: slideImg1,
      imgMobile: slideImgMobile1,
    },
    {
      title: "We are available all across the globe",
      content:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      img: slideImg2,
      imgMobile: slideImgMobile2,
    },
    {
      title: "Manufactured with the best materials",
      content:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      img: slideImg3,
      imgMobile: slideImgMobile3,
    },
  ],
  about: {
    title: "About our furniture",
    content:
      "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
    imgs: [
      { id: "Image-about-dark", img: aboutImgDark },
      { id: "Image-about-light", img: aboutImgLight },
    ],
  },
};
