import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import FindRoommate from "../Pages/FindRoommate";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
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
          element: <FindRoommate></FindRoommate>   
        },
        {
            path:'/browse',
            element: <BrowseListing></BrowseListing>
        },
        {
            path:'/myListing',
            element: <MyListings></MyListings>
        }

    ]
  },
]);

export default router;