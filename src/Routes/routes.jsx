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
import FeaturePost from "../Components/FeaturePost";
import Details from "../Pages/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/roommates"),
        Component: Home
      },
      {
        path: '/findRoommate',
        element: <PrivateRoute><FindRoommate></FindRoommate></PrivateRoute>
      },
      {
        path: '/browse',
        loader:()=>fetch("http://localhost:3000/browse"),
        element: <BrowseListing></BrowseListing>
      },
      {
        path: '/myListing',
        element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
      },
      {
        path: '/roommates/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute>
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