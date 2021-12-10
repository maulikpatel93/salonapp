import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/index')));

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        }
    ]
};

export default MainRoutes;
