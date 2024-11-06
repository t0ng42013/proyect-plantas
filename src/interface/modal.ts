import { Productos } from "./Productos";

export interface ModalStateProps {
    isOpen: boolean;
    action: string;
    selectedProduct: Productos;
}