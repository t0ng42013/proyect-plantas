import { PiNewspaperClippingDuotone } from 'react-icons/pi'
import { FaUserSecret } from 'react-icons/fa'
import { useAppSelector } from '../../../hooks/hooks'


import style from '../../admin/style/cardSmallDashboard.module.css'




export const CardSmallDashboard = () => {
    const {data} = useAppSelector(state=>state.products)
    const menuItem = [
        {
            label: 'Usuarios',
            icon: <FaUserSecret size={56} />,
            title: 'Usuarios',
            value: '1200',
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
        // {
        //     label: 'Pedidos',
        //     icon: <PiNewspaperClippingDuotone size={56} />,
        //     title: 'Pedidos',
        //     value: '48',
        //     footer: 'Pedidos en proceso',
        //     bg: '#42A5F5'
        // },
        {
            label: 'Comentarios',
            icon: <PiNewspaperClippingDuotone size={56} />,
            title: 'Comentarios',
            value: '240',
            footer: 'Reseñas recibidas',
            bg: '#EF5350'
        },
        {
            label: 'Ventas',
            icon: <PiNewspaperClippingDuotone size={56} />,
            title: 'Ventas Totales',
            value: '$45,000',
            footer: 'Ingresos de este mes',
            bg: '#AB47BC'
        },
    ]
    return (
        <>

            {
                menuItem.map(({  icon, title, value, footer, bg }) => (
                    <div className={style.cardContainer}>
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
