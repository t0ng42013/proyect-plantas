import { ChangeEvent, useState } from 'react'



import style from '../style/productSidebar.module.css'


export const ProductSidebar = ({ onSortChange }) => {
    const [filters, setFilters] = useState({
        stock: false,
        agotado: false,
        minPrice: 0,
        maxPrice: 150,
        sortBy: 'best-selling'
    })

    const handleSortChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setFilters({
            ...filters,
            sortBy: e.target.value
        });
        onSortChange(e.target.value);
    };

  return (
      <div className={style.collections__sidebar}>
          <form action="">
              <div>
                  <h2>Filtros y orden</h2>
              </div>

              <div className={style['collections__Form-filter']}>
                  <div >
                      <details>
                          <summary>
                              Disponiblidad
                              <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="black" aria-hidden="true">
                                  <path d="M7.27442 9.5864L11.8869 4.96111C12.038 4.80957 12.0377 4.56422 11.8861 4.41293C11.7346 4.26176 11.4891 4.26215 11.338 4.41371L6.99998 8.76369L2.66203 4.41355C2.51086 4.26201 2.26553 4.26162 2.11397 4.41277C2.03799 4.48861 2 4.58797 2 4.68732C2 4.78642 2.03774 4.88539 2.11319 4.96109L6.72557 9.5864C6.79819 9.65939 6.89702 9.70035 6.99998 9.70035C7.10295 9.70035 7.20166 9.65927 7.27442 9.5864Z"></path>
                              </svg>
                          </summary>
                          <div>
                              <div>
                                  <input type="checkbox" name="stock" id="Enstock" />
                                  <label htmlFor="Enstock">En stock(232)</label>
                              </div>
                              <div>
                                  <input type="checkbox" name="agotado" id="agotado" />
                                  <label htmlFor="agotado">Agotado</label>
                              </div>
                          </div>
                      </details>

                      <details className={style['collections__filter-price']}>
                          <summary>
                              Precio
                              <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="black" aria-hidden="true">
                                  <path d="M7.27442 9.5864L11.8869 4.96111C12.038 4.80957 12.0377 4.56422 11.8861 4.41293C11.7346 4.26176 11.4891 4.26215 11.338 4.41371L6.99998 8.76369L2.66203 4.41355C2.51086 4.26201 2.26553 4.26162 2.11397 4.41277C2.03799 4.48861 2 4.58797 2 4.68732C2 4.78642 2.03774 4.88539 2.11319 4.96109L6.72557 9.5864C6.79819 9.65939 6.89702 9.70035 6.99998 9.70035C7.10295 9.70035 7.20166 9.65927 7.27442 9.5864Z"></path>
                              </svg>
                          </summary>
                          <div className={style['collections__price-input']}>
                              <input type="number" name="minPrice" id="" placeholder="$0" />
                              <span className={style['collections__price-separator']}></span>
                              <input type="number" name="maxPrice" id="" placeholder="$150" />
                          </div>
                          <div className={style['collections__price-range']}>
                              <input aria-hidden="true" type="range" min="0" data-type="min" max="150" tabIndex={-1} value="0" /><input aria-hidden="true" type="range" min="0" max="150" tabIndex={-1} value="150" />
                          </div>
                      </details>

                  </div>

                  <div className={style['collections__filter-order']}>
                      <h2 >Ordenar por</h2>
                  </div>
                  <div>
                      <div >
                          {/* <label htmlFor="Sort">Alfabeticamente, AZ</label> */}
                          <select name="sort_by" id="Sort" aria-label="Ordenar por" value={filters.sortBy} onChange={handleSortChange}>
                              <option value="best-selling" selected>Los más vendidos</option>
                              <option value="title-ascending">Alfabéticamente, AZ</option>
                              <option value="title-descending">Alfabéticamente, ZA</option>
                              <option value="price-ascending">Precio, de menor a mayor</option>
                              <option value="price-descending">Precio, de mayor a menor</option>
                              <option value="created-ascending">Fecha, de antigua a nueva</option>
                              <option value="created-descending">Fecha, de nueva a antigua</option>
                          </select>
                      </div>
                  </div>
              </div>

          </form>
      </div>
  )
}

