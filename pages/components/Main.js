import React from "react";
import PropTypes from "prop-types";
import doughnuts from "../../public/img/doughnuts.jpg";
import tomatoes from "../../public/img/tomatoes.jpg";

const Main = () => {
  return (
    <>
      <article id="prSection">
        <img src={tomatoes} alt="tomatoes" />
        <p>이 상품 어때요?</p>
        <ul>
          <li>
            <img
              src={doughnuts}
              alt="doughnuts"
              style="width: 100px; height: 100px"
            />
            item
          </li>
        </ul>
      </article>
    </>
  );
};

Main.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
