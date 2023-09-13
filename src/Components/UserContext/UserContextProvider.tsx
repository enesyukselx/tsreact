import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { User, creditCard } from "../../dummydatas/types";
import { cards } from "../../dummydatas/data";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [creditCards, setCreditCards] = useState<creditCard[] | undefined>(
        undefined
    );

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const userObj = JSON.parse(user);
            setUser(userObj);
            setIsLogin(true);
        }
    }, []);

    const login = (user: User) => {
        setIsLogin(true);
        setCreditCards(cards);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setIsLogin(false);
        setUser(undefined);
        localStorage.removeItem("user");
    };

    const updateUser = (user: User) => {
        setUser(user);
    };

    const getUserCreditCards = (userId: number) => {
        return creditCards?.filter((c) => c.userId === userId);
    };

    const addCreditCard = (creditCard: creditCard) => {
        if (!creditCard) {
            return setCreditCards([creditCard]);
        }
        return setCreditCards([...creditCards!, creditCard]);
    };

    const removeCreditCard = (creditCard: creditCard) => {
        setCreditCards(creditCards?.filter((c) => c.id !== creditCard.id));
    };

    const values = {
        isLogin,
        user,
        creditCards,
        login,
        logout,
        updateUser,
        getUserCreditCards,
        addCreditCard,
        removeCreditCard,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;
