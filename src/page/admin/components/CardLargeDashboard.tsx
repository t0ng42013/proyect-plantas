

import { BsClock } from 'react-icons/bs';
import style from '../../admin/style/CardGraphic.module.css';

const menuItem = [
    {
        title: "Daily Sales",
        description: '↗️55% increase in today sales',
        udpated: "update 4 min ago",
        bg: "#66BB6A"
    },
    {
        title: "Email Subscriptions",
        description: 'Last Campaign Performance',
        udpated: "campaign sent 2 days ago",
        bg: "#FFA726"
    },
    {
        title: "Completed Tasks",
        description: 'Last Campaign Performance',
        udpated: "campaign sent 2 days ago",
        bg: "#EF5350"
    },

]
export const CardLargeDashboard = () => {
    return (
        <>
            {
                menuItem.map(({ title, description, udpated,bg }) => (
                    <div className={style.cardContainer}>
                        <div className={style.cardContainerContent}>
                            <div className={style.chart} style={{ backgroundColor: bg }}>
                                <div> </div>
                            </div>
                            <div className={style.cardInfo}>
                                <p className={style.cardTitle}>{title}</p>
                                <p className={style.cardDes}>{description}</p>
                            </div>
                            <div className={style.cardFooter}>
                                <span><BsClock size={12} /></span>
                                <p>{udpated}</p>
                            </div>
                        </div>
                    </div>
                )
                )
            }
            </>
        // <div className={style.cardContainer}>
        //     <div className={style.cardContainerContent}>
        //         <div className={style.chart} style={{ backgroundColor: "#66BB6A" }}>
        //             <div></div>
        //         </div>
        //         <div className={style.cardInfo}>
        //             <p className={style.cardTitle}>Daily Sales</p>
        //             <p className={style.cardDes}> 55% increase in today sales</p>
        //         </div>
        //         <div className={style.cardFooter}>
        //             <span><BsClock size={12}/></span>
        //             <p>updated 4 min ago</p>
        //         </div>
        //     </div>
        // </div>


    )
}
