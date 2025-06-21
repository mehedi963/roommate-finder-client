import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import FindRoommate from "../Pages/FindRoommate";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            Component: Home
        },
        {
          path:'/findRoommate',
          element: <PrivateRoute><FindRoommate></FindRoommate></PrivateRoute>   
        },
        {
            path:'/browse',
            element: <BrowseListing></BrowseListing>
        },
        {
            path:'/myListing',
            element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
        }

    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
        children:[
            {
              path:'/auth/login',
              element: <Login></Login> 
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
        ]
  }
]);

export default router;