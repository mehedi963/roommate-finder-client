import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footers from '../Pages/Footers';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footers></Footers>
            </footer>
        </div>
    );
};

export default AuthLayout;