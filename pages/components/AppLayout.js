import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// import Image from "next/image";
// import logo from "../../next.config";
// import logo from "../../public/img/logo.png";
// import search from "../../public/img/search.svg";
// import menu from "../../public/img/menu.svg";
// import location from "../../public/img/location.svg";
// import cart from "../../public/img/cart.svg";

const AppLayout = () => {
  return <div>Hello, JayMarket!</div>;
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
