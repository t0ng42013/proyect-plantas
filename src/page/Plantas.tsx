import { Card, RouteNavigation } from '../components';
import { ModalBuy } from '../components/ModalBuy';
import { ProductSidebar } from '../container';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useScrollTo } from '../hooks/useScroll';
import { useState, useEffect } from 'react';

import style from '../style/plantas.module.css'
import { fetchProducts } from '../redux/data/productSlice';


export const Plantas = () => {

const {filtros}= useAppSelector(state => state.filter);
const {data, isLoading,error }= useAppSelector(state => state.products) 
const dispatch = useAppDispatch();

const [currentPage, setCurrentPage] = useState(4);
const render = filtros.slice(0, currentPage);

useScrollTo();
const showMore = ()=>{
    setCurrentPage( prevCurrentPage =>prevCurrentPage + 4);
}


useEffect(() => {
    dispatch(fetchProducts());
}, [dispatch])

    return (
        <>
            <RouteNavigation />

            <section>
                <div className={style.bg}></div>
                <div className={style.conatiner}>
                    <ProductSidebar />
                    <div className={style.containerCard}>
                       
                       {!data
                            ? isLoading && <div className={style.loading}><h1>Cargando...</h1></div>
                            : error && <div className={style.loading}><h1>{error}</h1></div>
                       
                       }
                       

                        {(!filtros[0])
                            ? data.map(item => (<Card item={item} key={item.id} dark={true} />)).slice(0, currentPage)
                            :render.map(item => (<Card item={item} key={item.id} dark={true} />))
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
