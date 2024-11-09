import { Productos } from "./Productos";

export interface ModalStateProps {
    isOpen: boolean;
    action: string;
    selected: Productos;
}