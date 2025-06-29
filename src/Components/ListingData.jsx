import React from 'react';
import { Link } from 'react-router';

const ListingData = ({ userData }) => {
    const { title, description, preferences, availability, _id } = userData;
    return (
        <div className=' mt-8'>
            <div className=" card card-solid bg-gray-200 w-96">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-cyan-950">Roommate Title: {title}</h2>
                    <p><strong>Preferences:</strong> {preferences}</p>
                    <p><strong>Availability:</strong> {availability}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <div className="card-actions justify-center mt-5">
                        <Link to={`/roommates/${_id}`}><button className="btn btn-secondary">See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingData;