import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

export const AdminLayouts = () => {
    const {user} = useAppSelector((state) => state.auth);
    
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h2>Panel Admin</h2>
                    <p>Bienvenido, {user?.name}</p>
                </div>
                {/* Tu navegación del admin aquí */}
                <nav className="admin-nav">
                <ul>
                    <li><Link to="/admin" />Dashboard</li>
                    <li><Link to="/admin/users" />Usuarios</li>
                    <li><Link to="/admin/products" />Productos</li>
                    {/* Más enlaces según necesites */}
                </ul>
                </nav>
            </aside>
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    );
}
