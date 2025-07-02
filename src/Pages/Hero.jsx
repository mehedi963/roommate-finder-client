import React from 'react';
 import heroimg from '../assets/Business_SVG.svg'
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={heroimg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold text-cyan-950">The Best
                            <br />
                            <span className="text-amber-500"> & Fastest </span>Roommate Finder
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Looking for a roommate, renting out a room or teaming up to find a new place?Helps you find compatible roommates easily with a safe, hassle-free experience.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/browse'>
                            <button className="btn btn-secondary px-8 py-7 text-lg font-semibold border rounded dark:border-gray-800" >Explore Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;