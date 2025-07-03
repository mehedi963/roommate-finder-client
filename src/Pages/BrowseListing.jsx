import React from 'react';
import { useLoaderData } from 'react-router';
import ListingData from '../Components/ListingData';

const BrowseListing = () => {
    const usersData = useLoaderData();
    //console.log(usersData);
    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                usersData.map(userData => <ListingData key={userData._id} userData={userData}></ListingData>)
            }
            </div>
            
        </div>
    );
};

export default BrowseListing;