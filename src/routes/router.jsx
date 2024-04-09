import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import EstateDetailes from "../pages/estateDetailes/EstateDetailes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../privateroute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estatedetailes/:id",
        element: (
          <PrivateRoute>
            <EstateDetailes></EstateDetailes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
