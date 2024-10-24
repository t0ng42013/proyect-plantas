// import { FilterState } from "./filterSlice";



// export const availableStock = (state: FilterState) => {
//     return state.filtros.filter(producto => producto.cantidad! > 0);
// }



// export const filterPriceRange = (state: FilterState, { min, max }: { min: number, max: number }) => {

//     return state.filtros.filter(producto =>
//         producto.precio >= min && producto.precio <= max
//     );
// };

// export const sortBy = (state: FilterState, sort: string) => {
//     switch (sort) {
//         case 'best-selling':
//             return [...state.filtros].sort((a, b) => a.cantidad! - b.cantidad!);
//         case 'title-ascending':
//             return [...state.filtros].sort((a, b) => a.nombre.localeCompare(b.nombre));
//             case 'title-descending':
//             return [...state.filtros].sort((a, b) => b.nombre.localeCompare(a.nombre));
//         case 'price-ascending':
//             return [...state.filtros].sort((a, b) => a.precio - b.precio);
//             case 'price-descending':
//             return [...state.filtros].sort((a, b) => b.precio - a.precio);
//         // case 'created-ascending':
//         //     return [...state.productos].sort((a,b)=> a.fecha - b.fecha);
//         // case 'created-descending':
//         //     return [...state.productos].sort((a,b)=> b.fecha - a.fecha);
//         default:
//             return [...state.filtros];
//     }
// }