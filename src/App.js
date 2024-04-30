import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestroMenu from "./RestroMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Cart";

const App = () => {

    const [User, SetUser] = useState("");

    useEffect(() => {
        //authentication
        const userData = {
            name: "Anil Kumar"
        }
        SetUser(userData.name)
    }, [])


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ UserName: User }}>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appBrowser = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Restaurent/:ResId',
                element: <RestroMenu />,
            },
            {
                path: '/cart',
                element: <Cart />
            }

        ],
        errorElement: <Error />,
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appBrowser} />)