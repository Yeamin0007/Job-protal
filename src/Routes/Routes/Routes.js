import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Apply from "../../Pages/Apply/Apply";
import Contract from "../../Pages/Contract/Contract";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contract></Contract>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/apply',
                element: <PrivateRoutes><Apply></Apply></PrivateRoutes>
            },
            
        ]
    }
])
export default router;