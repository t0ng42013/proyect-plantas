import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../container/Layout";
import { Home } from "../page/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayouts } from "../layouts/AdminLayouts";
import { AdminProducts } from "../page/admin/AdminProducts";
import { Orders } from "../page/Orders";
import { AdminDashboard } from "../page/admin/AdminDashboard";
import { AdminUsers } from "../page/admin/AdminUsers";
import { AdminComment } from "../page/admin/AdminComment";
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
        path: '/signup',
        Component: Home
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

