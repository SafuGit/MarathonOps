import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const bannerSlides = [
  {
    eventHighlights: "Join the New Dhaka Marathon and experience the thrill of the city run!",
    imageUrl: "https://www.thefinancialpostbd.com/2025/02/08/fp_1739007677.jpg"
  },
  {
    eventHighlights: "Register by June 27th to secure your spot in the biggest run of the year!",
    imageUrl: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ww9wvhhpniruvkhmsncv"
  },
  {
    eventHighlights: "10K Run through the heart of Dhaka — challenge yourself and inspire others!",
    imageUrl: "https://images.ctfassets.net/7ajcefednbt4/3L9DDPPSZiCIBtTaKq3L3U/a08cbaa48d19a1111a0472c8a643934c/Marathon_runners___BABAROGA.jpg?fm=webp&w=2560"
  }
];


const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}
	return (
		<div className='w-[80vw] mx-auto bg-base-200 rounded-xl'>
			 <Slider {...settings}>
				{bannerSlides.map((slide, index) => (
					<div className='' key={index}>
						<img src={slide.imageUrl} alt="" className='rounded-xl' />
					</div>
				))}
			 </Slider>
		</div>
	);
};

export default Carousel;