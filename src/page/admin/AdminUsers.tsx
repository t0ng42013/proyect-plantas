


import { GrEdit } from 'react-icons/gr';
import style from './style/adminUser.module.css';
import { MdDelete } from 'react-icons/md';
import { useEffect } from 'react';
export const AdminUsers = () => {

useEffect(() => {

}, [])

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
              <tr className={style['table-row']}>
                <td className={style['table-cell']}>1</td>
                <td className={style['table-cell']}>Dakota Rice</td>
                <td className={style['table-cell']}>Admin</td>
                <td className={style['table-cell']}>Niger@gmail.com</td>
                <td className={`${style['table-cell']} ${style.update}`}><GrEdit color='green' size={18} /></td>
                <td className={`${style['table-cell']} ${style.delete}`}><MdDelete color='red' size={18} /></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}
