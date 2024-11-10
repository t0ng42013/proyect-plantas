import { lazy } from 'react';

export const lazyRoutes = {
    Log: lazy(() => import('../page/Log')),
    Plantas: lazy(() => import('../page/Plantas')),
    About: lazy(() => import('../page/About')),
    Contact: lazy(() => import('../page/Contact')),
    NotFound: lazy(() => import('../page/NotFound')),
    Orders: lazy(() => import('../page/Orders')),
    AdminLayouts: lazy(() => import('../layouts/AdminLayouts')),
    AdminProducts: lazy(() => import('../page/admin/AdminProducts')),
    AdminComment: lazy(() => import('../page/admin/AdminComment')),
    AdminUsers: lazy(() => import('../page/admin/AdminUsers')),
    AdminDashboard: lazy(() => import('../page/admin/AdminDashboard')),
};