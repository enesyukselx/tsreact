type User = {
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

type creditCard = {
    id: number;
    userId: number;
    number: string;
    cvv: string;
    expirationDate: string;
};

const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        password: "123456",
        details: {
            age: 27,
            city: "New York",
            country: "USA",
        },
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com",
        password: "123456",
        details: {
            age: 25,
            city: "London",
            country: "UK",
        },
    },
];

const creditCards: creditCard[] = [
    {
        id: 1,
        userId: 1,
        number: "1234 1234 1234 1234",
        cvv: "123",
        expirationDate: "12/22",
    },
    {
        id: 2,
        userId: 2,
        number: "5678 5678 5678 5678",
        cvv: "456",
        expirationDate: "12/22",
    },
];

export { users, creditCards };
