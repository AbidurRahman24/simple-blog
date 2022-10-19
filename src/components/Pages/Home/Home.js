import React from 'react';
import First from './FirstSection/First'
import Visit from './Visit/Visit';
import Blog from './Blog/Blog';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import CarouselFade from './Header/Header';

const Home = () => {
    return (
        <>
            <CarouselFade />
            <First />
            <Visit />
            <Blog />
            <UpcomingEvents />
            <First />
        </>
    );
};

export default Home;