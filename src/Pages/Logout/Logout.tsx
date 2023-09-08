import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const { logout } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/");
    }, [navigate, logout]);
    return null;
};

export default Logout;
