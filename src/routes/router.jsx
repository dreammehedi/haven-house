import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
  },
]);

export default router;
