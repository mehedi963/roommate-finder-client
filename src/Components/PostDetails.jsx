import React from 'react';

const PostDetails = ({data}) => {
    const { title, roomType, rent, preferences, name, location, description, contact, availability } = data;
    return (
        <div>
            <div className=" card card-solid bg-gray-200 w-96">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-cyan-950">Roommate  Title: {title}</h2>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Rent:</strong> ৳{rent}</p>
                    <p><strong>Room Type:</strong> {roomType}</p>
                    <p><strong>Preferences:</strong> {preferences}</p>
                    <p><strong>Availability:</strong> {availability}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Contact:</strong> {contact}</p>
                    <p><strong>Posted By:</strong> {name}</p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-secondary">Like</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;