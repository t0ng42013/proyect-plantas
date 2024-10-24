



import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { filterSortBy } from '../redux/filter/filterSlice';
import style from '../style/productSidebar.module.css'

export const FilterSort = () => {
    const {data} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('title-ascending')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
        dispatch(filterSortBy({
            data,
            sortBy: value
        }));
    }

    useEffect(() => {
        dispatch(filterSortBy({
            data,
            sortBy: value
        }));
        console.log('fil')
    }, [value, dispatch,data])

    return (
        <>
            <div className={style['collections__filter-order']}>
                <h2 className={style.filterMobile} >Ordenar por</h2>
            </div>
            <div className={style.filterMobile} >           
                <label htmlFor="Sort">Alfabeticamente, AZ</label>
                <select name="sort_by" id="Sort" aria-label="Ordenar por" value={value} onChange={handleChange}>
                    <option value="best-selling" >Los más vendidos</option>
                    <option value="title-ascending">Alfabéticamente, AZ</option>
                    <option value="title-descending">Alfabéticamente, ZA</option>
                    <option value="price-ascending">Precio, de menor a mayor</option>
                    <option value="price-descending">Precio, de mayor a menor</option>
                    <option value="created-ascending">Fecha, de antigua a nueva</option>
                    <option value="created-descending">Fecha, de nueva a antigua</option>
                </select>            
            </div>
        </>
    )
}
