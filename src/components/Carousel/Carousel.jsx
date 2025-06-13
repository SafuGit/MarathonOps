import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const bannerSlides = [
  {
    eventHighlights: "Join the New Dhaka Marathon and experience the thrill of the city run!",
    imageUrl: "https://www.thefinancialpostbd.com/2025/02/08/fp_1739007677.jpg?width=1093&height=613"
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
		<>
			<div className='w-[90vw] mx-auto rounded-xl mt-20 mb-20'>
				<h1 className='text-6xl mb-4'>HIGHLIGHTED EVENTS</h1>
				<Slider {...settings}>
					{bannerSlides.map((slide, index) => (
						<div className='' key={index}>
							<div className='min-h-screen flex justify-center items-end p-8 opacity-80 rounded-xl' style={{
								backgroundImage: `url(${slide.imageUrl})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}>
								<div className='bg-black p-6 rounded-full'>
									<h1 className='text-2xl text-white mb-2'>{slide.eventHighlights}</h1>
									<button className='btn btn-info rounded-full'>Learn More</button>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Carousel;