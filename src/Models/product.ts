export interface Product {
    productName: string;
    description: string;
    colour: string;
    category: Category;
    price: number;
    stock: number;
    image: string;
    id: number;
}

export interface Category {
    gender: string;
    activity: string;
}
