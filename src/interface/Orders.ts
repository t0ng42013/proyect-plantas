export interface ProductOrders {
    productID: number | undefined;
    name: string;
    quantity: number;
    price: number;
    created_at?: Date;
    id?: number | undefined;
}
export interface Orders {
    id?:number  | undefined;
    userID: number | undefined;
    products: ProductOrders[];
    amount: number;
    status: boolean;
    total: number;
    created_at?: Date | undefined;
}

export interface OrderListProps {
    order: Orders[];
}

