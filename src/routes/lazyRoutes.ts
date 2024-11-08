import { lazy } from 'react';

export const lazyRoutes = {
    Log: lazy(() => import('../page/Log')),
    Plantas: lazy(() => import('../page/Plantas')),
    About: lazy(() => import('../page/About')),
    Contact: lazy(() => import('../page/Contact')),
    NotFound: lazy(() => import('../page/NotFound'))
};