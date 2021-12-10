import { lazy } from "react";

// project imports
import Loadable from "../component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import { Navigate } from "react-router-dom";
// login option 3 routing
const Login = Loadable(lazy(() => import("../pages/auth/Login")));

// import { useSelector } from "react-redux";
// const { isLoggedIn } = useSelector((state) => state.auth);

const AuthenticationRoutes = {
  path: "/",
  // element: !isLoggedIn ? <MinimalLayout /> : <Navigate to="/dashboard" />,
  element: <MinimalLayout />,
  children: [
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login /> },
  ],
};

export default AuthenticationRoutes;
