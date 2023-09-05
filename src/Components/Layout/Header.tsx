import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
    interface INavLink {
        name: string;
        path: string;
    }

    const navLinks: INavLink[] = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page 1",
            path: "/page1",
        },
        {
            name: "Page 2",
            path: "/page2",
        },
    ];

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>React</Navbar.Brand>
                <Nav className="me-auto gap-2">
                    {navLinks.map((link, index) => (
                        <Nav.Item key={index}>
                            <NavLink
                                key={index}
                                className="nav-link"
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
