import React from "react";
import { User, creditCard } from "../../dummydatas/types";

const UserContext = React.createContext<{
    isLogin: boolean;
    user: User | undefined;
    creditCards: creditCard[] | undefined;
    login: (user: User) => void;
    logout: () => void;
    addCreditCard: (creditCard: creditCard) => void;
    removeCreditCard: (creditCard: creditCard) => void;
}>({
    isLogin: false,
    user: undefined,
    creditCards: undefined,
    login: () => {},
    logout: () => {},
    addCreditCard: () => {},
    removeCreditCard: () => {},
});

export default UserContext;
