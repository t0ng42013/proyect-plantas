export interface Productos{
    id: number;
    name: string;
    img: string;
    describe: string;
    price: number;
    category: string;
    stock: number;
    quantity?: number;
    updated_at: Date;
    created_at: Date;
}