import React from "react";
import styled from "styled-components";

const ButtonBlue = props => {
  return <Button>{props.children}</Button>;
};

export const Button = styled.button`
  padding: 8px;
  border: 1px solid var(--blue3);
  border-radius: 4px;
  background-color: var(--blue1);

  font-size: 12px;
  font-weight: 500;
  color: var(--blue3);

  &:hover {
    background-color: #cee0ff;
  }
`;

export default ButtonBlue;
