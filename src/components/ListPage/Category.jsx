import React, { useState } from "react";
import styled from "styled-components";

const Category = ({ data }) => {
  const [showSubclass, setShowSubclass] = useState(false);

  return (
    <Wrapper>
      <Major>
        <span className="class">{data.class}</span>
        <input
          type="checkbox"
          id={`show-${data.class}`}
          checked={showSubclass}
          onChange={() => {
            setShowSubclass(!showSubclass);
          }}
        />
        <label htmlFor={`show-${data.class}`} />
      </Major>
      <Minor className={showSubclass ? "show" : "hidden"}>
        {data.subclass.map(item => {
          return (
            <span className="subclass">
              {item.name} <small>({item.number})</small>
            </span>
          );
        })}
      </Minor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 326px;

  span {
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
`;
const Major = styled.div`
  padding: 16px 32px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--grey1);
  background-color: white;

  input[type="checkbox"] {
    display: none;
  }
  label {
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
  input[type="checkbox"] + label::after {
    content: "+";
  }
  input[type="checkbox"]:checked + label::after {
    content: "-";
  }
`;
const Minor = styled.div`
  width: 326px;
  height: 127px;

  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;

  background-color: var(--grey1);

  &.show {
    display: grid;
  }
  &.hidden {
    display: none;
  }
  small {
    color: var(--grey2);
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Category;
