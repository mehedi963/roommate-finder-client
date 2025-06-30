import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import PostData from '../Components/PostData';


const MyListings = () => {
    const [posts, setPosts] = useState([]);
    const user = getAuth().currentUser;
    console.log(posts);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/myListing?uid=${user.uid}`).then(res => res.json()).then(data => setPosts(data))
        }
    }, [])

    const handleDelete = (id) =>{
        console.log(id);
        fetch(`http://localhost:3000/deletePost/${id}`,{
            method: 'DELETE'
        }).then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div>
            <h1>My Listings</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Room</th>
                            <th>Room Type</th>
                            <th>Location</th>
                            <th>Contact</th>
                            <th>Auction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post,index) => <PostData key={index} index={index} post={post} handleDelete={handleDelete}></PostData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;