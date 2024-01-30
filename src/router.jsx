import { createBrowserRouter } from "react-router-dom";
import { landingRoute } from "./Pages/LandingPage/LandingPage";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [{ path: "/", ...landingRoute }],
  },
]);
