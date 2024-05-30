import { useState, useEffect } from "react";
import styled from "styled-components";
import SecondHandItem from "./SecondHandItem";
import { getProduct } from "../../services/api/example";

const SecondHandBook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct()
      .then(res => setData(res.data.productTypes[0].products))
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
    <SecondHandBookList>
      <div className="secondHand-text">중고도서</div>
      <div className="secondHand-items">
        {data.map(book => {
          const lowestPriceItem = book.items.reduce((minItem, currentItem) => {
            return currentItem.price < minItem.price ? currentItem : minItem;
          });
          const discount =
            ((book.originalPrice - lowestPriceItem.price) /
              book.originalPrice) *
            100;
          return (
            <SecondHandItem
              key={book.productId}
              type="도서"
              book={book.items[0].imgPath}
              name={book.productName}
              price={lowestPriceItem.price}
              discount={discount.toFixed(0)}
              productId={book.productId}
            />
          );
        })}
      </div>
    </SecondHandBookList>
  );
};
export default SecondHandBook;

const SecondHandBookList = styled.div`
  .secondHand-text {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 64px;
    margin-bottom: 39px;
  }
  .secondHand-items {
    display: flex;
    gap: 30px;
  }
`;
