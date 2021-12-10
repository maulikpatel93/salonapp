import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../component/Loadable';
import { Navigate } from 'react-router-dom';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/index')));

const MainRoutes = {
    path: '/',
    // element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
    ]
};

export default MainRoutes;
