import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';


import style from "../style/cardComment.module.css"

interface CommentProps {
    comment: string;
    userName: string | undefined;
}

export const CardComments = ({ comment, userName }: CommentProps) => {
    return (
        <div className={style.cardContainer}>
            <div className="cardContainer-img"><FaQuoteLeft size={32} color="#c6d8c0" /></div>
            <p> 
                {
                    comment                     
                }
            </p>
            <div className="userComments">
                <FaUserCircle size={32} />
                <h4>{userName}</h4>
            </div>
        </div>
    )
}
