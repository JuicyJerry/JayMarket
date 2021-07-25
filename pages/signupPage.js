import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const SignupPage = () => {
  return (
    <>
      <Header />
      <Signup />
      <Footer />
    </>
  );
};

SignupPage.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default SignupPage;
