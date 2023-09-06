import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import { User, creditCard } from "../../dummydatas/types";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [creditCards, setCreditCards] = useState<creditCard[] | undefined>(
        undefined
    );
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [modelContent, setModelContent] = useState<ReactNode | undefined>(
        <div>Loading</div>
    );

    const login = (user: User) => {
        setIsLogin(true);
        setUser(user);
    };

    const logout = () => {
        setIsLogin(false);
        setUser(undefined);
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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const values = {
        isLogin,
        user,
        creditCards,
        login,
        logout,
        addCreditCard,
        removeCreditCard,
        isModalOpen,
        toggleModal,
        modelContent,
        setModelContent,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;
