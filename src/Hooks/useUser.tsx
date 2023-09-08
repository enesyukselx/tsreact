import { useContext } from "react";
import UserContext from "../Components/UserContext/UserContext";

const useUser = () => {
    const {
        isLogin,
        user,
        creditCards,
        login,
        logout,
        addCreditCard,
        removeCreditCard,
    } = useContext(UserContext);
    return {
        isLogin,
        user,
        creditCards,
        login,
        logout,
        addCreditCard,
        removeCreditCard,
    };
};

export default useUser;
