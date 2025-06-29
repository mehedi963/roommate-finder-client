import React from 'react';
import { useLoaderData } from 'react-router';
import PostDetails from '../Components/PostDetails';

const Details = () => {
    const detailsData = useLoaderData();
    
    //
    return (
        <div className='min-h-screen mt-8'>
            <div>
                {
                    detailsData.map(data => <PostDetails key={data._id} data={data}></PostDetails>)
                }
            </div>
        </div>
    );
};

export default Details;