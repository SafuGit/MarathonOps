import React, { Suspense } from 'react';
import Hero from '../Hero/Hero';
import Carousel from '../Carousel/Carousel';
import { useLoaderData } from 'react-router';
import HomeMarathons from './HomeMarathons';
import OurPrograms from '../OurPrograms/OurPrograms';
import Loading from '../Loading/Loading';
import UpcomingMarathons from './UpcomingMarathons';

const upcomingMarathonsPromise = fetch('/upcomingMarathons.json')
  .then(response => response.json());

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Carousel></Carousel>
      <HomeMarathons data={data}></HomeMarathons>
      <OurPrograms></OurPrograms>
      <Suspense fallback={<Loading></Loading>}>
        <UpcomingMarathons dataPromise={upcomingMarathonsPromise}></UpcomingMarathons>
      </Suspense>
    </div>
  );
};

export default Home;