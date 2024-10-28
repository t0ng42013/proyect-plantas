import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

interface ProtectedRouteProp{
    allowedRoles?: string[];
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProp) =>{
    const {isAuthenticated,user} = useAppSelector((state) => state.auth);
 
    console.log('ProtectedRoute - User:', user);
    console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);
    console.log('ProtectedRoute - Allowed Roles:', allowedRoles);

    if(!isAuthenticated) return <Navigate to="/login" replace />

    if (allowedRoles && (!user?.role || !allowedRoles.includes(user.role))) return <Navigate to="/" replace />

    return <Outlet />
}