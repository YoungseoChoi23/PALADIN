import React from "react";
import styled from "styled-components";
import Category from "./Category";

const Sidebar = ({ title, list }) => {
  return (
    <Aside>
      <b>{title}</b>
      {list.map(item => {
        return <Category data={item} key={`${Date.now()}-${Math.random()}`} />;
      })}
    </Aside>
  );
};

const Aside = styled.aside`
  margin-top: 150px;

  b {
    width: fit-content;
    height: fit-content;
    display: block;
    margin: 0 0 18px 32px;

    color: var(--black);
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Sidebar;
