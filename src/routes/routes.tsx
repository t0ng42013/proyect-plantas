import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import { Suspense } from "react";

const routes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/about',
        Component: Home
    },
    {
        path: '/login',
        Component: Home
    },
    {
        path: '/signup',
        Component: Home
    }
];

export const router =  createBrowserRouter(
    routes.map(({ path, Component }) =>({
        path,
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        )
    }))
);


