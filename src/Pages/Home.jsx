import React from 'react';
import Slider from '../Components/Slider';
import FeaturePost from '../Components/FeaturePost';

const userPromise = fetch('http://localhost:3000/user').then(res => res.json());



const Home = () => {
    return (
        <div>
            <section className=''>
            <Slider></Slider>
        </section>

        <section className='my-10 '>
               <FeaturePost userPromise={userPromise}></FeaturePost> 
        </section>
        </div>
        
        
    );
};

export default Home;