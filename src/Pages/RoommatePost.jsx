import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';

const RoommatePost = () => {

    const {user} = use(AuthContext);
    //console.log(user);
    const handlePost =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newData = Object.fromEntries(formData.entries());
        //console.log(newData);

        //send data
        const user = getAuth().currentUser;
        const postsData = {
                   ...newData,
                   uid: user.uid,                    
                };
        
                //sent data to Database
                fetch("https://mehedi-server.vercel.app/roommates", {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(postsData)
                }).then(res => res.json()).then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Rooms Added Successfully!",
                            icon: "success",
                            draggable: true
                        });
        
                    }
                })



    }
    return (
        <div className='p-10'>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-4xl font-bold text-amber-600'>Add Your Roommate Post</h1>
                <p className='text-green-500'>Describe what you're looking for in a roommate and living situation — and get discovered by others seeking the same!
                </p>
            </div>
            <form onSubmit={handlePost}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Title</label>
                        <input name="title" placeholder="Title" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Location</label>
                        <input name="location" placeholder="Location" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Rent Amount</label>
                        <input name="rent" placeholder="Rent Amount" type="number" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Room Type</label>
                        <select name="roomType" className="w-full p-2 border rounded-lg" >
                            <option value="Single">Single</option>
                            <option value="Shared">Shared</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Lifestyle Preferences</label>
                        <input name="preferences" placeholder="Lifestyle Preferences" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Description</label>
                        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded-lg" ></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">Contact Info</label>
                        <input name="contact" placeholder="Contact Info" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">Availability</label>
                        <select name="availability" className="w-full p-2 border rounded-lg" >
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">User Name </label>
                        <input name="name" placeholder={user.displayName} className="w-full p-2 border rounded-lg" readOnly />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">User Email</label>
                        <input name="email" placeholder={user.email} className="w-full p-2 border rounded-lg" readOnly />
                    </fieldset>
                </div>
                <input type="submit" className='btn btn-secondary btn-block' value="Add Roommate" />
            </form>

        </div>
    );
};

export default RoommatePost;