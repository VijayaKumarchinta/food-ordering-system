import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/Components/Cart";
import Help from "./src/Components/Help";
import ShimmerMenu from "./src/Components/ShimmerMenu";
import ShimmerAbout from "./src/Components/ShimmerAbout";
import Login from "./src/Components/Login";
import Signup from "./src/Components/Signup";

// Chunking -- Code Splitting -- Dynamic Bundling -- Lazy Loading -- On Demand Loading -- Dynamic Import
const About = lazy(() => import("./src/Components/About"));
const RestaurantMenu = lazy(() => import("./src/Components/RestaurantMenu"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Vijay Kumar Chinta",
    email: "chintaviajayakumar7@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerAbout />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<ShimmerMenu />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
