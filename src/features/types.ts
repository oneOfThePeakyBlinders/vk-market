
export interface CartState {
    cartItems: CartItem[];
    status: Status
}


export interface CartItem {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    discount: number;
    left: number;
    desc: string
    image: string;
    amount: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}