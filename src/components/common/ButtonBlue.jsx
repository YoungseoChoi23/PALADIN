import React from "react";
import styled from "styled-components";

const ButtonBlue = props => {
  return <Button>{props.children}</Button>;
};

export const Button = styled.button`
  padding: 8px;
  border: 1px solid #3962ad;
  border-radius: 4px;
  background-color: #e8edf6;

  color: #3962ad;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    background-color: #cee0ff;
  }
`;

export default ButtonBlue;
