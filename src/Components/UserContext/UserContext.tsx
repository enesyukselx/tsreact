import React from "react";
import { User, creditCard } from "../../dummydatas/types";

const UserContext = React.createContext<{
    isLogin: boolean;
    user: User | undefined;
    creditCards: creditCard[] | undefined;
    login: (user: User) => void;
    logout: () => void;
    getUserCreditCards: (userId: number) => creditCard[] | undefined;
    addCreditCard: (creditCard: creditCard) => void;
    removeCreditCard: (creditCard: creditCard) => void;
}>({
    isLogin: false,
    user: undefined,
    creditCards: undefined,
    login: () => {},
    logout: () => {},
    getUserCreditCards: () => undefined,
    addCreditCard: () => {},
    removeCreditCard: () => {},
});

export default UserContext;
