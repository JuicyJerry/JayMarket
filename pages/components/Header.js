import React from "react";
import PropTypes from "prop-types";
import logo from "../../public/img/logo.png";
import search from "../../public/img/search.svg";
import menu from "../../public/img/menu.svg";
import location from "../../public/img/location.svg";
import cart from "../../public/img/cart.svg";

const Header = () => {
  return (
    <header>
      <div id="userButton">
        <ul>
          <li></li>
          <li>
            <input type="button" value="로그인" />
          </li>
          <li>|</li>
          <li>
            <input type="button" value="회원가입" />
          </li>
        </ul>
      </div>
      <div id="mainLogo">
        <img src={logo} alt="main page logo" />
      </div>
      <nav id="nav">
        <ul>
          <li>
            <img src={menu} alt="menu" />
            <input type="button" value="전체 카테고리" />
            <input type="button" value="알뜰 쇼핑" />
          </li>
          <li>
            <input type="text" placeholder="원하시는 검색어를 입력하세요." />
          </li>
          <li>
            <img src={search} alt="search" />
            <img src={location} alt="location" />
            <img src={cart} alt="cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
