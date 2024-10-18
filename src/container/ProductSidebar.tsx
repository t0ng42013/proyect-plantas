
import { FilterPrice, FilterSort } from '../components';
import { Filter } from '../components/Filter';

import style from '../style/productSidebar.module.css'

export const ProductSidebar = () => {


    return (
        <div className={style.collections__sidebar}>
            <form >
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

