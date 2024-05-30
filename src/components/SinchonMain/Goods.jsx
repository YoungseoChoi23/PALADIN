import { useState, useEffect } from "react";
import styled from "styled-components";
import GoodsItem from "./GoodsItem";

import { getProduct } from "../../services/api/example";

const Goods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct()
      .then(res => setData(res.data.productTypes[2].products))
      .catch(error => {
        if (error.code === "ERR_NETWORK") {
          console.error(
            "Network error: Please check your internet connection or the server status.",
          );
        } else {
          console.error("Error:", error.message);
        }
      });
  }, []);

  useEffect(() => {
    getProduct()
      .then(res => setData(res.data.productTypes[2].products))
      .catch(error => {
        if (error.code === "ERR_NETWORK") {
          console.error(
            "Network error: Please check your internet connection or the server status.",
          );
        } else {
          console.error("Error:", error.message);
        }
      });
  }, []);
  return (
    <GoodsList>
      <div className="goods-text">알라딘 굿즈</div>
      <div className="goods-items">
        {data.map(goods => {
          const lowestPriceItem = goods.items.reduce((minItem, currentItem) => {
            return currentItem.price < minItem.price ? currentItem : minItem;
          });
          const discount =
            ((goods.originalPrice - lowestPriceItem.price) /
              goods.originalPrice) *
            100;
          return (
            <GoodsItem
              book={goods.items[0].imgPath}
              name={goods.productName}
              price={lowestPriceItem.price}
              discount={discount.toFixed(0)}
              productId={goods.productId}
            />
          );
        })}
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
/* <GoodsItem
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
        />*/
