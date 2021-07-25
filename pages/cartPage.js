import React from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const CartPage = () => {
  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
};

CartPage.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default CartPage;
