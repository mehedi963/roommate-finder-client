import React, {  } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const FeaturePost = ({roomData}) => {
    const {title,description,preferences,availability,_id} = roomData;
    //const {user} = use(AuthContext);
   console.log(roomData);
   
    return (
     <div className='w-full'>    
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <h4 className='text-amber-800'><span className='text-emerald-300 text-lg font-semibold'>Life Preference: </span>{preferences}</h4>
    <p>{description}</p>
    <p className='text-amber-800'><span className='text-fuchsia-800 text-lg font-semibold'>Availability : </span>{availability}</p>
    <div className="justify-end card-actions">
      <Link to={`/roommates/${_id}`}><button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>
     </div>
    );
};

export default FeaturePost;