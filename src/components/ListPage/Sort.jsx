import React from "react";
import styled from "styled-components";

const Sort = ({ count }) => {
  return (
    <section>
      <Sum>총 {count}건의 결과</Sum>
      <Fieldset>
        <input type="radio" id="sort1" name="sort" value="상품명순" />
        <label htmlFor="sort1">상품명순</label>
        <input type="radio" id="sort2" name="sort" value="출시일순" />
        <label htmlFor="sort2">출시일순</label>
        <input
          type="radio"
          id="sort3"
          name="sort"
          value="등록순순"
          defaultChecked
        />
        <label htmlFor="sort3">등록순</label>
        <input type="radio" id="sort4" name="sort" value="저가격순" />
        <label htmlFor="sort4">저가격순</label>
        <input type="radio" id="sort5" name="sort" value="고가격순" />
        <label htmlFor="sort5">고가격순</label>
        <input type="radio" id="sort6" name="sort" value="베스트순" />
        <label htmlFor="sort6">베스트순</label>
      </Fieldset>
    </section>
  );
};

const Sum = styled.b`
  width: fit-content;
  height: fit-content;
  display: block;
  margin-bottom: 24px;

  color: var(--black);
  font-size: 16px;
  font-weight: 700;
`;
const Fieldset = styled.fieldset`
  margin-bottom: 46px;

  display: flex;
  flex-flow: row nowrap;
  gap: 24px;

  input[type="radio"] {
    display: none;
  }
  label {
    color: var(--grey2);
    font-size: 16px;
    font-weight: 400;
  }
  input[type="radio"]:checked + label {
    color: var(--black);
  }
`;

export default Sort;
