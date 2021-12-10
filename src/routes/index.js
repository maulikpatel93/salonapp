import { lazy,Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";
// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import LoginRoutes from "./LoginRoutes";
import config from "../config";
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const routing = useRoutes(routes(isLoggedIn));
  // return (<>{routing}</>);
  return useRoutes([
    { path: "/", element: <Navigate to={config.defaultPath} /> },
    AuthenticationRoutes, 
    // LoginRoutes,
    MainRoutes
  ]);
}

// const Routes = () => {
//   return (
//     <>
//       <Navigate exact from="/" to={config.defaultPath} />
//       <React.Fragment>
//         {/* Routes for authentication pages */}
//         <AuthenticationRoutes />

//         {/* Route for login */}
//         <LoginRoutes />

//         {/* Routes for main layouts */}
//         <MainRoutes />
//       </React.Fragment>
//     </>
//   );
// };

// export default Routes;
