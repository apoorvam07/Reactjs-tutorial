import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UseState from "./components/UseState";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import Useeffect from "./components/Useeffect";
import UseRef from "./components/UseRef";
import Usecontext from "./store/Usecontext";
import Usecallback from "./components/Usecallback";
import MyForm from "./components/MyForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/MyForm", element: <MyForm /> },
      { path: "/UseState", element: <UseState /> },
      { path: "/Useeffect", element: <Useeffect /> },
      { path: "/UseReducer", element: <UseReducer /> },
      { path: "/UseRef", element: <UseRef /> },
      { path: "/Usecontext", element: <Usecontext /> },
      { path: "/UseMemo", element: <UseMemo /> },
      { path: "/Usecallback", element: <Usecallback /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
