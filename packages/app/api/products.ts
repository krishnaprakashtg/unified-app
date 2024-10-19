import { Product } from "app/types/product";
const API_URL = `https://dummyjson.com/products`

export const getProducts = async (): Promise<Product[]> => {

    const req = new Request(`${API_URL}`);

    const res = await fetch(req);
    const data = await res.json(); 
    return data.products || [];

}

export const getProduct = async (id: number): Promise<Product> => {

    const req = new Request(`${API_URL}/${id}`);

    const res = await fetch(req);
    const data = await res.json();

    return data || [];

}