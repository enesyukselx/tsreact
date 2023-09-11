import { User, creditCard } from "./types";

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

const cards: creditCard[] = [
    {
        id: 2,
        userId: 2,
        number: "5678 5678 5678 5671",
        cvv: "456",
        expirationDate: "12/22",
    },
    {
        id: 3,
        userId: 2,
        number: "5678 5678 5678 5672",
        cvv: "456",
        expirationDate: "12/22",
    },
    {
        id: 4,
        userId: 2,
        number: "5678 5678 5678 5673",
        cvv: "456",
        expirationDate: "12/22",
    },
];

export { users, cards };
