import { CiHeart } from 'react-icons/ci'
import { FaHeart, FaRegEye } from 'react-icons/fa'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'



import style from '../style/card.module.css'

export const CardBlog = () => {
    return (
        <article style={{maxWidth:'450px'}} className={style.productCard}>
            <figure className={style.productI}>
                <img src="https://static.wixstatic.com/media/c837a6_326af6b8497c48cda62de734820ce3a5~mv2.jpg/v1/fill/w_568,h_319,fp_0.50_0.50,q_90,enc_auto/c837a6_326af6b8497c48cda62de734820ce3a5~mv2.jpg" alt="" />
            </figure>

            <div className={style.productInfoBlog}>
                <span className={style.productFecha}>1 dic 2022 . 1 min.</span>
                <h2 className={style.productName}>Como cambiar la Maceta</h2>
                <p className={style.productText}>
                    Crea un subtítulo para la entrada del blog que resuma dicha publicación en un par de oraciones e invite a tu audiencia a continuar...
                </p>
            </div>

            <hr />

            <div className={style.productUser}>
                <div className={style.productWatch}>
                    <FaRegEye /> <span>0</span>
                    <div className={style.productChat}>
                        <MdOutlineChatBubbleOutline /> <span>0</span>
                    </div>
                </div>
                <span className={style.productLiks}><CiHeart /> <FaHeart /></span>
            </div>
        </article>
    )
}
