import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Header />
            <Container className="mt-4">{children}</Container>
            <Footer />
        </main>
    );
};

export default Layout;
