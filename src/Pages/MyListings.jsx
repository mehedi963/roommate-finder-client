import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import PostData from '../Components/PostData';
import Swal from 'sweetalert2';


const MyListings = () => {
    const [posts, setPosts] = useState([]);
    const user = getAuth().currentUser;
    //console.log(posts);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/myListing?uid=${user.uid}`).then(res => res.json()).then(data => setPosts(data))
        }
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/deletePost/${id}`, {
                    method: 'DELETE',
                    headers:{
                        "Content-type" : "application/json"
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remainingData = posts.filter(post => post._id !== id);
                        setPosts(remainingData);
                        console.log(remainingData);
                    }
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

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
                            posts.map((post, index) => <PostData key={index} index={index} post={post} handleDelete={handleDelete}></PostData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;