import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const Layout = (props) => {
  const profilePic =
    "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <Header />
      <Outlet />
      {/* {props.children && React.cloneElement(props.children, { profilePic })} */}
      <Footer />
    </>
  );
};

export default Layout;
