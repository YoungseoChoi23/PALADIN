import { useState, useEffect } from "react";
import styled from "styled-components";
import SecondHandItem from "./SecondHandItem";
import book1 from "../../assets/S_main/book1.svg";
import book2 from "../../assets/S_main/book2.svg";
import book3 from "../../assets/S_main/book3.svg";
import book4 from "../../assets/S_main/book4.svg";
import { getProduct } from "../../services/api/example";

const SecondHandBook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct()
      .then(res => console.log(res))
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
        {data.map(book => (
          <SecondHandItem
            book={book.items.imgPath}
            name={book.productName}
            price={book.items.price}
          />
        ))}
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
