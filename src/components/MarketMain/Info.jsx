import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = ({ heading, content }) => {
  return (
    <section>
      <Title>
        <b>{heading}</b>
        <Link to="#">{"더보기 >"}</Link>
      </Title>
      <ol>
        {content &&
          content.map(item => {
            return <Post key={`${Date.now()}-${Math.random()}`}>{item}</Post>;
          })}
      </ol>
    </section>
  );
};

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  height: 40px;
  padding: 0 16px;
  align-items: center;
  background: var(--pink);

  b {
    font-size: 12px;
    font-weight: 700;
    color: white;
  }
  a {
    font-size: 12px;
    font-weight: 400;
    color: white;
  }
`;

const Post = styled.li`
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid var(--grey1);

  font-size: 12px;
  font-weight: 400;
  color: var(--pink);
`;

export default Info;
