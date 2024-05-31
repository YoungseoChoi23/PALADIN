import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Wrapper>
      <button disabled>{"<"}</button>
      <div>
        <small>총 100페이지</small>
        <fieldset>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
              return (
                <li key={`${Date.now()}-${Math.random()}`}>
                  <input
                    type="radio"
                    id={number}
                    name="pagination"
                    value={number}
                  />
                  <label htmlFor={number}>{number}</label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <small>100페이지 중 6페이지</small>
      </div>
      <button>{">"}</button>
      <button>{">>"}</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 32px;
  justify-content: end;

  display: flex;
  flex-flow: row nowrap;
  gap: 16px;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }
  div small {
    color: var(--gray2);
    font-size: 12px;
    font-weight: 400;
    text-align: end;
  }
  div fieldset ul {
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  }
  div fieldset ul li input[type="radio"] {
    display: none;
  }
  div fieldset ul li label {
    height: 18px;
    padding: 0 4px;
    background-color: var(--grey1);

    font-size: 12px;
    font-weight: 400;
    text-align: center;
    align-content: center;
  }
  div fieldset ul li input[type="radio"]:checked + label {
    background-color: var(--pink);
    color: white;
  }
`;

export default Pagination;
