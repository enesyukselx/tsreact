import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../UserContext/UserContext";
import ModalScreen from "../Modal/Modal";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isModalOpen } = useContext(UserContext);

    return (
        <main>
            {isModalOpen && <ModalScreen />}
            <Header />
            <Container className="mt-4">{children}</Container>
            <Footer />
        </main>
    );
};

export default Layout;
