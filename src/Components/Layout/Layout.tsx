import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import ModalContext from "../ModalContext/ModalContext";
import ModalScreen from "../Modal/Modal";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isModalOpen } = useContext(ModalContext);

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
