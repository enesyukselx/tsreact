export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    details: {
        age: number;
        city: string;
        country: string;
    };
};

export type creditCard = {
    id: number;
    userId: number;
    number: string;
    cvc: string;
    expirationDate: string;
    name: string;
};
