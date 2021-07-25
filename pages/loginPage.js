import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

LoginPage.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginPage;
