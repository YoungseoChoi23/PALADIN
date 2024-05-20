import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";
import GoodsItem from "./GoodsItem";
import goods1 from "../../assets/S_main/goods1.png";
import goods2 from "../../assets/S_main/goods2.png";
import goods3 from "../../assets/S_main/goods3.png";
import goods4 from "../../assets/S_main/goods4.png";

const Goods = () => {
  return (
    <GoodsList>
      <div className="goods-text">알라딘 굿즈</div>
      <div className="goods-items">
        <GoodsItem
          book={goods1}
          name="피너츠 보냉파우치 & 토
          트백"
          price="17,800원"
          discount=""
        />
        <GoodsItem
          book={goods2}
          name="[김이랑 × 알라딘] 술잔
          세트 (2개입)"
          price="11,800원"
          discount=""
        />
        <GoodsItem
          book={goods3}
          name="빤쮸토끼 얼굴 파우치 
          키링"
          price="8,500원"
          discount=""
        />
        <GoodsItem
          book={goods4}
          name="빤쮸토끼 키링"
          price="10,000원"
          discount=""
        />
      </div>
    </GoodsList>
  );
};
export default Goods;

const GoodsList = styled.div`
  .goods-text {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 64px;
    margin-bottom: 39px;
  }
  .goods-items {
    display: flex;
    gap: 30px;
  }
`;
