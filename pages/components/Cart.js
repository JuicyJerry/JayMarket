import React from "react";
import PropTypes from "prop-types";

const Cart = () => {
  return (
    <section id="cart">
      <div id="cart_select">
        <p>장바구니</p>
        <article>
          <label id="check">
            <input type="checkbox" />
            전체선택(0/0)
          </label>
          <div id="empty">
            <a href="#none" id="btn_delete">
              선택삭제
            </a>
          </div>
        </article>
        <article id="inner_empty">
          <p>장바구니에 담긴 상품이 없습니다</p>
        </article>
      </div>

      <div id="cart_result">
        <div>
          <dl id="amount">
            <dt class="tit">상품 금액</dt>
            <dd class="price">
              <span class="num">0</span>
              <span class="won">원</span>
            </dd>
          </dl>
          <dl id="amount_list">
            <dt class="tit">결제예정금액</dt>
            <dd class="price">
              <span class="num">0</span>
              <span class="won">원</span>
            </dd>
          </dl>
          <div id="btn_submit">
            <button type="submit" class="btn disabled">
              상품을 담아주세요
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Cart.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Cart;
