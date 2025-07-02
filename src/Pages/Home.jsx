import React from 'react';
import Slider from '../Components/Slider';
import FeaturePost from '../Components/FeaturePost';
import { useLoaderData } from 'react-router';
import FAQ from '../Components/FAQ';
import Banners from './Banners';
import Hero from './Hero';





const Home = () => {
    const roomsData = useLoaderData();
    console.log(roomsData);
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>

            <section className='min-h-3/5'>
            <Slider></Slider>
        </section>

        <section className='my-10 '>
            <h1 className='text-3xl font-bold text-center mb-6'> Roommates Post</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    roomsData.map(roomData => <FeaturePost key={roomData._id} roomData={roomData}></FeaturePost>)
                }
                </div> 
        </section>

        <section >
            <Banners></Banners>
        </section>
        <section className='bg-base-200 shadow-2xl'>
            <FAQ></FAQ>
        </section>
        </div>
        
        
    );
};

export default Home;