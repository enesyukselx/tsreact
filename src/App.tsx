import Layout from "./Components/Layout/Layout";
import ErrorBoundary from "./Pages/ErrorBoundary/ErrorBoundary";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import UserContextProvider from "./Components/UserContext/UserContextProvider";

import Home from "./Pages/Home/Home";

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
