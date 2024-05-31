import React from "react";
import ButtonBlue from "../common/ButtonBlue";

const Item = ({ data, type, ListStyle }) => {
  return (
    <ListStyle>
      <img />
      <div className="description">
        <div className="title">
          <h2>
            {data.title}
            <span className="promo">{data.promo}</span>
          </h2>
        </div>
        <span className="info">
          {data.publisher}/{data.writer}
        </span>
        <span className="stock">
          재고: <span className="highlightBlue">{data.stock}부</span>
        </span>
        <span className="location">
          {type} 위치: <span className="highlightPink">{data.location}</span>
        </span>
        <span className="lowest">
          최저가: <span className="highlightPink">{data.lowest}원</span>
        </span>
        <span className="price">정가: {data.price}원</span>
      </div>
      <div className="btns">
        <ButtonBlue>장바구니 추가</ButtonBlue>
        <ButtonBlue>서가 위치 보기</ButtonBlue>
      </div>
    </ListStyle>
  );
};

export default Item;
