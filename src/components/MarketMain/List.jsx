import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = ({ title, list }) => {
  return (
    <Wrapper>
      <span>{title}</span>
      <Ul>
        {list &&
          list.map(item => {
            return (
              <li key={`${Date.now()}-${Math.random()}`}>
                <Link to="/sinchonMain">{item}</Link>
              </li>
            );
          })}
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  span {
    width: 86px;
    height: auto;
    padding: 16px;

    text-align: end;
    align-content: end;

    background: var(--blue3);
    border-bottom: 1px solid #fafafa;
    color: white;
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: #fafafa;

  li {
    width: 98px;
    height: 52px;
    border: 1px solid var(--blue1);
  }

  li a {
    display: block;
    height: 100%;
    padding: 0 12px;

    text-align: center;
    align-content: center;
    word-break: keep-all;
  }

  li:hover {
    background-color: #cee0ff;
    border: 1px solid var(--blue3);
  }
`;

export default List;
