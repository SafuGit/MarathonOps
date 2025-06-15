import React from 'react';
import Hero from '../Hero/Hero';
import Carousel from '../Carousel/Carousel';
import { useLoaderData } from 'react-router';
import HomeMarathons from './HomeMarathons';
import OurPrograms from '../OurPrograms/OurPrograms';

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Carousel></Carousel>
      <HomeMarathons data={data}></HomeMarathons>
      <OurPrograms></OurPrograms>
    </div>
  );
};

export default Home;