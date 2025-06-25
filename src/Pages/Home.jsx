import React from 'react';
import Slider from '../Components/Slider';
import FeaturePost from '../Components/FeaturePost';
import { useLoaderData } from 'react-router';





const Home = () => {
    const roomsData = useLoaderData();
    console.log(roomsData);
    return (
        <div>
            <section className=''>
            <Slider></Slider>
        </section>

        <section className='my-10 '>
               <FeaturePost></FeaturePost> 
        </section>
        </div>
        
        
    );
};

export default Home;