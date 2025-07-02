import React from 'react';
import img1 from '../assets/illustration-phone.svg'
import img2 from '../assets/illustration-shield.svg'
import img3 from '../assets/illustration-time.svg'
const Banners = () => {
    return (
        <div >
            <h1 className='text-3xl font-bold text-center my-6 p-4'>Here's Why Roommate Finder is the Best Site to Find a Room for Rent!</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
            <div className="card bg-base-100 ">
                <figure>
                    <img
                        src={img1}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Finding the Perfect Room for Rent or Roommate</h2>
                    <p>Between our roommate compatibility quiz and our advanced room for rent filtering, we quickly provide you with the best options for finding the best match. We take you through a series of the most important questions from religion and politics to lifestyle and interests, for not only you and your potential roommates but for finding rooms as well.</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 ">
                <figure>
                    <img
                        src={img2}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Safely Communicate with Potential Roommates</h2>
                    <p>Safely communicate by using our internal messaging system. Your contact information, like personal email and phone number, is not shared with potential roommates or people offering spare rooms for rent until you feel comfortable sharing.</p>
                   
                </div>
            </div>

            <div className="card bg-base-100 ">
                <figure>
                    <img
                        src={img3}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Streamline Roommate Communications</h2>
                    <p>Instead of sifting through hundreds of roommate notifications, control who contacts you by personalizing your communication preferences. Experience a safer, faster, and simpler way of narrowing down your choices to find the best roommate for you.</p>
                   
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Banners;