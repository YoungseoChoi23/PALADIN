import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../assets/S_main/arrow_right.svg";
import SecondHandItem from "./SecondHandItem";
import book1 from "../../assets/S_main/book1.svg";
import book2 from "../../assets/S_main/book2.svg";
import book3 from "../../assets/S_main/book3.svg";
import book4 from "../../assets/S_main/book4.svg";

const SecondHandBook = () => {
  return (
    <SecondHandBookList>
      <div className="secondHand-text">중고도서</div>
      <div className="secondHand-items">
        <SecondHandItem
          book={book1}
          name="트렌드 코리아 2024"
          price="8,700원"
          discount="54% 할인"
        />
        <SecondHandItem
          book={book2}
          name="남에게 보여주려고 인생
        을 낭비하지 마라"
          price="12,300원"
          discount="30% 할인"
        />
        <SecondHandItem
          book={book3}
          name="곰돌이 푸, 행복한 일은
        매일 있어 (한정판 벚꽃"
          price="7,800원"
          discount="35% 할인"
        />
        <SecondHandItem
          book={book4}
          name="사랑하라 한번도 상처
        받지 않은 것처럼"
          price="3,800원"
          discount="62% 할인"
        />
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
