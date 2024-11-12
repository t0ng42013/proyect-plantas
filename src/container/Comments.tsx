import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { CardComments } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { createCommentsThunk, getAllCommentsThunk } from '../redux/comments/handleComments';
import { RiPlayListAddLine } from 'react-icons/ri';
import { getAllOrderData } from '../redux/orders/orderSlice';
import { showToast } from '../hooks/useConfirmationDialog';





import style from '../style/comments.module.css';
import { llegados } from '../utils/RecLlegados';
export const Comments = () => {

    const { comments, error, loading } = useAppSelector(state => state.comment)
    const { token } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();






    const handleComments = async () => {
        if (!token) return showToast('Debes iniciar sesión para comentar')
        await dispatch(getAllOrderData()).then((result) => {

            if (!result.payload || result.payload.length === 0) {
                showToast('No puedes comentar si no has comprado nada')
                return
            }
            Swal.fire({
                title: 'Deja tu comentario',
                text: '¿Quieres comentar?',
                html: `<textarea id="comment" className="swal2-textarea" placeholder="Escribe tu comentario aquí..."></textarea>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, comentar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
                preConfirm: () => {
                    const comment = (document.getElementById('comment') as HTMLInputElement).value;
                    if (!comment) {
                        Swal.showValidationMessage('El comentario no puede estar vacío');
                        return false;
                    }
                    return comment;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(comments)
                    dispatch(createCommentsThunk({ comment: result.value as string }));

                }
            });
        })

    };


    useEffect(() => {
        if (!comments || comments.length === 0) {
            dispatch(getAllCommentsThunk())
            return
        };
    }, [dispatch, comments])

    return (
        <article className={style.cardContainer}>
            <h2 className={style.article__title}> lo Que dicen nuestros clientes
                <span onClick={handleComments}> <RiPlayListAddLine size={32} /> </span>
            </h2>

            <div className={style.article__spacer}>
                <span></span>
            </div>

            <div className={style.article__cards}>

                {
                    loading && <div className={style.loading}><h1>Cargando...</h1></div>
                }
                {
                    error && <div className={style.loading}><h1>{error}</h1></div>
                }
                {
                    llegados(comments,3).map((comment, index) => (<CardComments key={index} comment={comment.comment} userName={comment?.userName} />))
                }
            </div>
        </article>
    )
}
