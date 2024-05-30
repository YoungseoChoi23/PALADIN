import React, { useState } from "react";
import styled from "styled-components";
import plusCircle from "../../assets/MarketMain/plus-circle.svg";

const SalesUpdate = () => {
  const [contents, setContents] = useState(all);

  return (
    <Wrapper>
      <b id="today">오늘 매입 가능 종수 : 265,843종</b>
      <RadioGroup>
        <input
          id="radioButtonAll"
          type="radio"
          name="salesUpdate"
          value="전체"
          defaultChecked
          onChange={() => setContents(all)}
        />
        <label htmlFor="radioButtonAll">전체</label>
        <input
          id="radioButtonKor"
          type="radio"
          name="salesUpdate"
          value="국내도서"
          onChange={() => setContents(kor)}
        />
        <label htmlFor="radioButtonKor">국내도서</label>
        <input
          id="radioButtonMusic"
          type="radio"
          name="salesUpdate"
          value="음반"
          onChange={() => setContents(music)}
        />
        <label htmlFor="radioButtonMusic">음반</label>
        <input
          id="radioButtonDvd"
          type="radio"
          name="salesUpdate"
          value="DVD"
          onChange={() => setContents(dvd)}
        />
        <label htmlFor="radioButtonDvd">DVD</label>
      </RadioGroup>
      <Article>
        <div>
          <small>정상매입</small>
          <b>{Intl.NumberFormat().format(contents[0])}종</b>
        </div>
        <div>
          <small>균일가매입</small>
          <b>{Intl.NumberFormat().format(contents[1])}종</b>
        </div>
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 16px 13px;
  text-align: center;

  border-top: 1px solid var(--pink);
  border-bottom: 1px solid var(--pink);
  background: white;

  #today {
    margin-bottom: 12px;
    display: block;

    font-size: 14px;
    font-weight: 700;
    color: var(--pink);
  }
`;

const RadioGroup = styled.fieldset`
  margin-bottom: 8px;
  display: flex;
  flex-flow: row nowrap;

  input[type="radio"] {
    display: none;
  }
  label {
    width: 64px;
    height: 22px;
    background: var(--grey1);

    font-size: 12px;
    font-weight: 400;
    color: var(--black);
    align-content: center;
  }
  input[type="radio"]:checked + label {
    border-top: 1px solid var(--grey1);
    background: white;

    font-weight: 700;
    color: var(--pink);
  }
`;

const Article = styled.article`
  padding: 0 26px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background-image: url(${plusCircle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
  }
  div small {
    font-size: 12px;
    font-weight: 400;
  }
  div b {
    font-size: 16px;
    font-weight: 700;
  }
`;

const all = [286148, 8321];
const kor = [0, 0];
const music = [0, 0];
const dvd = [0, 0];

export default SalesUpdate;
