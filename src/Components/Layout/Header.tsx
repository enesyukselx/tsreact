import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext/UserContext";
import { useContext } from "react";

const Header = () => {
    interface INavLink {
        name: string;
        path: string;
    }

    const navLinks: INavLink[] = [
        {
            name: "Page 1",
            path: "/page1",
        },
        {
            name: "Page 2",
            path: "/page2",
        },
    ];

    const { isLogin } = useContext(UserContext);

    return (
        <Navbar
            bg="dark"
            data-bs-theme="dark"
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container>
                <NavLink className="navbar-brand" to="/">
                    React-Bootstrap
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {navLinks.map((link: INavLink, index: number) => (
                            <NavLink
                                className="nav-link"
                                to={link.path}
                                key={index}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </Nav>
                    <Nav>
                        {isLogin && (
                            <>
                                <NavLink className="nav-link" to="/logout">
                                    Logout
                                </NavLink>

                                <NavLink className="nav-link" to="/account">
                                    Account
                                </NavLink>
                            </>
                        )}
                        {!isLogin && (
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
