import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer>
      <section>footer</section>
    </footer>
  );
};

Footer.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
