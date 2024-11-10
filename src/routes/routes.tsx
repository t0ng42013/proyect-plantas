import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../container/Layout";
import { Home } from "../page/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import { SuspenseWrapper } from "../components/SuspenseWrapper";
import { lazyRoutes } from "./lazyRoutes";
import { RouteConfig, ProcessedRoute } from "./types";

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
        Component: lazyRoutes.Plantas
      },
      {
        path: '/about',
        Component: lazyRoutes.About
      },
      {
        path: '/login',
        Component: lazyRoutes.Log
      },
      {
        path: '/contact',
        Component: lazyRoutes.Contact
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
        Component: lazyRoutes.Orders
      }
    ]
  },
  {
    path: '/admin',
    element: <ProtectedRoute allowedRoles={['Admin']} />,
    children: [
      {
        path: '',
        Component: lazyRoutes.AdminLayouts,
        children: [
          {
            index: true,
            path: '',
            Component: lazyRoutes.AdminDashboard
          },
          {
            path: 'products',
            Component: lazyRoutes.AdminProducts
          },
          {
            path: 'comments',
            Component: lazyRoutes.AdminComment
          },
          {
            path: 'users',
            Component: lazyRoutes.AdminUsers
          }
        ]
      }
    ]
  },
  {
    path: '*',
    Component: lazyRoutes.NotFound
  }
];

const processChildren = (children: RouteConfig[] | undefined): ProcessedRoute[] | undefined => {
  if (!children) return undefined;

  return children.map(({  path, Component, children: nestedChildren }) => ({
    
    path,
    element: Component && <SuspenseWrapper Component={Component} />,
    children: processChildren(nestedChildren),
  }));
};

const processRoutes = (routes: RouteConfig[]): ProcessedRoute[] => {
  return routes.map(({ path, Component, children, element }) => ({
    path,
    element: element || (Component && <SuspenseWrapper Component={Component} />),
    children: processChildren(children)
  }));
};

export const router = createBrowserRouter(processRoutes(routes));

