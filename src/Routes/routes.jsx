import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import FeaturePost from "../Components/FeaturePost";
import Details from "../Pages/Details";
import RoommatePost from "../Pages/RoommatePost";
import Update from "../Pages/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("https://mehedi-server.vercel.app/roommates"),
        Component: Home
      },

      {
        path:'/roommatePost',
        element:<PrivateRoute><RoommatePost></RoommatePost></PrivateRoute>
      },
      {
        path: '/browse',
        loader:()=>fetch("https://mehedi-server.vercel.app/browse"),
        element: <BrowseListing></BrowseListing>
      },
      {
        path: '/myListing',
        element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
      },
      {
        path: '/roommates/:id',
        loader: ({ params }) => fetch(`https://mehedi-server.vercel.app/roommates/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:'/update/:id',
        loader:({params}) =>fetch(`https://mehedi-server.vercel.app/update/${params.id}`),
        element:<PrivateRoute><Update></Update></PrivateRoute>
      }

    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  }
]);

export default router;