


import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUserThunk } from '../../redux/log/handleUsers';
import { ADMmodal } from '../../components/order/ADMmodal';
import { UserData } from '../../interface/UserData';



import style from './style/adminUser.module.css';
export const AdminUsers = () => {
  
  const { usuarios } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  
  const [user, setUser] = useState({
    isOpen : false,
    action : '',
    selected:{
      name: '',
      email:'',
      role: '',
    }
  })

  const handleModal = (action:string,user:UserData) => {
    setUser(prev=>({
      ...prev,
      isOpen: !prev.isOpen,
      action: action,
      selected: user
    }))    
  };

  useEffect(() => {
    if (!usuarios || usuarios.length === 0) {
      dispatch(getUserThunk());
    }
  }, [dispatch, usuarios])

  return (
    <div className={style['card-wrapper']}>
      <article className={style['employee-card']}>

        <div className={style['card-header']}>
          <h2 className={style['card-title']}>Usuarios Stats</h2>
          <p className={style['card-subtitle']}>New usuario on 15t de Septiembre, 2024</p>
        </div>

        <div className={style['card-body']}>
          <table className={style['employee-table']}>
            <thead className={style['table-header']}>
              <tr className={style['header-row']}>
                <th className={style['header-cell']}>ID</th>
                <th className={style['header-cell']}>Nombre</th>
                <th className={style['header-cell']}>Role</th>
                <th className={style['header-cell']}>email</th>
                <th className={style['header-cell']}>Edit</th>
                <th className={style['header-cell']}>Delete</th>
              </tr>
            </thead>

            <tbody className={style['table-body']}>
              {usuarios.map((user, index) => (
                  <tr key={index} className={style['table-row']}>
                    
                    <td className={style['table-cell']}>{index + 1}</td>
                    <td className={style['table-cell']}>{user.name}</td>
                    <td className={style['table-cell']}>{user.role}</td>
                    <td className={style['table-cell']}>{user.email}</td>
                    <td className={`${style['table-cell']} ${style.update}`} onClick={()=>handleModal('update',user)} ><GrEdit color='green' size={18} /></td>
                    <td className={`${style['table-cell']} ${style.delete}`} onClick={()=>handleModal('delete',user)}><MdDelete color='red' size={18} /></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {user.isOpen && <ADMmodal data={usuarios} handleModal={handleModal} action={user.action} selected={user.selected} entityType={'user'}/>}
      </article>
    </div>
  )
}

export default AdminUsers;