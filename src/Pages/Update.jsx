import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const data = useLoaderData();
    const { user } = use(AuthContext);
    

    const [title, setTitle] = useState(data?.title);
    const [location, setLocation] = useState(data?.location);
    const [rent, setRent] = useState(data?.rent);
    const [preferences, setPreferences] = useState(data?.preferences);
    const [description, setDescription] = useState(data?.description);
    const [contact, setContact] = useState(data?.contact);
    


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newData = Object.fromEntries(formData.entries());
        //console.log(newData);

        //update data
        fetch(`https://mehedi-server.vercel.app/update/${data?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newData)
        }).then(res => res.json()).then(data => {
            if (data?.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Post has been Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    return (
        <div className='p-10'>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-4xl font-bold text-pink-950'>Update Your Roommate Post</h1>
                <p className='text-green-500'>Describe what you're looking for in a roommate and living situation — and get discovered by others seeking the same!
                </p>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Title</label>
                        <input name="title"
                            value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Location</label>
                        <input name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Rent Amount</label>
                        <input name="rent" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="Rent Amount" type="number" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Room Type</label>
                        <select name="roomType" className="w-full p-2 border rounded-lg" >
                            <option defaultValue="Single">Single</option>
                            <option defaultValue="Shared">Shared</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Lifestyle Preferences</label>
                        <input name="preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)} placeholder="Lifestyle Preferences" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg">
                        <label className="label">Description</label>
                        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border rounded-lg" ></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">Contact Info</label>
                        <input name="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Info" className="w-full p-2 border rounded-lg" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 rounded-lg my-6">
                        <label className="label">Availability</label>
                        <select name="availability" className="w-full p-2 border rounded-lg" >
                            <option defaultValue="Available">Available</option>
                            <option defaultValue="Not Available">Not Available</option>
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
                <input type="submit" className='btn btn-secondary btn-block' value="Update" />
            </form>

        </div>
    );
};

export default Update;