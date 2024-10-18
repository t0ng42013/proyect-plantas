
import { useLocation } from 'react-router-dom';



import style from '../style/routeNav.module.css'

export const RouteNavigation = () => {

    const {pathname} = useLocation();
    const url = pathname.replace('/', '')

    return (
        
            <>
            <nav className={`${style.navigation} ${style.navigationPlants}`}>
                    <div className={style.breadcrumb}>
                        <a href="/" className={style['breadcrumb-home']}>Hogar</a>
                        <span className={style['breadcrumb-separator']}>/</span>
                        <span className={style['breadcrumb-current']}>{url}</span>
                    </div>
                </nav>
                <hr />

            {/* <section className={`${style.content} ${style.contentPlants}`}>
                    <div className={style['image-container']}>
                        <picture>
                            <img src="./plantasDeco.png" alt='Decoración de Plantas' className={style['content-image']} />
                        </picture>
                    </div>

                    <div className="text-container">
                        <div >
                            <h1 className={style['page-title']}>{url== 'Contacto' ? '¿Preguntas? ¿Comentarios?' :url}</h1>
                        </div>
                    </div>
                </section> */}
            </>
       
    )
}
