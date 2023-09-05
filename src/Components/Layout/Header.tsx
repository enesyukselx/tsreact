import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>React</Navbar.Brand>
                <Nav className="me-auto gap-2">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/page1">
                            Page 1
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/page2">
                            Page 2
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
