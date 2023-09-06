import { lazy, Suspense } from "react";
import Layout from "./Components/Layout/Layout";
import ErrorBoundary from "./Pages/ErrorBoundary/ErrorBoundary";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import UserContextProvider from "./Components/UserContext/UserContextProvider";
import MustBeGuest from "./Components/Auth/MustBeGuest";
import MustBeLogin from "./Components/Auth/MustBeLogin";

import Home from "./Pages/Home/Home";
const Login = lazy(() => import("./Pages/Login/Login"));
const Account = lazy(() => import("./Pages/Account/Account"));
const Logout = lazy(() => import("./Pages/Logout/Logout"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "page1",
                element: <div>Page 1</div>,
            },
            {
                path: "page2",
                element: <div>Page 2</div>,
            },
            {
                path: "login",
                element: (
                    <MustBeGuest>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Login />
                        </Suspense>
                    </MustBeGuest>
                ),
            },
            {
                path: "account",
                element: (
                    <MustBeLogin>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Account />
                        </Suspense>
                    </MustBeLogin>
                ),
            },
            {
                path: "logout",
                element: (
                    <MustBeLogin>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Logout />
                        </Suspense>
                    </MustBeLogin>
                ),
            },
        ],
    },
]);

export function AppContainer() {
    return (
        <UserContextProvider>
            <Layout>
                <Outlet />
                <ToastContainer position="bottom-right" theme="dark" />
            </Layout>
        </UserContextProvider>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
