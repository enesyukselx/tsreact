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
    isModalOpen: boolean;
    toggleModal: () => void;
    modelContent: React.ReactNode | undefined;
}>({
    isLogin: false,
    user: undefined,
    creditCards: undefined,
    login: () => {},
    logout: () => {},
    addCreditCard: () => {},
    removeCreditCard: () => {},
    isModalOpen: false,
    toggleModal: () => {},
    modelContent: undefined,
});

export default UserContext;
