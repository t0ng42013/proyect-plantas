import { CardComments } from '../components';



import style from '../style/comments.module.css';


export const Comments = () => {
  return (
      <article className={style.cardContainer}>
          <h2 className={style.article__title}> lo Que dicen nuestros clientes</h2>
          <div className={style.article__spacer}>
              <span className=''></span>
          </div>

          <div className={style.article__cards}>
              <CardComments />
              <CardComments />
              <CardComments />
              <CardComments />
          </div>
      </article>
  )
}
