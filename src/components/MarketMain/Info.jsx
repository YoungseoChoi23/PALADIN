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
            return <Post>{item}</Post>;
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
  background: #ea328f;

  b {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
  a {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }
`;

const Post = styled.li`
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;

  color: #ea328f;
  font-size: 12px;
  font-weight: 400;
`;

export default Info;
