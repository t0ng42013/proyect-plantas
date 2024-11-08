export interface Productos{
    msg?: string | undefined;
    id?: number;
    name: string;
    img: string;
    imgHover?:string;
    describe: string;
    price: number;
    category: string;
    stock: number;
    quantity?: number;
    updated_at?: Date;
    created_at?: Date;
}