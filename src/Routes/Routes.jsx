import Main from "../Layout/Main";

import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Product />
            },
            {
                path: '/:productId',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    },

]);

export default router;