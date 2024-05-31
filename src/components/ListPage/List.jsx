import React from "react";
import styled from "styled-components";
import Item from "./Item";

const List = ({ data, type, style }) => {
  return (
    <Wrapper>
      {data.map(item => {
        return (
          <li key={`${Date.now()}-${Math.random()}`}>
            <Item data={item} type={type} ListStyle={style} />
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ol`
  display: flex;
  flex-flow: column nowrap;
  gap: 56px;

  counter-reset: items;

  li {
    display: flex;
    counter-increment: items;
  }
  li:before {
    content: counter(items) ". ";
    vertical-align: top;
    margin-right: 20px;
  }
`;

export default List;
