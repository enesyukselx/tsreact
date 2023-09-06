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
            name: "Page 1",
            path: "/page1",
        },
        {
            name: "Page 2",
            path: "/page2",
        },
    ];

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
                        <NavLink className="nav-link" to="/logout">
                            More deets
                        </NavLink>
                        <NavLink className="nav-link" to="/account">
                            Dank memes
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
