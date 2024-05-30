import React from "react";
import styled from "styled-components";
import ButtonBlue from "../common/ButtonBlue";

const Book = ({ data }) => {
  return (
    <Wrapper>
      <img />
      <Description>
        <div id="title">
          <h2>
            {data.title}
            <span>{data.promo}</span>
          </h2>
        </div>
        <span>
          {data.publisher}/{data.writer}
        </span>
        <div id="store">
          <span>
            재고: <span className="highlightBlue">{data.stock}부</span>
          </span>
          <span>
            도서 위치: <span className="highlightPink">{data.location}</span>{" "}
            (위에서부터 4번째칸)
          </span>
        </div>
        <span>
          최저가: <span className="highlightPink">{data.lowest}원</span>
        </span>
        <span>정가: {data.price}원</span>
      </Description>
      <div id="btns">
        <ButtonBlue>장바구니 추가</ButtonBlue>
        <ButtonBlue>서가 위치 보기</ButtonBlue>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  img {
    margin-right: 24px;

    width: 180px;
    height: 240px;
    background-color: var(--grey2);
  }
  #btns {
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
`;
const Description = styled.div`
  width: 407px;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  #store {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  #store > span {
    display: block;
  }

  span {
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
  #title {
    width: 315px;

    color: var(--black);
    font-size: 20px;
    font-weight: 700;
  }
  #title span {
    margin-left: 16px;

    color: var(--pink);
    font-size: 16px;
    font-weight: 400;
  }
  .highlightBlue {
    color: var(--blue3);
    font-size: 16px;
    font-weight: 700;
  }
  .highlightPink {
    color: var(--pink);
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Book;
