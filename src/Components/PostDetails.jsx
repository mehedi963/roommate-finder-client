import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PostDetails = ({data}) => {
    
    //console.log(data);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    //console.log(currentUser);
    const { title, roomType, rent, preferences, name, location, description, contact, availability,_id, uid, } = data;

    const [like, setLike] = useState(0);
    const [showContact, setShowContact] = useState(false);

    const handleLike = () =>{
        if(currentUser.uid === uid){
            toast("you can not like your post")
        }

        const likeCount = like+1;
        setLike(likeCount);
        setShowContact(true);

    }


    return (
        <div>
            <p className="text-center text-lg font-semibold mb-4 text-cyan-800">
            {like} people interested in
          </p>
            <div className=" card card-solid bg-gray-200 w-96">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-cyan-950">Roommate  Title: {title}</h2>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Rent:</strong> ৳{rent}</p>
                    <p><strong>Room Type:</strong> {roomType}</p>
                    <p><strong>Preferences:</strong> {preferences}</p>
                    <p><strong>Availability:</strong> {availability}</p>
                    <p><strong>Description:</strong> {description}</p>
                    {
                        showContact && <p><strong>Contact:</strong> {contact}</p>
                    }
                    <p><strong>Posted By:</strong> {name}</p>
                    <div className="card-actions justify-center mt-5">
                        <button onClick={handleLike}  className="btn btn-secondary">Like</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PostDetails;