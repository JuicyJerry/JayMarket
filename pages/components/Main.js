import React from "react";
import PropTypes from "prop-types";
import doughnuts from "../../public/img/doughnuts.jpg";
import tomatoes from "../../public/img/tomatoes.jpg";
import styled from "styled-components";
import Link from "next/link";

// const ItemList = styled.img.attrs({
//   src: doughnuts,
// });

const Main = () => {
  return (
    <article id="prSection">
      <img src={tomatoes} alt="tomatoes" />
      <p>이 상품 어때요?</p>
      <ul>
        <li>
          <Link href="/itemInfoPage">
            {/* <ItemList alt="doughnets" /> */}
            <img src={doughnuts} alt="doughnets" />
          </Link>
        </li>
      </ul>
    </article>
  );
};

{
  {
    /* <a>item</a> */
  }
  /* <showItems src={doughnuts} alt="doughnuts"> */
  // width: 100px; height: 100px";
}
Main.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
