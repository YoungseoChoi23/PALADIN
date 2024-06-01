import React from "react";
import ButtonBlue from "../common/ButtonBlue";
import { useNavigate } from "react-router-dom";

const Item = ({ data, type, productId, ListStyle, detailRoute }) => {
  const navigate = useNavigate();

  return (
    <ListStyle onClick={() => navigate(`${detailRoute}/${productId}`)}>
      <img src={data.imgPath} />
      <div className="description">
        <div className="title">
          <h2>
            {data.productName}
            <span className="promo">{data.promo}</span>
          </h2>
        </div>
        <span className="info">{data.info}</span>
        <span className="stock">
          재고: <span className="highlightBlue">{data.stockQuantity}부</span>
        </span>
        <span className="location">
          {type} 위치:{" "}
          <span className="highlightPink">{data.items.items[0].location}</span>
        </span>
        <span className="lowest">
          최저가:{" "}
          <span className="highlightPink">{data.items.items[0].price}원</span>
        </span>
        <span className="price">정가: {data.originalPrice}원</span>
      </div>
      <div className="btns">
        <ButtonBlue>서가 위치 보기</ButtonBlue>
      </div>
    </ListStyle>
  );
};

export default Item;
