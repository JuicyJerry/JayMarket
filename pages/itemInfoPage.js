import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import ItemInfo from "./components/ItemInfo";
import Footer from "./components/Footer";

const ItemInfoPage = () => {
  return (
    <>
      <Header />
      <ItemInfo />
      <Footer />
    </>
  );
};

ItemInfoPage.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemInfoPage;
