import React from "react";
import PropTypes from "prop-types";

const ItemInfo = () => {
  return (
    <>
      <section>
        <article id="itemInfo">
          <div>
            <img src="./img/beverages.jpg" />
          </div>

          <div>
            <dl class="itemInfoSection">
              <dt>Item Name</dt>
              <dd>beverages</dd>
            </dl>
            <dl class="itemInfoSection">
              <dt>Price</dt>
              <dd>$5</dd>
            </dl>
            <dl class="itemInfoSection">
              <dt>Qty</dt>
              <dd>1</dd>
            </dl>
            <button type="submit">장바구니 담기</button>
          </div>
        </article>
      </section>

      <div id="thickLine"></div>

      <section id="itemDescription">
        <img src="./img/beverages.jpg" />
        <div>
          <p>Item Description</p>
        </div>
      </section>
    </>
  );
};

ItemInfo.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemInfo;
