import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import { ADMmodal } from '../../components/order/ADMmodal';
import { getAllCommentsThunk } from '../../redux/comments/handleComments';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IComments } from '../../interface/Comment';



import style from './style/adminUser.module.css';
export const AdminComment = () => {

  const {comments}= useAppSelector(state => state.comment);
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState({
    isOpen : false,
    action : '',
    selected:{
      comment: '',
    }
  })

  const handleComment = (action:string,comm:IComments) => {
    setComment(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      action:action,
      selected: comm
    }))
  }

  useEffect(() => {
    if (!comments || comments.length === 0) {
      dispatch(getAllCommentsThunk());
    }
  }, [dispatch, comments])


  return (
    <div className={style['card-wrapper']}>
      <article className={style['employee-card']}>

        <div className={style['card-header']} style={{ background: '#238329', color: '#fff' }}>
          <h2 className={style['card-title']}>Usuarios Stats</h2>
          <p className={style['card-subtitle']}>New usuario on 15t de Septiembre, 2024</p>
        </div>

        <div className={style['card-body']}>
          <table className={style['employee-table']}>
            <thead className={style['table-header']}>
              <tr className={style['header-row']}>
                <th className={style['header-cell']}>ID</th>
                <th className={style['header-cell']}>Usuario</th>
                <th className={style['header-cell']}>Comentario</th>
                <th className={style['header-cell']}>Edit</th>
                <th className={style['header-cell']}>Delete</th>
              </tr>
            </thead>

            <tbody className={style['table-body']}>
              {comments.map((com, index) => (
                <tr key={index} className={style['table-row']}>

                  <td className={style['table-cell']}>{index + 1}</td>
                  <td className={style['table-cell']}>{com.comment}</td>
                  <td className={style['table-cell']}>{com.userName}</td>
                  <td className={`${style['table-cell']} ${style.update}`} onClick={() => handleComment('update', com)} ><GrEdit color='green' size={18} /></td>
                  <td className={`${style['table-cell']} ${style.delete}`} onClick={() => handleComment('delete', com)}><MdDelete color='red' size={18} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {comment.isOpen && <ADMmodal data={comment} handleModal={handleComment} action={comment.action} selected={comment.selected} entityType={'comment'} />}
      </article>
    </div>
  )
  
}
