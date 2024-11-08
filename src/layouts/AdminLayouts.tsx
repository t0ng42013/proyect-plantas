
import { Link,  Outlet,  } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { MenuItems } from '../page/admin/components/MenuItems';
import { logout } from '../redux/auth/authSlice';



import styles from './admLayout.module.css';
export const AdminLayouts = () => {
    const {user}= useAppSelector(state=> state.auth);
    const {usuarios}= useAppSelector(state=> state.user);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.adminLayout}>
            <aside className={styles.aside}>
                {/* Header/Logo */}
                <div className={styles.headerLogo}>
                    <h1 className={styles.headerTitle}>Admin Panel</h1>
                </div>

                {/* Main Content */}
                <div className={styles.mainContent}>
            
                    <nav className={styles.mainNav}>                     
                                <MenuItems />
                    </nav>

                    {/* Divider */}
                    <div className={styles.divider} />

                
                </div>

                {/* User Profile Section */}
                <div className={styles.userProfileSection}>
                    <div className={styles.userProfileContainer}>
                        <div className={styles.userAvatar}>
                            <span style={{textTransform:'capitalize'}} className={styles.userInitials}>{user?.name.slice(0,2)}</span>
                        </div>
                        <div className={styles.userInfo}>
                            <p style={{ textTransform: 'capitalize' }} className={styles.userName}>{user?.name}</p>
                            <p className={styles.userEmail}>{user && usuarios.find(i => i.id === user.id)?.email || 'unknown'}</p>
                        </div>
                        <div onClick={()=>dispatch(logout())} className={styles.logoutButton}>
                            <Link to={'/'}><BiLogOut size={24} /></Link>
                        </div>
                    </div>
                </div>
            </aside>

            <div className={styles.adminLayoutContent}>
                <Outlet  />
            </div>
        </div>
    )
}
