




import { GrEdit } from 'react-icons/gr';
import style from './style/adminUser.module.css';
import { MdDelete } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { formatSimpleDate } from '../../utils/DateFormat';
import { BiPlus } from 'react-icons/bi';
import { createProduct } from '../../redux/data/helperProduct';
import { ADMmodal } from '../../components/order/ADMmodal';
export const AdminProducts = () => {
  
  const {data}= useAppSelector(state => state.products)
  const distpath = useAppDispatch();

  useEffect(() => {
  
  }, [data])

  const handledAdd=()=>{
    distpath(()=>{});
  }
  
  return (
    <div className={style['card-wrapper']}>
      <article className={style['employee-card']}>

        <div className={style['card-header']} style={{background:'#333', color:'#fff'}}>
          <h2 className={style['card-title']} >Gestión de Productos</h2>
          <p className={style['card-subtitle']}> Ultima actualizacion 15 de Septiembre, 2024</p>
        </div>

        <div className={style['card-body']}>
          <table className={style['employee-table']}>
            <thead className={style['table-header']}>
              <tr className={style['header-row']}>
                <th className={style['header-cell']}>ID</th>
                <th className={style['header-cell']}>Name</th>
                <th className={style['header-cell']}>price</th>
                <th className={style['header-cell']}>stock</th>
                <th className={style['header-cell']}>created_at</th>
                <th className={style['header-cell']}>updated_at</th>
                <th className={style['header-cell']}>Edit</th>
                <th className={style['header-cell']}>Delete</th>
              </tr>
            </thead>
            <tbody className={style['table-body']}>
            {data.map(({name,price,stock,created_at,updated_at},index)=>(
              <tr className={style['table-row']}>

                <td className={style['table-cell']}>{index}</td>
                <td className={style['table-cell']}>{name}</td>
                <td className={style['table-cell']}>{price}</td>
                <td className={style['table-cell']}>{stock}</td>
                <td className={style['table-cell']}>{formatSimpleDate(created_at)}</td>
                <td className={style['table-cell']}>{formatSimpleDate(updated_at)}</td>
                <td className={`${style['table-cell']} ${style.update}`}><GrEdit color='green' size={18} /></td>
                <td className={`${style['table-cell']} ${style.delete}`}><MdDelete color='red' size={18} /></td>
              </tr>
            ))}

            </tbody>
          </table>
        </div>

        <div className={style.add} onClick={handledAdd}>
         <span>Agruegar Producto</span> 
          <span>
            <BiPlus color='orange' size={40}/>
          </span>
        </div>
        <ADMmodal></ADMmodal>
      </article>
    </div>
  )
}
