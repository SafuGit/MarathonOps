import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const bannerSlides = [
  {
    eventHighlights: "Fight Marathon 2026 – Experience the thrill of the city run.",
    imageUrl: "https://cdn.britannica.com/93/253593-138-0DD5803B/History-of-the-marathon.jpg?w=800&h=450&c=crop"
  },
  {
    eventHighlights: "Secure your spot by June 27th – Join the biggest run of the year!",
    imageUrl: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ww9wvhhpniruvkhmsncv"
  },
  {
    eventHighlights: "Challenge yourself with a 10K Run through the heart of The Mountains.",
    imageUrl: "https://images.ctfassets.net/7ajcefednbt4/3L9DDPPSZiCIBtTaKq3L3U/a08cbaa48d19a1111a0472c8a643934c/Marathon_runners___BABAROGA.jpg?fm=webp&w=2560"
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-[90vw] mx-auto mt-30 mb-20">
      <div className="text-center mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-green-950">
          Upcoming Highlights
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Stay updated with our featured events and never miss a chance to run with us.
        </p>
      </div>

      <Slider {...settings}>
        {bannerSlides.map((slide, index) => (
          <div key={index}>
            <div
              className="min-h-[70vh] flex items-center justify-center rounded-xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative text-center max-w-2xl px-6">
                <h3 className="text-2xl sm:text-4xl text-white font-semibold mb-6 drop-shadow-lg">
                  {slide.eventHighlights}
                </h3>
                <button className="bg-yellow-500 text-green-950 font-semibold px-6 py-3 rounded-full text-lg hover:bg-green-950 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
