import { FaQuoteLeft } from "react-icons/fa"


import style from "../style/cardComment.module.css"

export const CardComments = () => {
    return (
        <div className={style.cardContainer}>
            <div className="cardContainer-img"><FaQuoteLeft size={32} color="#c6d8c0" /></div>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe architecto fuga excepturi ullam sapiente atque dicta?</p>
            <div className="userComments">
                <img src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-2.jpg" alt="user" />
                <h4>User user</h4>
            </div>
        </div>
    )
}
