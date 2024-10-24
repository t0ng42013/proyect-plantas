import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Productos } from '../../interface/Productos';

export interface FilterState {
    stock: number;
    agotado: number;
    filtros: Productos[];
}

const INITIAL_STATE: FilterState = {
    stock: 0,
    agotado: 0,
    filtros: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        checkStock: (state: FilterState, action: PayloadAction<Productos[]>) => {
            state.filtros = action.payload.filter(producto => producto.stock! > 0);
            state.stock = state.filtros.length;
        },
        outOfStock: (state: FilterState, action: PayloadAction<Productos[]>) => {
            state.filtros = action.payload.filter(producto => producto.stock! === 0);
            state.agotado = state.filtros.length;
        },
        filterByPrice: (state: FilterState, action: PayloadAction<{ data: Productos[], min: number, max: number }>) => {
            state.filtros = action.payload.data.filter(producto =>
                producto.price >= action.payload.min && producto.price <= action.payload.max
            );
        },
        filterSortBy: (state: FilterState, action: PayloadAction<{ data: Productos[], sortBy: string }>) => {
            const product = [...action.payload.data];
            switch (action.payload.sortBy) {
                case 'best-selling':
                    state.filtros = product.sort((a, b) => a.stock! - b.stock!);
                    break;
                case 'title-ascending':
                    state.filtros = product.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'title-descending':
                    state.filtros = product.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'price-ascending':
                    state.filtros = product.sort((a, b) => a.price - b.price);
                    break;
                case 'price-descending':
                    state.filtros = product.sort((a, b) => b.price - a.price);
                    break;
                
                default:
                    break;
            }

        },

    }
});

export const { checkStock, filterByPrice, outOfStock, filterSortBy } = filterSlice.actions;
export default filterSlice.reducer;