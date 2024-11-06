import { MdDelete } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { formatSimpleDate } from '../../utils/DateFormat';
import { BiPlus } from 'react-icons/bi';
import { ADMmodal } from '../../components/order/ADMmodal';
import { getProducts } from '../../redux/data/helperProduct';
import { GrEdit } from 'react-icons/gr';
import { Productos } from '../../interface/Productos';
import { ModalStateProps } from '../../interface/modal';


import style from './style/adminUser.module.css';
export const AdminProducts = () => {

  const { data } = useAppSelector(state => state.products)
  const distpath = useAppDispatch();



  const INITIAL_STATE:ModalStateProps = {
    isOpen: false,
    action: '',
    selectedProduct: {
      name: '',
      img: '',
      imgHover:'',
      price: 0,
      stock: 0,
      describe: '',
      category: '',
    }

  }

  const [modal, setModal] = useState<ModalStateProps>(INITIAL_STATE);


  //funcion para modal
  const handleModal = (action: string, productCurrent: Productos = INITIAL_STATE.selectedProduct) => {
    setModal((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      action,
      selectedProduct: productCurrent,
    }));
  };

  useEffect(() => {
    if (!data || !data.length) {
      distpath(getProducts())
    }

  }, [data, distpath])


  return (
    <div className={style['card-wrapper']}>
      <article className={style['employee-card']}>

        <div className={style['card-header']} style={{ background: '#333', color: '#fff' }}>
          <h2 className={style['card-title']} >Gestión de Productos</h2>
          <p className={style['card-subtitle']}> Ultima actualizacion {data.length > 0 && formatSimpleDate(data.filter(product => product.updated_at).sort((a, b) => new Date(b.updated_at!).getTime() - new Date(a.updated_at!).getTime())[0].updated_at!).split('-').reverse().join('-')}</p>
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
              {data.map((producto, index) => (
                <tr key={index} className={style['table-row']}>

                  <td className={style['table-cell']}>{index}</td>
                  <td className={style['table-cell']}>{producto.name}</td>
                  <td className={style['table-cell']}>{producto.price}</td>
                  <td className={style['table-cell']}>{producto.stock}</td>
                  <td className={style['table-cell']}>{producto.created_at && formatSimpleDate(producto.created_at)}</td>
                  <td className={style['table-cell']}>{producto.updated_at && formatSimpleDate(producto.updated_at)}</td>
                  <td className={`${style['table-cell']} ${style.update}`} onClick={() => handleModal('update', producto)}><GrEdit color='green' size={18} /></td>
                  <td className={`${style['table-cell']} ${style.delete}`} onClick={() => handleModal('delete', producto)}><MdDelete color='red' size={18} /></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div
          className={style.add}
          onClick={() => handleModal('create', INITIAL_STATE.selectedProduct)}>
          <span>Agruegar Producto</span>
          <span>
            <BiPlus color='orange' size={40} />
          </span>
        </div>
        {
          modal.isOpen && <ADMmodal data={data} handleModal={handleModal} action={modal.action} selected={modal.selectedProduct} entityType={'product'}/>
        }
      </article>
    </div>
  )
}
