import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Home } from "../page/Home";
import { lazy, Suspense } from "react";
import { About, NotFound, Plantas } from "../page";
import { Layout } from "../container/Layout";
import { Contact } from "../page/Contact";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayouts } from "../layouts/AdminLayouts";
import { AdminProducts } from "../page/admin/AdminProducts";
import { Orders } from "../page/Orders";
import { AdminDashboard } from "../page/admin/AdminDashboard";
import { AdminUsers } from "../page/admin/AdminUsers";
import { AdminComment } from "../page/admin/AdminComment";
// import { Log } from "../components/Log";


interface RouteConfig {
    path?: string;
    Component?: React.ComponentType;
    children?: RouteConfig[];
    element?: React.ReactElement;
    index?: boolean;
}


const withSuspense = (Component: React.ComponentType): React.ReactElement => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    )
}

const Log = lazy(() => import('../page/Log'))

const routes: RouteConfig[] = [
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/products',
                Component: Plantas
            }, {
                path: '/about',
                Component: About
            },
            {
                path: '/login',
                Component: Log
            },
            {
                path: '/signup',
                Component: Home
            }, {
                path: '/contact',
                Component: Contact
            }
        ]
    },
    {
        path: '/orders',
        element: <ProtectedRoute allowedRoles={['User', 'Admin']} />,
        children: [
            {
                path: '',
                index: true,
                Component: Orders
            }
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoute allowedRoles={['Admin']} />,
        children: [
            {
                path: '',
                Component: AdminLayouts,
                children: [
                    {
                        index: true,
                        path: '',
                        Component: AdminDashboard
                    },
                    {
                        path: 'products',
                        Component: AdminProducts
                    },
                    {
                        path: 'comments',
                        Component: AdminComment
                    },
                    {
                        path: 'users',
                        Component: AdminUsers
                    }
                ]
            }
        ]

    },
    {
        path: '*',
        Component: NotFound
    }
];


// Función auxiliar para procesar rutas hijas
const processChildren = (children: RouteConfig[] | undefined): RouteObject[] | undefined => {
    if (!children) return undefined;

    return children.map(({ index, path, Component, children: nestedChildren }) => ({
        index: index === true ? false : undefined,
        path,
        element: Component && withSuspense(Component),
        children: processChildren(nestedChildren),
    }));
};

export const router = createBrowserRouter(
    routes.map(({ path, Component, children, element }) => ({
        path,
        element: (element || (Component && withSuspense(Component))),
        children: processChildren(children)
    }))
);


