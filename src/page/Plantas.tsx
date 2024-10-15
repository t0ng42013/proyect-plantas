import { useEffect } from 'react';
import { Card, RouteNavigation } from '../components';
import { ModalBuy } from '../components/ModalBuy';
import { ProductSidebar } from '../container';
import { useAppSelector } from '../hooks/hooks';



import style from '../style/plantas.module.css'

export const Plantas = () => {
const {filtros}= useAppSelector(state => state.filter);

useEffect(() => {
window.scrollTo(0, 0);
}, [])

    return (
        <>
            <RouteNavigation />

            <section>
                <div className={style.bg}></div>
                <div className={style.conatiner}>
                    <ProductSidebar />
                    <div className={style.containerCard}>
                        {
                            filtros.map(item => (<Card item={item} key={item.id} dark={true} />))
                        }
                    </div>
                </div>
            </section>
            <ModalBuy />
        </>
    )
}
