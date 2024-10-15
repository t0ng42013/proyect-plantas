
import { FilterPrice, FilterSort } from '../components';

import style from '../style/productSidebar.module.css'
import { Filter } from '../components/Filter';

export const ProductSidebar = () => {


    return (
        <div className={style.collections__sidebar}>
            <form action="">
                <div>
                    <h2>Filtros y orden</h2>
                </div>

                <div className={style['collections__Form-filter']}>
                    <div >
                        <Filter />
                        <FilterPrice />

                    </div>

                    <FilterSort />
                </div>

            </form>
        </div>
    )
}

