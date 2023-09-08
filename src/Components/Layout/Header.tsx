import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext/UserContext";
import useModal from "../../Hooks/useModal";
import Login from "../Modal/Login/Login";

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
    const { setTitle, setContent } = useModal();

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
                                <NavLink className="nav-link" to="/account">
                                    Account
                                </NavLink>

                                <NavLink className="nav-link" to="/logout">
                                    Logout
                                </NavLink>
                            </>
                        )}
                        {!isLogin && (
                            <Nav.Link
                                onClick={() => {
                                    if (setContent && setTitle) {
                                        setTitle("Login");
                                        setContent(<Login />);
                                    }
                                }}
                            >
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
