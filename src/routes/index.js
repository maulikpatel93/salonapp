import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from "./routes";
import { useSelector } from "react-redux";
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const routing = useRoutes(routes(isLoggedIn));
  return (<>{routing}</>);
  // return useRoutes([MainRoutes, AuthenticationRoutes], config.basename);
}
