import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";

import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddCraftItems from "../Components/AddCraftItems/AddCraftItems";
import PrivateRoutes from "./PrivateRoutes";
import AllArtCraftItems from "../Components/AllArtCraftItems/AllArtCraftItems";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import MyArtCraftItems from "../Components/MyArtCraftItems/MyArtCraftItems";
import Update from "../Components/Update/Update";
import SpecificCategoriesItems from "../Components/ArtCraftCategories/SpecificCategoriesItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArtCraftItems',
                element: <AllArtCraftItems></AllArtCraftItems>,
                // loader: ()=> fetch('https://a-10-server-jet.vercel.app/items')
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
            },
            {
                path: '/addCraftItems',
                element: <PrivateRoutes><AddCraftItems></AddCraftItems></PrivateRoutes>
            },
            {
                path: '/myArtCraftItems',
                element: <PrivateRoutes><MyArtCraftItems></MyArtCraftItems></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params})=> fetch(`https://a-10-server-jet.vercel.app/items/${params.id}`)
            },
            {
                path: '/specificCategories/:subCategory',
                element: <SpecificCategoriesItems></SpecificCategoriesItems>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;