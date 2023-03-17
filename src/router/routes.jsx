import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout.jsx";
import { ErrorView } from "../views/ErrorView.jsx";
import { HomeView } from "../views/HomeView.jsx";
import { getHomeProducts } from "../context/jsonCalls.js";

export const rutas = createBrowserRouter([
    {
        element:            <Layout />,
        path:               '/',
        errorElement:       <ErrorView />,
        children: [
            {
                index:      true,
                element:    <HomeView />,
                loader:     getHomeProducts
            }
        ]
    }
]);