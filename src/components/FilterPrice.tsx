import { ChangeEvent, useState } from "react";
import { filterByPrice } from "../redux/filter/filterSlice";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAppDispatch } from "../hooks/hooks"


import style from '../style/productSidebar.module.css'


export const FilterPrice = () => {
    const dispatch = useAppDispatch();

    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(3000);

    const handleMinPriceChange =(e:ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(e.target.value));
        dispatch(filterByPrice({min:Number(e.target.value), max:maxPrice}))
    }
     const handleMaxPriceChange =(e:ChangeEvent<HTMLInputElement>) =>{
            setMaxPrice(Number(e.target.value));
            dispatch(filterByPrice({min:minPrice, max:Number(e.target.value)}))
        }
  
  return (
      <details className={style['collections__filter-price']}>
          <summary>
              Precio
              <RiArrowDropDownLine size={32} />
          </summary>
          <div className={style['collections__price-input']}>
              <input
                  type="number"
                  name="minPrice"
                  id="minPrice"
                  placeholder="$0"
                  value={minPrice}
                  onChange={handleMinPriceChange}
              />
              <span className={style['collections__price-separator']}></span>
              <input
                  type="number"
                  name="maxPrice"
                  id="maxPrice"
                  placeholder="$150"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
              />
          </div>
          <div className={style['collections__price-range']}>
              <input
                  className={style.rangeMin}
                  aria-hidden="true"
                  type="range"
                  min="0"
                  data-type="min"
                  max="1500"
                  value={minPrice}
                  onChange={handleMinPriceChange}
              />

              <input
                  className={style.rangeMax}
                  aria-hidden="true"
                  type="range"
                  datatype="max"
                  min="1500"
                  max="3000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
              />
          </div>
      </details>
  )
}
