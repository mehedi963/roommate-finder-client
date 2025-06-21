import React from 'react';
import image1 from '../assets/s1.jpg';
import image2 from '../assets/s2.jpg';
import image3 from '../assets/s3.jpg';
const Slider = () => {
    return (
        <div>
        <div>
            <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src={image1}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <div>
                <h1 className='text-3xl font-semibold text-cyan-950'>Find roommates and rooms that match your lifestyle </h1>
            <span className='text-xl text-emerald-200 text-center font-bold'>100% Free</span>
            <br />
            <span className='text-cyan-600'>No annoying upgrades or hidden fees. Every aspect of RoomMatch is free!</span>
            </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src={image2}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <div>
                <h1 className='text-3xl font-semibold text-cyan-950 pt-6 '>Find roommates and rooms that match your lifestyle </h1>
            <span className='text-xl text-emerald-200 text-center font-bold '>100% Free</span>
            <br />
            <span className='text-shadow-cyan-600'>No annoying upgrades or hidden fees. Every aspect of RoomMatch is free!</span>
            </div>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src={image3}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <div>
                <h1 className='text-3xl font-semibold text-cyan-950'>Find roommates and rooms that match your lifestyle </h1>
            <span className='text-xl text-emerald-200 text-center font-bold'>100% Free</span>
            <br />
            <span className='text-shadow-cyan-600'>No annoying upgrades or hidden fees. Every aspect of RoomMatch is free!</span>
            </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
        </div>
        </div>
        





    );
};

export default Slider;