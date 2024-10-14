import { Card, RouteNavigation } from '../components';
import { ProductSidebar } from '../container/ProductSidebar';
import { plantas } from '../data/plantas';
import { ModalBuy } from '../components/ModalBuy';



import style from '../style/plantas.module.css'
import { useState } from 'react';

export const Plantas = () => {
    
    const [filteredProducts, setFilteredProducts] = useState(plantas); // Suponiendo que tengas los productos en algún estado
    const [sortBy, setSortBy] = useState('best-selling');
    
    const handleSortChange = (sort:string) => {
        setSortBy(sort);
        

        const sortedProducts = [...plantas].sort((a, b) => {
            switch (sort) {
                case 'best-selling':
                    // Suponiendo que tienes un campo `ventas` en los productos
                    return b.precio - a.precio;
                case 'title-ascending':
                    return a.nombre.localeCompare(b.nombre);
                case 'title-descending':
                    return b.nombre.localeCompare(a.nombre);
                case 'price-ascending':
                    return a.precio - b.precio;
                case 'price-descending':
                    return b.precio - a.precio;
              
                default:
                    return 0;
            }
        });
        setFilteredProducts(sortedProducts);
    };

    return (
        <>
            <RouteNavigation />

            <section>
                <div className={style.bg}></div>
                <div className={style.conatiner}>
                    <ProductSidebar  onSortChange={handleSortChange}  />
                    <div className={style.containerCard}>
                        {
                            filteredProducts.map(item => (<Card item={item} key={item.id} dark={true} />))
                        }
                    </div>
                </div>
            </section>
            <ModalBuy />
        </>
    )
}
