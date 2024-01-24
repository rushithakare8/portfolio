import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import Colorchange from "./component/Practical/ColorChange";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home/Home";
import LoginPage from "./component/Practical/LoginPage";
import Register from "./component/Practical/Register";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="color" element={<Colorchange />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
