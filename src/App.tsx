import React from "react";
import {
    Outlet,
    Link,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./App.css";

const ErrorBoundary = React.lazy(
    () => import("./Pages/ErrorBoundary/ErrorBoundary")
);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Layout />
                <Container className="mt-4">
                    <Outlet />
                </Container>
            </div>
        ),
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "page1",
                element: <div>Page 1</div>,
            },
            {
                path: "page2",
                element: <div>Page 2</div>,
            },
        ],
    },
]);

export function Layout() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>React</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/page1">Page 1</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/page2">Page 2</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
