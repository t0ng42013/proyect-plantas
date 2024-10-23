import { Card, RouteNavigation } from '../components';
import { ModalBuy } from '../components/ModalBuy';
import { ProductSidebar } from '../container';
import { useAppSelector } from '../hooks/hooks';
import { useScrollTo } from '../hooks/useScroll';
import { useState } from 'react';

import style from '../style/plantas.module.css'


export const Plantas = () => {
const {filtros}= useAppSelector(state => state.filter);
const [currentPage, setCurrentPage] = useState(6);

useScrollTo();

const plantas = filtros.slice(0, currentPage);

const showMore = ()=>{
    setCurrentPage( prevCurrentPage =>prevCurrentPage + 4);
}

    return (
        <>
            <RouteNavigation />

            <section>
                <div className={style.bg}></div>
                <div className={style.conatiner}>
                    <ProductSidebar />
                    <div className={style.containerCard}>
                        {
                            plantas.map(item => (<Card item={item} key={item.id} dark={true} />))
                        }
                        {
                            filtros.length > currentPage && <div className={style.showMore}><button onClick={showMore} >Ver más</button></div>
                        }
                    </div>
                </div>
            </section>
            <ModalBuy />
        </>
    )
}
