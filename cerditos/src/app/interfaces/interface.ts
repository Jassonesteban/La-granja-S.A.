export interface user {
    id: string;
    docType: string;
    name: string;
    lastName: string;
    adress: string;
    tel: string;
    type: string;
}

export interface food {
    dose: number; // posible number
    description: string;
}

export interface pig{
    breed: string;
    age: number;
    weight: number;
    food: {
        id: number;
    },
    user: {
        id: string;
    }
}