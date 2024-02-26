/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import AuthWrapper from "./components/Auth/AuthWrapper";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AuthWrapper />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
