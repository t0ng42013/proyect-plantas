import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import {  Suspense } from "react";
import { About, NotFound, Plantas } from "../page";
import { Layout } from "../container/Layout";
import { Log} from "../components/Log";
import { Contact } from "../page/Contact";

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
        path: '*',
        Component: NotFound
    }
];

export const router =  createBrowserRouter(
    routes.map(({ path, Component, children }) =>({
        path,
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        ),
        children: children?.map(({index, path, Component})=>({
            index,
            path,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
                )
        }))
    }))
);


