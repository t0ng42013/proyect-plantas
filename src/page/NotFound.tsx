import { useNavigate } from 'react-router-dom'
import style from '../style/notFound.module.css'
import { useEffect } from 'react';

export const NotFound = () => {
  const navigate = useNavigate ();

useEffect(() => {
  window.scrollTo(0, 0); 
}, [])


const handleNavigate = () =>{
  navigate('/');
}

  return (
    <div className={style['not-found-container']}>
      <div className={style.card}>
        <div className={style.header}>
          <h1 className={style['text-9xl']}>404</h1>
          <h1 className={style['text-6xl']}>Oops! Page not found</h1>
          <p className={style['text-2xl']}>
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <button
          onClick={handleNavigate}
          className={style['home-button']}>HOME</button>
          <button className={style['contact-button']}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}
