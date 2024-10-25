import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

interface ProtectedRouteProp{
    allowedRoles?: string[];
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProp) =>{
    const {isAuthenticated,user} = useAppSelector((state) => state.auth);
    
    if(!isAuthenticated) return <Navigate to="/login" replace />

    if (allowedRoles && (!user?.role || !allowedRoles.includes(user.role))) return <Navigate to="/" replace />

    return <Outlet />
}