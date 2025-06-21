import React, { use } from 'react';

const FeaturePost = ({userPromise}) => {
    const users = use(userPromise);
    console.log(users);
    return (
        <div>
            <h1 className='text-3xl text-center py-3'>Featured Roommates Post </h1>
        </div>
    );
};

export default FeaturePost;