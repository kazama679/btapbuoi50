export interface Product {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    stock: number
}

export interface Cart {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    stock: number
    quantity:number
}