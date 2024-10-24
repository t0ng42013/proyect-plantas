import { RiArrowDropDownLine } from "react-icons/ri"
import { checkStock, outOfStock } from "../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";


export const Filter = () => {
    const {data} = useAppSelector((state) => state.products);
    const filter = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();

  return (
      <details>
          <summary>
              Disponiblidad
              <RiArrowDropDownLine size={32} />
          </summary>
          <div>
              <div>
                
                  <input
                  
                      type="radio"
                      name="stock"
                      id="Enstock"
                      onChange={() => dispatch(checkStock(data))}
                  />
                  <label htmlFor="Enstock">En stock({filter.stock})</label>
              </div>
              <div>
                  <input type="radio" name="stock" id="agotado"  onChange={() => dispatch(outOfStock(data))} />
                  <label htmlFor="agotado">Agotado({filter.agotado})</label>
              </div>
          </div>
      </details>
  )
}
