import { ReactNode, useContext, useEffect } from "react";
import UserContext from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const MustBeLogin = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const { isLogin } = useContext(UserContext);

    useEffect(() => {
        if (!isLogin) {
            navigate("/");
            return;
        }
    });

    return children;
};

export default MustBeLogin;
