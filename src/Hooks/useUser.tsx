import { useContext } from "react";
import UserContext from "../Components/UserContext/UserContext";

const useUser = () => {
    const {
        isLogin,
        user,
        creditCards,
        login,
        logout,
        updateUser,
        getUserCreditCards,
        addCreditCard,
        removeCreditCard,
    } = useContext(UserContext);
    return {
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
};

export default useUser;
