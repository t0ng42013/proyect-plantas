import { CiHeart } from 'react-icons/ci'
import { FaHeart, FaRegEye } from 'react-icons/fa'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'
import { useState } from 'react'



import style from '../style/card.module.css'

export const CardBlog = ({img,titulo,subtitulo}) => {
    const [like, setLike] = useState(false)


    const handleLike = () =>{
        setLike(!like)
    }


        return (
        <article style={{maxWidth:'450px'}} className={style.productCard}>
            <figure className={style.productI}>
                <source media="(max-width: 600px)" srcSet="/logoMobile.webp" />
                <img src={img} alt="planta" />
            </figure>

            <div className={style.productInfoBlog}>
                <span style={{color:'black'}} className={style.productFecha}>1 dic 2022 . 1 min.</span>
                <h2 className={style.productName}>{titulo}</h2>
                <p className={style.productText}>
                    {subtitulo}
                </p>
            </div>

            <hr />

            <div className={style.productUser}>
                <div className={style.productWatch}>
                    <FaRegEye /> <span>0</span>
                    <div className={style.productChat}>
                        <MdOutlineChatBubbleOutline /><span>0</span>
                    </div>
                </div>
                <span onClick={handleLike} className={style.productLiks}>{like ?<FaHeart />:<CiHeart />}</span>
            </div>
        </article>
    )
}
