import React from "react";
import styled from "styled-components";

const Lookup = () => {
  return (
    <Wrapper>
      <Title>
        <h1>중고상품 매입가를 조회해 보세요.</h1>
        <b>조회한 매입 예상가, 매입 여부는 실제 매입가와 다를 수 있습니다.</b>
      </Title>
      <Form>
        <b>상품타입</b>
        <fieldset>
          <input
            type="radio"
            id="productType1"
            name="productType"
            value="국내도서"
          />
          <label htmlFor="productType1">국내도서</label>
          <input
            type="radio"
            id="productType2"
            name="productType"
            value="외국도서"
          />
          <label htmlFor="productType2">외국도서</label>
          <input
            type="radio"
            id="productType3"
            name="productType"
            value="음반"
          />
          <label htmlFor="productType3">음반</label>
          <input
            type="radio"
            id="productType4"
            name="productType"
            value="DVD/블루레이"
          />
          <label htmlFor="productType4">블루레이</label>
        </fieldset>
        <b>상품명 또는 ISBN</b>
        <div id="textForm">
          <input
            type="text"
            name="nameOrISBN"
            placeholder="상품명 또는 ISBN을 입력해주세요"
          />
          <input type="submit" name="search" value="검색" />
        </div>
        <small>스마트폰으로 바코드를 촬영하면 중고로 팔 수 있어요.</small>
      </Form>
      <img
        src={require("../../assets/MarketMain/lookup.png")}
        alt="책 뒷면 10 or 13자리"
      />
      <Ul>
        <li>
          조회한 매입 예상가는 현재의 정가에 대한 것으로, 동일 ISBN의 구정가의
          경우 실제 매입가가 낮아질 수 있습니다.
        </li>
        <li>
          매입가와 판매 가능 여부는 실시간으로 변경되므로 매장 방문 시점에
          상품의 적정 재고량을 초과하면 매입가가 내려가거나 매입되지 않을 수
          있습니다. 단 온라인 매입은 접수완료 시간 기준으로 확정됩니다.
        </li>
        <li>
          매입 가능한 상품이어도 상품의 품질 상태에 따라 매입불가일 수 있습니다.
        </li>
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
  padding: 24px 40px;
  background: var(--grey1);

  display: grid;
  grid-template-areas:
    "title image"
    "form image"
    "explanation explanation";
  row-gap: 20px;

  div:first {
    grid-area: title;
  }

  form {
    grid-area: form;
  }

  img {
    grid-area: image;
    margin-left: auto;
  }

  ul {
    grid-area: explanation;
  }
`;

const Title = styled.div`
  h1 {
    font-size: 16px;
    font-weight: 700;
  }

  b {
    font-size: 12px;
    font-weight: 700;
    color: var(--pink);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-areas:
    "heading1 input1"
    "heading2 input2"
    "none description";
  gap: 16px;

  align-items: center;
  width: fit-content;
  height: fit-content;

  b {
    font-size: 12px;
    font-weight: 700;
    align-content: center;
    white-space: nowrap;
    width: fit-content;
  }

  b:first-child {
    grid-area: heading1;
  }

  fieldset {
    grid-area: input1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  fieldset input[type="radio"] {
    margin: 0 4px 0 0;
  }

  fieldset label {
    font-size: 12px;
    font-weight: 400;
    margin-right: 16px;
  }

  b:last-child {
    grid-area: heading2;
  }

  #textForm {
    grid-area: input2;

    display: flex;
    align-items: center;
    gap: 4px;

    width: fit-content;
    height: fit-content;
  }

  #textForm input[type="text"] {
    padding: 0;

    width: 216px;
    height: 22px;
    border: 1px solid var(--grey2);

    font-family: "Pretendard-regular";
    font-size: 12px;
    font-weight: 400;
    color: var(--grey2);
    text-align: center;
  }

  #textForm input[type="submit"] {
    height: 100%;
    padding: 4px 16px;
    border-radius: 2px;
    background-color: var(--pink);

    font-family: "Pretendard-regular";
    font-size: 12px;
    font-weight: 700;
    color: white;
  }

  small {
    grid-area: description;

    font-size: 12px;
    font-weight: 400;
    color: var(--pink);
  }
`;

const Ul = styled.ul`
  list-style: disc;
  list-style-position: inside;

  li {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey2);
  }
`;

export default Lookup;
