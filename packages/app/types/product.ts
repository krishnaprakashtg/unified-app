export interface Product {
    id: number; 
    title: string; 
    price: number; 
    thumbnail: string; 
}

export interface BJSProduct { 
    badgeStatus: string,
    available_pickup: boolean,
    available_shipping: boolean,
    available_sdd: boolean,
    itemName: string, 
    price: number,
    productImageURL: string, 
    rating?: number,
    ratingCount?: number,
    salePrice: number
}