import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import {  Suspense } from "react";
import { About, NotFound, Plantas } from "../page";
import { Layout } from "../container/Layout";
import { Log} from "../components/Log";
import { Contact } from "../page/Contact";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayouts } from "../layouts/AdminLayouts";
import { AdminDashboard } from "../page/admin/AdminDashboard";
import { AdminProducts } from "../page/admin/AdminProducts";

interface RouteConfig {
    path?: string;
    Component?: React.ComponentType;
    children?: RouteConfig[];
    element?: React.ReactElement;
    index?: boolean;
}

const routes = [
    {
        path:'/',
        Component:Layout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:'/products',
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
            },{
                path: '/contact',
                Component: Contact
            }
        ]
    },
    {
        path:'/admin',
        element: <ProtectedRoute allowedRoles={['Admin']} />,
        children:[
            {
                path: '',
                Component: AdminLayouts,
                children:[
                    {
                        index: true,
                        Component: AdminDashboard
                    },
                    {
                        path: 'products',
                        Component: AdminProducts
                    },
                ]               
            }
        ]
            
    },    
    {
        path: '*',
        Component: NotFound
    }
];

const withSuspense = (Component:React.ComponentType) =>{
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    )
}


export const router =  createBrowserRouter(
    routes.map(({ path, Component, children, element }) =>({
        path,
        element:(element ||(Component && withSuspense(Component))),
        children: children?.map(({ index, path, Component }: RouteConfig)=>({
            index,
            path,
            element: Component && withSuspense(Component)
        }))
    }))
);


