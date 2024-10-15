import { RiArrowDropDownLine } from "react-icons/ri"
import { checkStock, outOfStock } from "../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";


export const Filter = () => {

    const { agotado, stock } = useAppSelector(state => state.filter);
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
                      type="checkbox"
                      name="stock"
                      id="Enstock"
                      onChange={() => dispatch(checkStock())}
                  />
                  <label htmlFor="Enstock">En stock({stock})</label>
              </div>
              <div>
                  <input type="checkbox" name="agotado" id="agotado" onChange={() => dispatch(outOfStock())} />
                  <label htmlFor="agotado">Agotado({agotado})</label>
              </div>
          </div>
      </details>
  )
}
