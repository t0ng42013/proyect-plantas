import { BsBag, BsTruckFrontFill } from "react-icons/bs";
import { BiSolidDonateBlood } from "react-icons/bi";


import style from '../style/services.module.css'

interface Props {
    icon: React.ReactNode;
    title: string;
    subTitle: string;
}
const Servicios = [
    {
        icon: <BsBag size={32} />,
        title: 'Secure Payment',
        subTitle: 'Curabitur interdum, nisl at tincidunt.'
    },
    {
        icon: <BsTruckFrontFill size={32} />,
        title: 'Delivered With Care',
        subTitle: 'Donec sit amet neque id nisl.'
    },
    {
        icon: <BiSolidDonateBlood size={32} />,
        title: 'Excellent Service',
        subTitle: 'Amet neque id nisl ullamcorper.'
    },
]
const Service = ({ icon, title, subTitle }: Props) => {
    return (
        <article className={style.serviContainer} >
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.servTitle}>
                <h3 className={style.title}>{title}</h3>
                <span className={style.subTitle}>{subTitle}</span>
            </div>
        </article>
    )
}

export const Services = () => {
    return (
        <>
            <hr />
            <div className={style.servicios}>
                {Servicios.map(servicios => <Service key={servicios.title} {...servicios} />)}
            </div>
            <hr />
        </>

    )

}
