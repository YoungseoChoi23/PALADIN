import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";

const SecondHandItem = ({ book, name, price, discount }) => {
  return (
    <Item>
      <div className="secondHandItem">
        <div>
          <img src={book}></img>
        </div>
        <div className="name">{name}</div>
        <div className="price-discount">
          <div className="price">{price}</div>
          <div className="discount">{discount}</div>
        </div>
      </div>
    </Item>
  );
};
export default SecondHandItem;

const Item = styled.div`
  .secondHandItem {
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
  }
  .price-discount {
    display: flex;
    gap: 16px;
    margin: auto;
  }
  .price {
    color: var(--02, #ea328f);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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
