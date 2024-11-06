import { PiNewspaperClippingDuotone } from 'react-icons/pi'
import { FaUserSecret } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'


import style from '../../admin/style/cardSmallDashboard.module.css'
import { useEffect } from 'react'
import { getAllCommentsThunk } from '../../../redux/comments/handleComments'
import { getUserThunk } from '../../../redux/log/handleUsers'
import { getProducts } from '../../../redux/data/helperProduct'



export const CardSmallDashboard = () => {
    const {usuarios} = useAppSelector(state => state.user)
    const {data} = useAppSelector(state => state.products)
    const {comments} = useAppSelector(state => state.comment)
    const dispatch = useAppDispatch();


    useEffect(() => {
    dispatch(getAllCommentsThunk());
    dispatch(getProducts());
    dispatch(getUserThunk());
    
    }, [dispatch])

    const menuItem = [
        {
            label: 'Usuarios',
            icon: <FaUserSecret size={56} />,
            title: 'Usuarios',
            value: usuarios.length,
            footer: 'Total de usuarios registrados',
            bg: '#FFA726'
        },
        {
            label: 'Productos',
            icon: <PiNewspaperClippingDuotone size={56} />,
            title: 'Productos',
            value: data.length,
            footer: 'Productos en stock',
            bg: '#66BB6A'
        },
        {
            label: 'Comentarios',
            icon: <PiNewspaperClippingDuotone size={56} />,
            title: 'Comentarios',
            value: comments.length,
            footer: 'Reseñas recibidas',
            bg: '#EF5350'
        },
        {
            label: 'Ventas',
            icon: <PiNewspaperClippingDuotone size={56} />,
            title: 'Ventas Totales',
            value: '$' + data.reduce((acc, item) => acc + item.price, 0),
            footer: 'Ingresos de este mes',
            bg: '#AB47BC'
        },
    ]
    return (
        <>

            {
                menuItem.map(({  icon, title, value, footer, bg }) => (
                    <div key={title} className={style.cardContainer}>
                        <div className={style.cardContainerContent}>
                            <div className={style.cardIcon} style={{ backgroundColor: bg }}>
                                {icon}
                            </div>
                            <div className={style.cardContent}>
                                <p className={style.cardTitle}>{title}</p>
                                <p className={style.cardValue}>{value}</p>
                                <p className={style.cardFooter}>{footer}</p>
                            </div>
                        </div>
                    </div>))
            }
        </>
    )
}
