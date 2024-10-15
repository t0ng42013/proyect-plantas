import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { plantas } from "../../data/plantas";
import { availableStock, filterPriceRange, sortBy, } from "./handleFilter";
import { Productos } from '../../interface/Productos';

export interface FilterState {
    productos: Productos[];
    stock: number;
    agotado: number;
    filtros: Productos[];
}

const INITIAL_STATE: FilterState = {
    productos: plantas,
    stock: plantas.filter(i=> i.cantidad !== 0 ).length,
    agotado: plantas.filter(i=> i.cantidad === 0).length,
    filtros: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        checkStock: (state: FilterState) => {
            return {
                ...state,
                filtros: availableStock(state)
            }
        },
        outOfStock: (state: FilterState) => {
            return {
                ...state,
                filtros: state.productos.filter(producto => producto.cantidad! === 0)
            }
        },
        filterByPrice: (state: FilterState, action: PayloadAction<{ min: number, max: number }>) => {
            return {
                ...state,
                filtros: filterPriceRange(state, action.payload)
            }
        },
        filterSortBy:(state:FilterState, action:PayloadAction<string>) => {
            return {
                ...state,
                filtros: sortBy(state, action.payload)
            }
        },

    }
});

export const { checkStock, filterByPrice, outOfStock, filterSortBy } = filterSlice.actions;
export default filterSlice.reducer;