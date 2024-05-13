import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";

const GoodsItem = ({ book, name, price, discount }) => {
  return (
    <Item>
      <div className="goodsItem">
        <div>
          <img src={book}></img>
        </div>
        <div className="name">{name}</div>
        <div className="price-discount">
          <div className="price">{price}</div>
        </div>
      </div>
    </Item>
  );
};
export default GoodsItem;

const Item = styled.div`
  .goodsItem {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .name {
    color: var(---, #010101);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
  }
  .price-discount {
    display: flex;
    gap: 16px;
  }
  .price {
    color: var(--02, #ea328f);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
  }
  .discount {
    color: var(--02, #999);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
