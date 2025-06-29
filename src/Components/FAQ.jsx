import React from 'react';

const FAQ = () => {
    return (
        <div >
            <h1 className='text-3xl my-4 font-bold text-center'>Frequently Ask Question</h1>
            <div
                tabIndex={0}
                className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse mb-2"
            >
                <div className="collapse-title font-semibold">1. How do I create a roommate listing?</div>
                <div className="collapse-content text-sm">
                    To create a listing, first log in or sign up. Then go to the "Add to Find Roommate" page, fill out the form with details like location, budget, preferences, and submit it.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">2. Is my contact information visible to others?</div>
                <div className="collapse-content text-sm">
                    No, your email and phone number are kept private. Interested users can contact you through our internal messaging system (if available).
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">3. How can I edit or delete my listing?</div>
                <div className="collapse-content text-sm">
                    Go to the “My Listings” page after logging in. From there, you can edit or delete any listing you have created.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">4. Is this service free to use?</div>
                <div className="collapse-content text-sm">
                    Yes, creating and browsing listings is completely free. However, we may introduce premium features in the future for better visibility.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">5. How do I know a listing is genuine?</div>
                <div className="collapse-content text-sm">
                    We recommend checking the user's profile and communicating through the platform first. Report any suspicious activity using the "Report" button on the listing.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">6. Can I search by location and budget?</div>
                <div className="collapse-content text-sm">
                    Yes! Use the "Browse Listing" page and apply filters like location, rent range, and roommate preferences to narrow down your search.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-2 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">7. What if I forget my password?</div>
                <div className="collapse-content text-sm">
                    Click on the “Forgot Password” link on the login page and follow the instructions to reset your password via email.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-primary mb-3 text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">8. Can I ‘like’ or save listings to check later?</div>
                <div className="collapse-content text-sm">
                    Yes! Click the “Like” button on any listing to save it to your favorites. You can view your liked listings from your profile dashboard.
                </div>
            </div>
        </div>
    );
};

export default FAQ;